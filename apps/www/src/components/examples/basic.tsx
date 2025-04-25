import { Drawer } from "vaul-base"

import { Button } from "@/components/button"

const BasicDrawer = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger
        render={(props) => <Button {...props}>Open Drawer</Button>}
      />
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/80" />
        <Drawer.Content className="bg-background text-foreground fixed inset-x-0 bottom-0 h-[70vh] w-full rounded-t-lg border">
          <Drawer.Handle className="top-4" />
          <div className="mx-auto flex h-full max-w-sm flex-col justify-center space-y-4 px-4">
            <h4 className="font-semibold">Welcome to the Drawer</h4>
            <p>
              This drawer slides up smoothly from the bottom of your screen.
            </p>
            <p>
              Try interacting with it - you can drag it up and down with your
              finger or mouse. The natural gestures make it feel right at home
              on mobile devices.
            </p>
            <p>
              When you&apos;re done, just swipe down or click outside to dismiss
              it. Simple and intuitive!
            </p>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default BasicDrawer
