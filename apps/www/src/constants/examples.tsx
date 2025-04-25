import BasicDrawer from "@/components/examples/basic"
import DirectionsDrawer from "@/components/examples/directions"
import NestedDrawer from "@/components/examples/nested"
import NonDismissableDrawer from "@/components/examples/non-dismissable"
import ScaledBackgroundDrawer from "@/components/examples/scaled-background"
import { ScrollableDrawer } from "@/components/examples/scrollable"
import SnapPointsDrawer from "@/components/examples/snap-points"
import WithInputDrawer from "@/components/examples/with-input"

export const EXAMPLES = {
  basic: {
    name: "Basic",
    description: "A simple demonstration of the core drawer functionality.",
    render: () => <BasicDrawer />,
  },
  nested: {
    name: "Nested",
    description:
      "An example showing layered, hierarchical drawers that can be opened within each other.",
    render: () => <NestedDrawer />,
  },
  directions: {
    name: "Directions",
    description: "Drawers can be opened from different sides of the screen.",
    render: () => <DirectionsDrawer />,
  },
  "scaled-background": {
    name: "Scaled Background",
    description:
      "Drawer with a background that scales to create a layered effect.",
    render: () => <ScaledBackgroundDrawer />,
  },
  "snap-points": {
    name: "Snap Points",
    description: "Drawer with snap points for different heights.",
    render: () => <SnapPointsDrawer />,
  },
  scrollable: {
    name: "Scrollable",
    description: "Drawer with a scrollable content.",
    render: () => <ScrollableDrawer />,
  },
  "non-dismissable": {
    name: "Non-Dismissable",
    description: "Drawer that cannot be dismissed.",
    render: () => <NonDismissableDrawer />,
  },
  "with-input": {
    name: "Input",
    description: "Drawer with an input field.",
    render: () => <WithInputDrawer />,
  },
}
