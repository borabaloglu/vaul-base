import fs from "fs/promises"
import path from "path"

async function copyExamples() {
  const sourceDir = path.join(process.cwd(), "src/components/examples")
  const targetDir = path.join(process.cwd(), "public/e")

  try {
    // Create the target directory if it doesn't exist
    await fs.mkdir(targetDir, { recursive: true })

    // Read all files from the source directory
    const files = await fs.readdir(sourceDir)

    // Copy each .tsx file
    for (const file of files) {
      if (file.endsWith(".tsx")) {
        await fs.copyFile(
          path.join(sourceDir, file),
          path.join(targetDir, file)
        )
        console.log(`Copied ${file} to public/e`)
      }
    }

    console.log("Successfully copied all example files")
  } catch (error) {
    console.error("Error copying examples:", error)
    process.exit(1)
  }
}

copyExamples()
