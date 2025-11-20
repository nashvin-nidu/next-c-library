interface ComponentData {
  title: string;
  description: string;
  installation: string;
  sourceCode: string;
  dependencies: string[];
}

export const componentRegistry: Record<string, ComponentData> = {
  "button-preview": {
    title: "Button Component",
    description: "A customizable button component with click counter",
    installation: "npx shadcn@latest add button",
    sourceCode: `'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Preview() {
  const [count, setCount] = useState(0)

  return (
    <Button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </Button>
  )
}`,
    dependencies: ["@/components/ui/button"]
  },
  // Add more components here as you build your library
};

export function getComponentData(slug: string): ComponentData | null {
  return componentRegistry[slug] || null;
}
