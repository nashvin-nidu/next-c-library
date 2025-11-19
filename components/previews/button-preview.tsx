"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"


interface Data_Component{
  title: string;
  description: string;
  installation: string;
  code: string;
  dependencies: string[];
}

export const Data : Data_Component = {
  title: "working @button-preview",
  description: "working @button-preview",
  installation: "working @button-preview",
  code: "working @button-preview",
  dependencies: ["working @button-preview"]
}

export default function Preview() {
  const [count, setCount] = useState(0)

  return (
    <Button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </Button>
  )
}