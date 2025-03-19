"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-90 z-0"></div>
      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage:
            "url('https://ext.same-assets.com/3286269198/1569934342.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      ></div>

      <div className="container relative z-20 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
          Mock Interview 1-1 với interviewer tại Big Tech
        </h1>
        <p className="text-lg md:text-xl text-white opacity-90 max-w-3xl mx-auto mb-8">
          Luyện tập thực chiến Mock Interview để gia tăng khả năng vượt qua vòng
          phỏng vấn và nhận offer Big Tech
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-primary hover:bg-gray-100"
        >
          <a href="#pricing">Đăng ký ngay</a>
        </Button>
      </div>
    </section>
  );
}
