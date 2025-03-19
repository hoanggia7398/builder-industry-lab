"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Vả chạm thực tế",
    description:
      "Mock Interview (buổi phỏng vấn thử) sẽ giúp bạn có cái nhìn toàn diện nhất về vòng phỏng vấn Big Tech và giúp bạn chuẩn bị tốt hơn.",
    image: "https://ext.same-assets.com/3529312627/3557906748.webp",
  },
  {
    title: "Phát hiện điểm mạnh, điểm yếu",
    description:
      "Biết đâu là thế mạnh của bản thân, và đâu là lĩnh vực bạn cần phải cải thiện. Qua đó bạn có thời gian để tự điều chỉnh, mang lại hiệu quả tốt nhất.",
    image: "https://ext.same-assets.com/4292132592/1211138882.webp",
  },
  {
    title: "Thể hiện bản thân",
    description:
      "Khi đi phỏng vấn, ngoài kiến thức ra thì bạn cần thể hiện được kỹ năng giao tiếp, dẫn dắt hiệu quả. Mock Interview tại FSE sẽ giúp bạn thể hiện bản thân tốt nhất.",
    image: "https://ext.same-assets.com/731488822/3496980412.webp",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tại sao cần Mock Interview?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Để tự tin vượt qua vòng phỏng vấn tại Big Tech, các ứng viên không
            chỉ cần chuẩn bị kiến thức, mà còn cần va chạm với Mock Interview để
            đạt hiệu quả tốt nhất khi phỏng vấn trong thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="pb-2">
                <div className="h-48 relative overflow-hidden rounded-t-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
