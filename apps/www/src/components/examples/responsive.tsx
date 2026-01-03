import { Drawer } from "vaul-base"

import { Button } from "@/components/button"
import { useIsMobile } from "@/hooks/use-mobile"

const ResponsiveDrawer = () => {
  const isMobile = useIsMobile()
  return (
    <Drawer.Root direction={isMobile ? "bottom" : "center"}>
      <Drawer.Trigger
        render={(props) => <Button {...props}>Open Drawer</Button>}
      />
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/80" />
        <Drawer.Content className="bg-background text-foreground fixed inset-x-0 bottom-0 h-auto w-full border group rounded-lg

        data-[vaul-drawer-direction=center]:max-w-xl
        data-[vaul-drawer-direction=bottom]:max-w-full data-[vaul-drawer-direction=bottom]:rounded-b-none
        data-[vaul-drawer-direction=top]:max-w-full data-[vaul-drawer-direction=top]:rounded-t-none
        data-[vaul-drawer-direction=left]:max-w-64 data-[vaul-drawer-direction=left]:w-2/3 data-[vaul-drawer-direction=left]:rounded-l-none data-[vaul-drawer-direction=left]:h-full
        data-[vaul-drawer-direction=right]:max-w-64 data-[vaul-drawer-direction=right]:w-2/3 data-[vaul-drawer-direction=right]:rounded-r-none data-[vaul-drawer-direction=right]:h-full
        ">
          <div className="hidden group-data-[vaul-drawer-direction=bottom]:block">
            <Drawer.Handle className="top-3" />
          </div>

          <div className="flex flex-col space-y-4 p-6">
            <h4 className="font-semibold">Welcome to the Drawer</h4>
            <p>
              This drawer adapts its direction based on your screen size.
            </p>
            <p>
              We just change the direction prop dynamically using a custom hook. The transition between directions is 
              handeled smoothly by the drawer component.
            </p> 


            <pre className="rounded bg-muted p-4 text-sm overflow-x-auto">
              <code>{`<Drawer.Root direction={isMobile ? "bottom" : "center"}>
  ...
</Drawer.Root>`}
              </code>
            </pre>
          </div>
          
          <div className="hidden group-data-[vaul-drawer-direction=top]:block">
            <Drawer.Handle className="-top-3" />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default ResponsiveDrawer
