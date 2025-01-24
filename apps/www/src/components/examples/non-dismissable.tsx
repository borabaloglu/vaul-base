import { useState } from "react"
import { Drawer } from "vaul-base"

import { Button } from "@/components/button"

const NonDismissableDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Drawer.Root dismissible={false} open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger
        render={(props) => <Button {...props}>Open Drawer</Button>}
      />
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/70" />
        <Drawer.Content className="bg-bg text-fg border-muted fixed inset-x-0 bottom-0 h-[70vh] w-full rounded-t-lg border">
          <div className="mx-auto flex h-full max-w-sm flex-col justify-center space-y-4 px-4">
            <h4 className="font-semibold">Non-dismissible Drawer</h4>
            <p>
              Non-dismissible drawers are perfect for scenarios where users must
              complete an action before closing, like forms or important
              confirmations.
            </p>
            <p>
              To create a non-dismissible drawer, set the{" "}
              <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                dismissible
              </code>{" "}
              prop to false on the{" "}
              <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                Drawer.Root
              </code>{" "}
              component.
            </p>
            <Button onClick={() => setIsOpen(false)}>Close Drawer</Button>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default NonDismissableDrawer
