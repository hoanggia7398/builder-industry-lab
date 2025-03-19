"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

const offerImages = [
  {
    src: "https://ext.same-assets.com/640080708/2241528502.png",
    alt: "Amazon Offer",
  },
  {
    src: "https://ext.same-assets.com/2379519241/1453544373.webp",
    alt: "Database Engineer Offer",
  },
  {
    src: "https://ext.same-assets.com/1802558163/151710649.jpeg",
    alt: "WorldQuant Offer",
  },
  {
    src: "https://ext.same-assets.com/2807789129/2871186041.png",
    alt: "Trusting Social Offer",
  },
  {
    src: "https://ext.same-assets.com/1802969637/462035729.jpeg",
    alt: "Oracle Offer",
  },
  {
    src: "https://ext.same-assets.com/325089398/575747925.png",
    alt: "Anduin Transaction Offer",
  },
  {
    src: "https://ext.same-assets.com/3240858927/3903119075.jpeg",
    alt: "Health Canada Offer",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Offer của học viên FSE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dưới đây là một số offer mà học viên FSE đã nhận được sau khi hoàn
            thành khóa học và sử dụng dịch vụ Mock Interview
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {offerImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full aspect-square relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <a href="#" className="inline-flex items-center gap-2">
              Xem thêm offers khác
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
