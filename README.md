# Marketplace

## How to run

`pnpm i && pnpm dev`

[Stackblitz / Repo Fork](https://stackblitz.com/github/IHIutch/marketplace)
[Stackblitz w/ updated API](https://stackblitz.com/edit/github-nujzdp)

## Technical Decisions

### Framework
I chose to use [Remix](https://remix.run/) because I wanted to use a framework where I could simulate receiving and sending data to the backend. With Remix, it is easy to make sure your the data sent over the network is typesafe. It provides several convenient hooks to manage sending and receiving data as well as managing network requests.

### Libraries

#### [Zod](https://zodjs.netlify.app/) 

This provides the data validation layer when sending and receiving data. Valid data becomes typesafe, otherwise an error is thrown.

#### [Tailwind](https://tailwindcss.com/)

Used for styling. Tailwind makes it easy to make adjustments to the interface without having to get distracted naming classes and fighting the style cascade.

I've recently made a [Tailwind version of USWDS](https://uswds-tailwind.com/), so I've used that here.

#### [Ark UI](https://ark-ui.com/react/docs/components/dialog)

Ark UI is the foundation to an excellent library, Chakra UI. I chose to use Ark UI because it provides basic, composable functionality with stylistic opinions. Ark UI/Chakra UI prioritizes accessibility, which is helpful when using more complicated components like Modals/Dialogs.

## Design Choices

1. The mockup looked similar enough to USWDS, so I chose to use that as a starting point for this project.
   
2. The heading background color is slightly different than the mockup. When using a predefined design system, this sort of difference in a design file is either unintentional/accidental or warrants a conversation as to why it's different and if it should be, preserving the integrity of the design system.

    In this case, I used the closest matching color from the design system.

3. Interactive states on the "household member" buttons 
    
    These are not USWDS components, but are still buttons. Ideally, they'd share interactive styles to communicate their functionality and aid accessibility, like their "focus" state.

## Additional Questions

1. Why is the heading color "different"? Is that intentional? If so, should it be?
2. What interactive states should their be on the "household member" buttons? Hover, focus, active, etc?
3. What should editing these values look like? Interactive behavior for that experience (modal, drawer, new page, etc)?
4. Form validation states. What fields are required? How should we handle form errors/success and invalid/valid states?
5. Should "favorite fruit" be validated? Are there specific options where using a `select`, `checkbox`, or `combobox` makes more sense than a text input?
6. What happens if someone adds a long name, description, or fruit? Is there a design to handle that or should we limit input length?
7. Should you be able to delete users? What does that look like?
8. What does it look like if there are no users?