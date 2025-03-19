"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Gói 1 buổi",
    price: "99",
    period: "/ buổi",
    discount: "không giảm giá",
    features: [
      "Phỏng vấn thử (Mock Interview) cho vòng Coding Interview, System Design",
      "Tiếng Việt hoặc Tiếng Anh",
      "Nhận được feedback cụ thể sau buổi Mock. Có video Record để xem lại và cải thiện.",
      "Giảng viên do bạn tự chọn",
    ],
    cta: "Đăng ký ngay",
    ctaLink: "https://forms.gle/v9Qk9fj34vrbmH5J9",
    notes: "Đăng ký trước ít nhất 7 ngày",
    popular: false,
  },
  {
    title: "Gói 3 buổi",
    price: "249",
    period: "tương ứng $83 / buổi",
    discount: "Giảm 16%",
    features: [
      "Phỏng vấn thử (Mock Interview) cho vòng Coding Interview, System Design",
      "Tiếng Việt hoặc Tiếng Anh",
      "Nhận được feedback cụ thể sau buổi Mock. Có video Record để xem lại và cải thiện.",
      "Giảng viên do bạn tự chọn",
    ],
    cta: "Đăng ký ngay",
    ctaLink: "https://forms.gle/v9Qk9fj34vrbmH5J9",
    notes: "Đăng ký trước ít nhất 15 ngày",
    popular: true,
    popularLabel: "Phổ biến",
  },
  {
    title: "Gói 5 buổi",
    price: "379",
    period: "tương ứng $75/ buổi",
    discount: "Giảm 23%",
    features: [
      "Phỏng vấn thử (Mock Interview) cho vòng Coding Interview, System Design",
      "Tiếng Việt hoặc Tiếng Anh",
      "Nhận được feedback cụ thể sau buổi Mock. Có video Record để xem lại và cải thiện.",
      "Giảng viên do bạn tự chọn",
    ],
    cta: "Đăng ký ngay",
    ctaLink: "https://forms.gle/v9Qk9fj34vrbmH5J9",
    notes: "Đăng ký trước ít nhất 20 ngày",
    popular: false,
    specialLabel: "TIẾT KIỆM",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bảng giá dịch vụ Mock Interview 1-1 tại FSE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mỗi buổi bao gồm 40 phút Mock Interview + 15 phút feedback và chia
            sẻ kinh nghiệm. Tổng thời lượng 55 phút/buổi.
          </p>
          <p className="text-md text-gray-600 max-w-3xl mx-auto mt-4">
            Ứng viên có lựa chọn format phỏng vấn theo các công ty như Google,
            Meta (Facebook), Amazon, TikTok, Grab, AirBnb, v.v.
          </p>
          <p className="text-md text-gray-600 max-w-3xl mx-auto mt-4">
            Nếu bạn có mong muốn lựa chọn giảng viên cụ thể, bạn có thể ghi chú
            trong form đăng ký.
          </p>
          <p className="text-md text-gray-600 max-w-3xl mx-auto mt-4 font-semibold">
            Ứng viên lựa chọn{" "}
            <span className="text-primary">
              càng nhiều khung thời gian có thể phỏng vấn càng tốt
            </span>
            . Chúng tôi sẽ thuận lợi hơn trong việc khớp lịch với giảng viên.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? "popular" : ""} flex flex-col`}
            >
              {plan.specialLabel && (
                <div className="bg-accent text-white text-xs uppercase py-1 px-3 self-end font-semibold tracking-wider">
                  {plan.specialLabel}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="mb-6">
                  <div className="flex items-baseline mb-1">
                    <span className="text-4xl font-bold">$</span>
                    <span className="text-5xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-gray-600">{plan.period}</p>
                  <div
                    className={`mt-2 text-sm font-medium ${plan.discount.includes("Giảm") ? "text-secondary" : "text-gray-500"}`}
                  >
                    {plan.discount}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={
                    plan.popular ? "bg-secondary hover:bg-secondary/90" : ""
                  }
                  size="lg"
                >
                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </a>
                </Button>

                <p className="text-xs text-gray-500 mt-3 text-center">
                  {plan.notes}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-bold mb-4 text-primary">
            Ưu đãi Mock interview
          </h4>
          <div className="space-y-3">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
              <p className="text-gray-700 text-sm">
                Giảm 20% nếu bạn là học viên FSE các khóa: DSA (Big Tech và
                FAANG), System Design, System Design v2. Giá sau ưu đãi còn $79/
                buổi, $199/3 buổi, $303/5 buổi
              </p>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
              <p className="text-gray-700 text-sm">
                Ưu đãi đặc biệt khi bạn có cơ hội phỏng vấn thực tế tại Big Tech
                và có offer. Liên hệ với FSE để biết thêm chi tiết
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
