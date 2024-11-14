// app/routes/index.tsx
import * as fs from 'node:fs'
import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'

const filePath = 'count.txt'

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'),
  )
}

const getCount = createServerFn('GET', () => {
  return readCount()
})

const updateCount = createServerFn('POST', async (addBy: number) => {
  const count = await readCount()
  await fs.promises.writeFile(filePath, `${count + addBy}`)
})

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

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
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <button className='p-4 rounded-lg border border-gray-cool-20 text-left'>
              <p className='text-xl font-bold mb-2'>Bud Baxter</p>
              <dl className='space-y-2'>
                <div className='flex'>
                  <dt className='font-bold'>Description:</dt>
                  <dd className='pl-2'>Household contact</dd>
                </div>
                <div className='flex'>
                  <dt className='font-bold'>Favorite fruit:</dt>
                  <dd className='pl-2'>Apple</dd>
                </div>
              </dl>
            </button>
            <button className='p-4 rounded-lg border border-gray-cool-20 text-left'>
              <p className='text-xl font-bold mb-2'>Bud Baxter</p>
              <dl className='space-y-2'>
                <div className='flex'>
                  <dt className='font-bold'>Description:</dt>
                  <dd className='pl-2'>Household contact</dd>
                </div>
                <div className='flex'>
                  <dt className='font-bold'>Favorite fruit:</dt>
                  <dd className='pl-2'>Apple</dd>
                </div>
              </dl>
            </button>
          </div>
          <div className='mt-8'>
            <button
              type="button"
              className="rounded font-bold leading-none text-white px-5 py-3 bg-blue-60v hover:bg-blue-warm-70v active:bg-blue-warm-80v focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-blue-40v"
              onClick={() => {
                updateCount(1).then(() => {
                  router.invalidate()
                })
              }}
            >
              Add new member
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
