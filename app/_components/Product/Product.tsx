import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface Product {
    id: number;
    name: string;
    imageSrc: string;
    imageAlt: string;
    price: number;
    description: string;
    category: string;
    href: string;
  }

interface ProductProps {
    products: Product[];
    
}

const Product = ({ products }: ProductProps) => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent>
        {products.map((product) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={product.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center p-4">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-32 object-cover rounded"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
                    <p className="mt-2 text-xs text-gray-500">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious  />
        <CarouselNext  />
      </Carousel>
    </>
  );
};

export default Product;
