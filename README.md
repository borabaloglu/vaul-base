# Vaul Base

![](./static/og.jpg)

[![npm version](https://flat.badgen.net/npm/v/vaul-base?color=green)](https://npmjs.com/package/vaul-base)
[![npm downloads](https://flat.badgen.net/npm/dm/vaul-base?color=green)](https://npmjs.com/package/vaul-base)
[![license](https://flat.badgen.net/github/license/borabaloglu/vaul-base?color=green)](https://github.com/borabaloglu/vaul-base/blob/main/LICENSE)

Vaul Base is an unstyled drawer component for React, built with Base UI. It serves as a replacement for Dialog on mobile and tablet
devices. The component utilizes [Base UI's Dialog](https://base-ui.com/react/components/dialog) internally.

This is a port of [Vaul](https://vaul.emilkowal.ski/) to Base UI. It's originally created by [Emil Kowalski](https://emilkowal.ski/).

## Usage

To start using Vaul Base, install it in your project:

```bash
npm install vaul-base
```

Use the Drawer in your application:

```tsx
import { Drawer } from "vaul-base"

function MyDrawerComponent() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content>Drawer content</Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
```

## Examples

[Here are additional examples](https://vaul-base.vercel.app/examples) demonstrating the component in use.

## Documentation

You can use original [Vaul documentation](https://vaul.emilkowal.ski/getting-started) for more information.
