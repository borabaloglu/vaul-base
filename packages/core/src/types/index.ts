export type DrawerDirection = "top" | "bottom" | "left" | "right" | "center"
export interface SnapPoint {
  fraction: number
  height: number
}

export type AnyFunction = (...args: any) => any
