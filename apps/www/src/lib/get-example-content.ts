"use server"

import fs from "fs/promises"
import path from "path"

export async function getExampleContent(name: string) {
  try {
    if (process.env.NODE_ENV === "development") {
      const filePath = path.join(
        process.cwd(),
        "src/components/examples",
        `${name}.tsx`
      )
      return await fs.readFile(filePath, "utf-8")
    }

    // Production: read from public/e
    const response = await fetch(`https://vaul-base.vercel.app/e/${name}.tsx`, {
      cache: "force-cache",
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch example: ${response.statusText}`)
    }

    return await response.text()
  } catch (error) {
    console.error("Error fetching example:", error)
    return null
  }
}
