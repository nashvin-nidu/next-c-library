export interface ComponentData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  installation: string;
  installationCode: string;
  sourceCode: string;
  dependencies: string[];
}

export const componentRegistry: Record<string, ComponentData[]> = {
  buttons: [
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "Primary Button",
      description: "A customizable button component with click counter",
      installation: "npx shadcn@latest add button",
      installationCode: "Hello",
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
      dependencies: ["@/components/ui/button", "@/components/ui1/button"]
    },
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "Secondary Button",
      description: "A secondary button variant",
      installation: "npx shadcn@latest add button",
      installationCode: "",
      sourceCode: `'use client'
import { Button } from "@/components/ui/button"

export default function Preview() {
  return <Button variant="secondary">Secondary</Button>
}`,
      dependencies: ["@/components/ui/button"]
    },
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "Outline Button",
      description: "An outline button variant",
      installation: "npx shadcn@latest add button",
      installationCode: "",
      sourceCode: `'use client'
import { Button } from "@/components/ui/button"

export default function Preview() {
  return <Button variant="outline">Outline</Button>
}`,
      dependencies: ["@/components/ui/button"]
    },
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "2Outline Button2",
      description: "An outline button variant",
      installation: "npx shadcn@latest add button",
      installationCode: "",
      sourceCode: `'use client'
import { Button } from "@/components/ui/button"

export default function Preview() {
  return <Button variant="outline">Outline</Button>
}`,
      dependencies: ["@/components/ui/button"]
    }
  ],
  navbar: [
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "Default Navbar",
      description: "A default navigation bar component",
      installation: "npx shadcn@latest add navigation-menu",
      installationCode: "",
      sourceCode: `// Add your navbar code here`,
      dependencies: []
    },
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "Transparent Navbar",
      description: "A transparent navigation bar component",
      installation: "npx shadcn@latest add navigation-menu",
      installationCode: "",
      sourceCode: `// Add your navbar code here`,
      dependencies: []
    },
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "Fixed Navbar",
      description: "A fixed position navigation bar component",
      installation: "npx shadcn@latest add navigation-menu",
      installationCode: "",
      sourceCode: `// Add your navbar code here`,
      dependencies: []
    }
  ],
  carousel: [
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "Image Carousel",
      description: "An image carousel component",
      installation: "npx shadcn@latest add carousel",
      installationCode: "",
      sourceCode: `// Add your carousel code here`,
      dependencies: []
    },
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "Auto Carousel",
      description: "An auto-playing carousel component",
      installation: "npx shadcn@latest add carousel",
      installationCode: "",
      sourceCode: `// Add your carousel code here`,
      dependencies: []
    },
    {
      slug: "button-preview",
      tagline: "Magic Ui",
      title: "3D Carousel",
      description: "A 3D carousel component",
      installation: "npx shadcn@latest add carousel",
      installationCode: "",
      sourceCode: `// Add your carousel code here`,
      dependencies: []
    }
  ]
};

export function getComponentData(slug: string): ComponentData | null {
  for (const category of Object.values(componentRegistry)) {
    const component = category.find(c => c.slug === slug);
    if (component) return component;
  }
  return null;
}
