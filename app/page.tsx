import Image from "next/image";
import Link from "next/link";
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
      description: "Explore the latest trends in men's fashion.",
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
      imageSrc: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Fashion accessories on display",
      href: "/categories/accessories",
      description: "Complete your look with our latest accessories.",
    },
    {
      name: "Footwear",
      imageSrc: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Trendy shoes collection",
      href: "/categories/footwear",
      description: "Step out in style with our footwear collection.",
    },
    {
      name: "Sports & Fitness",
      imageSrc: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzJTIwZXF1aXBtZW50fGVufDB8fDB8fHww",
      imageAlt: "Sports equipment and activewear",
      href: "/categories/sports",
      description: "Gear up for your fitness journey.",
    },
    {
      name: "Beauty",
      imageSrc: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Beauty and skincare products",
      href: "/categories/beauty",
      description: "Discover beauty essentials and skincare.",
    },
    {
      name: "Home & Living",
      imageSrc: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "Modern home decor items",
      href: "/categories/home",
      description: "Transform your space with stylish decor.",
    },
    {
      name: "Kids & Baby",
      imageSrc: "https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lkcyUyMHRveXN8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Kids clothing and toys",
      href: "/categories/kids",
      description: "Everything for your little ones.",
    },
    {
      name: "Watches",
      imageSrc: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "Luxury and casual watches",
      href: "/categories/watches",
      description: "Timeless pieces for every occasion.",
    }
  ];

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
        "https://img.freepik.com/free-photo/gorgeous-woman-with-blonde-wavy-hair-wearing-elegant-beige-dress_273443-1766.jpg?uid=R66492258&ga=GA1.1.75541170.1724753966&semt=ais_hybrid",
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
        "https://img.freepik.com/free-photo/black-wireless-headphones-black-surface_417767-115.jpg?uid=R66492258&ga=GA1.1.75541170.1724753966&semt=ais_hybrid",
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
        "https://img.freepik.com/free-photo/fashion-portrait-young-businessman-handsome-model-man-dressed-elegant-brown-suit-with-accessories_158538-11176.jpg?uid=R66492258&ga=GA1.1.75541170.1724753966&semt=ais_hybrid",
      imageAlt: "A sleek leather wallet",
      price: 29.99,
      description: "A durable leather wallet to keep your essentials organized.",
      category: "Accessories",
      href: "/products/4",
    },
    {
      id: 5,
      name: "Sports Sneakers",
      imageSrc:
        "https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?uid=R66492258&ga=GA1.1.75541170.1724753966&semt=ais_hybrid",
      imageAlt: "Pair of stylish sports sneakers",
      price: 69.99,
      description: "Comfortable and stylish sneakers for your daily runs.",
      category: "Footwear",
      href: "/products/5",
    },
    {
      id: 6,
      name: "Smart Watch",
      imageSrc:
        "https://img.freepik.com/free-photo/high-angle-man-wearing-watch_23-2149436737.jpg?uid=R66492258&ga=GA1.1.75541170.1724753966&semt=ais_hybrid",
      imageAlt: "A modern smart watch",
      price: 149.99,
      description: "Stay connected with this sleek and feature-packed smartwatch.",
      category: "Electronics",
      href: "/products/6",
    },
    {
      id: 7,
      name: "Sunglasses",
      imageSrc:
        "https://img.freepik.com/free-photo/closeup-portrait-young-beautiful-smiling-female-sexy-carefree-woman-posing-sunny-day-dark-background-positive-model-having-fun-going-crazy-cheerful-happy-sunglasses_158538-25772.jpg?uid=R66492258&ga=GA1.1.75541170.1724753966&semt=ais_hybrid",
      imageAlt: "A stylish pair of sunglasses",
      price: 39.99,
      description: "Protect your eyes while staying stylish.",
      category: "Accessories",
      href: "/products/7",
    },
    {
      id: 8,
      name: "Backpack",
      imageSrc:
        "https://img.freepik.com/premium-photo/portrait-photographer-with-yellow-bag-wearing-photo-camera-black-background-studio_533849-536.jpg?uid=R66492258&ga=GA1.1.75541170.1724753966&semt=ais_hybrid",
      imageAlt: "A durable travel backpack",
      price: 79.99,
      description: "A spacious and durable backpack for all your travel needs.",
      category: "Bags",
      href: "/products/8",
    },
    {
      id: 9,
      name: "Leather Belt",
      imageSrc:
        "https://img.freepik.com/premium-photo/black-leather-belt-twisted-spiral-gray-background_186673-11756.jpg?uid=R66492258&ga=GA1.1.75541170.1724753966&semt=ais_hybrid",
      imageAlt: "A brown leather belt",
      price: 24.99,
      description: "A premium quality leather belt for a classic look.",
      category: "Accessories",
      href: "/products/9",
    },
    {
      id: 10,
      name: "Gaming Mouse",
      imageSrc:
        "https://img.freepik.com/premium-photo/computer-mouse-headset-rgb-keyboard-game-controllers-black-background-closeup_495423-100170.jpg?uid=R66492258&ga=GA1.1.75541170.1724753966&semt=ais_hybrid",
      imageAlt: "A high-performance gaming mouse",
      price: 59.99,
      description: "Enhance your gaming experience with this precision mouse.",
      category: "Electronics",
      href: "/products/10",
    },
  ];
  
  return (
    <main className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative w-full  overflow-hidden">
          <Carousel slides={slideData} />
      </section>

      {/* Collections Section */}
     <Category categories={testCategories} />

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link 
              href="/products" 
              className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              View All Products
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
          </div>
          <Product products={testProducts} />
         

          {/* Mobile View More Button */}
          <div className="mt-8 text-center lg:hidden">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              View All Products
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      </main>
  );
}
