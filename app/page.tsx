import Image from "next/image";
import { Carousel } from "./_components/ui/carousel";

export default function Home() {
   const slideData = [
    {
      title: "Aurora Winter Jacket",
      button: "Shop Now",
      src: "https://img.freepik.com/free-photo/vertical-shot-attractive-female-fixing-her-knit-cap_181624-29286.jpg?uid=R66492258&ga=GA1.1.75541170.1724753966&semt=ais_hybrid",
    },
    {
      title: "Luxe Leather Sneakers",
      button: "View Collection",
      src: "https://img.freepik.com/premium-photo/brown-boots-with-white-soles-men-s-footwear-side-view_636803-2812.jpg?uid=R66492258&ga=GA1.1.75541170.1724753966&semt=ais_hybrid",
    },
    {
      title: "Midnight City Hoodie",
      button: "Buy Now",
      src: "https://img.freepik.com/free-photo/beautiful-blonde-woman-white-hoodie-blue-jeans-posing-against-neon-background_89887-1131.jpg?uid=R66492258&ga=GA1.1.75541170.1724753966&semt=ais_hybrid",
    },
    {
      title: "Desert Dune Sunglasses",
      button: "Explore More",
      src: "https://img.freepik.com/free-photo/woman-posing-desert-ruins-blue-sky_23-2148194001.jpg?uid=R66492258&ga=GA1.1.75541170.1724753966&semt=ais_hybrid",
    },
  ];
  
  return (
    <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-8 row-start-2  items-center sm:items-start">
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={slideData} />
        </div>
      </main>
    </div>
  );
}
