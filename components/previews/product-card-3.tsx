import * as React from "react";
import { ProductDropCard, DropItem } from "@/components/source-preview/Carousel/product-card-3/product-card-3"; // Adjust path as needed

// Sample data for the drops
const upcomingDrops: DropItem[] = [
  {
    time: "14:00",
    name: "Lemonade",
    collection: "Off-White Air Force",
    imageSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-LnBkOp3vtoZxgA1Bbe9AQGMoa0Okez.png&w=1000&q=75",
  },
  {
    time: "17:00",
    name: "University Blue",
    collection: "Off-White Air Force",
    imageSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-llBJrXGTGW8fvXFYtSynrQ6nWHbhKo.png&w=1000&q=75",
  },
  {
    time: "18:00",
    name: "Brooklyn Green",
    collection: "Off-White Air Force",
    imageSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-7DxkVlb641FDO4NwxI8j6rmWukXHAI.png&w=1000&q=75",
  },
  // Add more items to test the carousel functionality
  {
    time: "19:00",
    name: "Chicago",
    collection: "Off-White Air Jordan 1",
    imageSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-25Y9Z8CPr2GbrCOJekFo5jLy0sg3ce.png&w=1000&q=75", // Replace with actual image
  },
  {
    time: "20:00",
    name: "Mocha",
    collection: "Travis Scott Air Jordan 1",
    imageSrc: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-KTicoKheLSl3rJR7arTqnbVAonWxMo.png&w=1000&q=75", // Replace with actual image
  },
];

const ProductDropCardDemo = () => {
  return (
    <div className="w-full bg-background p-8 flex items-center justify-center">
      <ProductDropCard
        title="Today's Drops"
        subtitle="Upcoming drops from Nike"
        items={upcomingDrops}
      />
    </div>
  );
};

export default ProductDropCardDemo;