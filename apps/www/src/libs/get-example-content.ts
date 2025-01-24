"use server"

import fs from "fs/promises"
import path from "path"

export async function getExampleContent(name: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "src/components/examples",
      `${name}.tsx`
    )
    const content = await fs.readFile(filePath, "utf-8")
    return content
  } catch (error) {
    console.error("Error reading file:", error)
    return null
  }
}
