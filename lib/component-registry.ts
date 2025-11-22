
// Each ComponentCard Data.
export interface ComponentmetaData {
  slug: string;
  title: string;
  tagline: string;
}
export interface ComponentCategory {
  [key: string]: ComponentmetaData[];
}

export const metaData: ComponentCategory[] = [
  {
    Buttons: [
      {
        slug: "button-preview",
        tagline: "Magic Ui",
        title: "Animated Button",
      },
      {
        slug: "button-preview",
        tagline: "Magic Ui",
        title: "Gradient Button",
      },
      {
        slug: "button-preview",
        tagline: "Magic Ui",
        title: "Shimmer Button",
      }
    ]
  },
  {
    Navbar: [
      {
        slug: "button-preview",
        tagline: "Magic Ui",
        title: "Floating Navbar",
      },
      {
        slug: "button-preview",
        tagline: "Magic Ui",
        title: "Sticky Navbar",
      },
      {
        slug: "button-preview",
        tagline: "Magic Ui",
        title: "Transparent Navbar",
      }
    ]
  },
  {
    Carousal: [
      {
        slug: "button-preview",
        tagline: "Magic Ui",
        title: "3D Carousel",
      },
      {
        slug: "button-preview",
        tagline: "Magic Ui",
        title: "Infinite Carousel",
      },
      {
        slug: "button-preview",
        tagline: "Magic Ui",
        title: "Auto-play Carousel",
      }
    ]
  },
]





// Each Component Data
export interface ComponentData {
  title: string;
  slug: string;
  description: string;
  installation: string;
  sourceCode: string;
  dependencies: string[];
}
export const componentRegistry: Record<string, ComponentData> = {
  "button-preview": {
    title: "Button Component",
    slug: "button-preview",
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
    dependencies: ["framer-motion.js", "npm"]
  },
  // Add more components here as you build your library
};

export function getComponentData(slug: string): ComponentData | null {
  return componentRegistry[slug] || null;
}
