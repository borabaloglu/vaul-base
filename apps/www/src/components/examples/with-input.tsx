import { Drawer } from "vaul-base"

import { Button } from "@/components/button"

const WithInputDrawer = () => {
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
            <h4 className="font-semibold">Drawer with input</h4>
            <p>
              This drawer has an input field. Try typing in the input field.
            </p>
            <textarea
              className="bg-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring aria-[invalid=true]:border-destructive aria-[invalid=true]:text-destructive aria-[invalid=true]:placeholder:text-destructive aria-[invalid=true]:focus:ring-destructive flex min-h-20 w-full rounded-md border p-4 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="Type something..."
            />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default WithInputDrawer
