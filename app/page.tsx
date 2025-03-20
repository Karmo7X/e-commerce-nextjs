import Image from "next/image";
import { Carousel } from "./_components/ui/heroCarosuel";
import Category from "./_components/Category/Category";
import Product from "./_components/Product/Product";

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

  const testCategories = [
    {
      name: "Men's Fashion",
      imageSrc: "https://plus.unsplash.com/premium_photo-1669688174622-0393f5c6baa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVuJ3MlMjBGYXNoaW9ufGVufDB8fDB8fHww",
      imageAlt: "Men wearing stylish outfits",
      href: "/categories/men",
      description: "Explore the latest trends in men’s fashion.",
    },
    {
      name: "Women's Fashion",
      imageSrc: "https://images.unsplash.com/photo-1552874869-5c39ec9288dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V29tZW4ncyUyMEZhc2hpb258ZW58MHx8MHx8fDA%3D",
      imageAlt: "Women posing in designer clothes",
      href: "/categories/women",
      description: "Chic and modern styles curated for women.",
    },
    {
      name: "Electronics",
      imageSrc: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Various modern electronic devices",
      href: "/categories/electronics",
      description: "Shop the newest gadgets and tech essentials.",
    },
    {
      name: "Accessories",
      imageSrc:
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Fashion accessories on display",
      href: "/categories/accessories",
      description: "Complete your look with our latest accessories.",
    },
   
  ]
  const testProducts = [
    {
      id: 1,
      name: "Classic Tee",
      imageSrc:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&auto=format&fit=crop&q=60",
      imageAlt: "A classic t-shirt",
      price: 19.99,
      description: "A timeless classic tee for everyday wear.",
      category: "Men's Fashion",
      href: "/products/1",
    },
    {
      id: 2,
      name: "Elegant Dress",
      imageSrc:
        "https://images.unsplash.com/photo-1520975911874-6e2ef4d4972a?w=500&auto=format&fit=crop&q=60",
      imageAlt: "Elegant women's dress",
      price: 49.99,
      description: "A beautiful dress perfect for any special occasion.",
      category: "Women's Fashion",
      href: "/products/2",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      imageSrc:
        "https://images.unsplash.com/photo-1585386959984-a415522bd1e8?w=500&auto=format&fit=crop&q=60",
      imageAlt: "Wireless headphones on a table",
      price: 89.99,
      description: "Experience high-quality sound without the wires.",
      category: "Electronics",
      href: "/products/3",
    },
    {
      id: 4,
      name: "Leather Wallet",
      imageSrc:
        "https://images.unsplash.com/photo-1576675782334-bb95d5c53e65?w=500&auto=format&fit=crop&q=60",
      imageAlt: "A sleek leather wallet",
      price: 29.99,
      description: "A durable leather wallet to keep your essentials organized.",
      category: "Accessories",
      href: "/products/4",
    },
  ];
  
  return (
    <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-8 row-start-2  items-center sm:items-start">
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={slideData} />
        </div>
        <div className="w-full">
          <Category categories={testCategories} />
        </div>
        <div className="w-full">
          <Product products={testProducts} />
        </div>
        
      </main>
    </div>
  );
}
