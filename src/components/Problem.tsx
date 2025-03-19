"use client";

import Image from "next/image";

export function Problem() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Khó khăn khi mock interview?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Một trong những khó khăn lớn nhất khi muốn Mock Interview là không
            có những bạn cùng ngành, cùng chủ đề hướng, có khả năng và kỹ năng
            chuyên môn & kỹ năng giao tiếp và phỏng vấn tốt hơn chúng ta.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 relative">
            <Image
              src="https://ext.same-assets.com/826956478/3377167282.webp"
              alt="Mock Interview Challenge"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-6">
              Để giải quyết vấn đề này, FSE giới thiệu đến bạn đàn giảng viên
              Mock Interview cực kỳ uy tín tại FSE, sẵn sàng Mock Interview cho
              các bạn theo format Big Tech & FAANG như Gooogle, TikTok, Amazon,
              Grab, v.v.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["TikTok", "Google", "Amazon", "Grab", "Oracle", "Shopee"].map(
                (company) => (
                  <div
                    key={company}
                    className="flex items-center justify-center bg-gray-100 rounded-lg py-3 px-4"
                  >
                    <span className="font-medium">{company}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
