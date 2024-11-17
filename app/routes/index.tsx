// app/routes/index.tsx
import * as React from 'react'
import * as fs from 'node:fs'
import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import { Dialog } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'
import z from 'zod'


const filePath = 'items.json'

const itemSchema = z.object({
  name: z.string(),
  description: z.string(),
  fruit: z.string(),
})

async function readItems() {
  const contents = await fs.promises.readFile(filePath, 'utf-8').catch(() => '[]')
  return itemSchema.array().parse(JSON.parse(contents))
}

const getItems = createServerFn({ method: 'GET' }).handler(() => {
  return readItems()
})

const updateItems = createServerFn({ method: "POST" })
  .validator((data: FormData) => data)
  .handler(async ({ data }) => {

    const idx = Number(data.get('activeIdx'))
    const name = String(data.get('name'))
    const description = String(data.get('description'))
    const fruit = String(data.get('fruit'))

    const items = await readItems()

    if (idx === -1) {
      items.push({
        name,
        description,
        fruit
      })
    } else {
      items[idx] = {
        name,
        description,
        fruit
      }
    }
    await fs.promises.writeFile(filePath, JSON.stringify(items, null, 2))
  })

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => {
    const items = await getItems()
    return {
      items
    }
  },
})

function Home() {
  const router = useRouter()
  const { items } = Route.useLoaderData()

  const [isOpen, setIsOpen] = React.useState(false)
  const [activeIdx, setActiveIdx] = React.useState(-1)

  const handleOpenModal = (id: number) => {
    setIsOpen(true)
    setActiveIdx(id)
  }

  return (
    <div>
      <div className='bg-blue-70v h-16 flex items-center'>
        <div className="max-w-6xl mx-auto w-full px-4">
          <Link href="/" className='text-white text-2xl font-bold'>Marketplace</Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="py-12">
          <div>
            <h1 className='text-2xl font-bold mb-4'>Your household</h1>
            <p>Welcome to The Marketplace! Review your household below:</p>
          </div>
          <div className='mt-8 grid grid-cols-1 tablet-lg:grid-cols-2 desktop:grid-cols-3 gap-6'>
            {items ? items.map((item, idx) => (
              <div key={idx} className='p-4 rounded-lg border border-gray-cool-20 relative focus-within:outline focus-within:outline-4 focus-within:outline-offset-4 focus-within:outline-blue-40v'>
                <button onClick={() => handleOpenModal(idx)} className='text-left text-xl font-bold after:absolute after:inset-0 mb-2 focus:outline-none'>
                  {item.name}
                </button>
                <dl className='space-y-2'>
                  <div className='flex'>
                    <dt className='font-bold'>Description:</dt>
                    <dd className='pl-2'>{item.description}</dd>
                  </div>
                  <div className='flex'>
                    <dt className='font-bold'>Favorite fruit:</dt>
                    <dd className='pl-2'>{item.fruit}</dd>
                  </div>
                </dl>
              </div>
            )) : null}
          </div>
          <div className='mt-8'>
            <button
              onClick={() => handleOpenModal(-1)}
              type="button"
              className="rounded font-bold leading-none text-white px-5 py-3 bg-blue-60v hover:bg-blue-warm-70v active:bg-blue-warm-80v focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-blue-40v"
            >
              Add new member
            </button>
          </div>
        </div>
      </div>

      <Dialog.Root key={activeIdx} open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop className='fixed z-40 inset-0 bg-black/70 animate-in ease-in-out duration-150 fade-in' />
          <Dialog.Positioner className='fixed inset-0 overflow-y-auto flex items-center justify-center p-4 z-50 animate-in ease-in-out duration-150 fade-in'>
            <Dialog.Content className='@container relative w-full max-w-lg rounded-lg bg-white shadow-lg p-8 pt-10'>
              <form onSubmit={
                async (event) => {
                  event.preventDefault()
                  const target = event.currentTarget
                  // const formData = new FormData(target)
                  await updateItems({
                    data: new FormData(target)
                  }).then(() => {
                    router.invalidate()
                    setIsOpen(false)
                  })
                }}>
                <div>
                  <Dialog.Title className='text-xl font-bold font-merriweather'>Dialog Title</Dialog.Title>
                  <Dialog.Description>Make changes to your profile here. Click save when you are done.</Dialog.Description>
                </div>

                <div className='space-y-4 mt-4'>
                  <div>
                    <input type="text" name="activeIdx" defaultValue={activeIdx} hidden />
                    <label htmlFor="name" className="block">Name</label>
                    <div className="mt-2 relative">
                      <input
                        id="name"
                        name="name"
                        className="p-2 w-full max-w-lg h-10 border border-gray-60 focus:outline focus:outline-offset-0 focus:outline-4 focus:outline-blue-40v"
                        defaultValue={items[activeIdx]?.name || ''}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="description" className="block">Description</label>
                    <div className="mt-2 relative">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="p-2 w-full max-w-lg border border-gray-60 focus:outline focus:outline-offset-0 focus:outline-4 focus:outline-blue-40v resize-none"
                        defaultValue={items[activeIdx]?.description || ''}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="fruit" className="block">Favorite Fruit</label>
                    <div className="mt-2 relative">
                      <input
                        id="fruit"
                        name="fruit"
                        className="p-2 w-full max-w-lg h-10 border border-gray-60 focus:outline focus:outline-offset-0 focus:outline-4 focus:outline-blue-40v"
                        defaultValue={items[activeIdx]?.fruit || ''}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 justify-end mt-4">
                  <Dialog.CloseTrigger className='rounded font-bold leading-none text-blue-60v px-5 py-3 bg-transparent ring-inset ring-2 ring-blue-60v hover:ring-blue-warm-70v hover:text-blue-warm-70v active:ring-blue-warm-80v active:text-blue-warm-80v focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-blue-40v'>Close</Dialog.CloseTrigger>
                  <button type="submit" className='rounded font-bold leading-none text-white px-5 py-3 bg-blue-60v hover:bg-blue-warm-70v active:bg-blue-warm-80v focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-blue-40v'>Save</button>
                </div>
              </form>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

    </div >
  )
}
