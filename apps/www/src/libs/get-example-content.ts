"use server"

export async function getExampleContent(name: string) {
  try {
    // Need to use absolute URL for fetch in server components
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:3000`

    const response = await fetch(`${baseUrl}/e/${name}.tsx`, {
      // Ensure we're not using cached version during development
      cache:
        process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch example: ${response.statusText}`)
    }

    const content = await response.text()
    return content
  } catch (error) {
    console.error("Error fetching example:", error)
    return null
  }
}
