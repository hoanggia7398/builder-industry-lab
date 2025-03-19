"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const interviewers = [
  {
    name: "Quynh Truong",
    title: "Senior Software Engineer",
    image: "https://ext.same-assets.com/2867360273/1637289268.webp",
    companies: [
      {
        name: "TikTok",
        logo: "https://ext.same-assets.com/3032805853/1552570286.png",
      },
      {
        name: "Google",
        logo: "https://ext.same-assets.com/3729501028/4287392958.png",
      },
    ],
    country: "🇦🇺",
    bio: "Anh Trương Quý Quỳnh - Senior Software Engineer @TikTok. Ex-Senior tại Google, SEA. Kinh nghiệm phỏng vấn hàng trăm ứng viên cho Google. Đồng thời anh Quỳnh cũng có kinh nghiệm đào tạo đội tuyển HSG dự kỳ thi quốc gia môn tin học.",
  },
  {
    name: "Duy Nguyen",
    title: "Staff Data Engineer",
    image: "https://ext.same-assets.com/2483421781/3020947453.jpeg",
    companies: [
      {
        name: "Amazon",
        logo: "https://ext.same-assets.com/3039639145/3478308836.png",
      },
      {
        name: "WorldQuant",
        logo: "https://ext.same-assets.com/1541172209/3127093520.png",
      },
    ],
    country: "🇨🇦",
    bio: "Anh Duy Nguyễn - Staff Engineer | Data Engineer | Quant Researcher. Anh Duy có kinh nghiệm tại các công ty @Amazon Canada, @Ample Insight, @WorldQuant VN. Đồng thời, anh Duy cũng là Thạc sĩ Applied Math tại University of Waterloo - trường đại học số #1 Canada nhóm ngành Computer Science.",
  },
  {
    name: "Mai Thanh Hiep",
    title: "Mobile Software Engineer",
    image: "https://ext.same-assets.com/3025754643/2455831939.webp",
    companies: [
      { name: "FAANG", logo: "" },
      {
        name: "Booking.com",
        logo: "https://ext.same-assets.com/435951583/2322891580.webp",
      },
    ],
    country: "🇻🇳",
    bio: "Anh Mai Thành Hiệp - Software Engineer tại một công ty thuộc nhóm FAANG. Ex-Software Engineer (mobile) tại Booking UK. Đặc biệt với nickname HiepIT, anh Hiệp hiện đang là TOP 4 Contributor tại Leetcode. Với phong cách giảng dạy thú vị và tinh thần nhiệt huyết mãu lửa, anh Hiệp được các bạn học viên yêu quý đặt biệt danh idol Leetcode.",
  },
  {
    name: "Bong Nguyen",
    title: "Tech Lead | Senior Engineer",
    image: "https://ext.same-assets.com/3797670791/2178308628.webp",
    companies: [
      {
        name: "Atlassian",
        logo: "https://ext.same-assets.com/2951143419/3055323754.png",
      },
      {
        name: "Grab",
        logo: "https://ext.same-assets.com/3423800096/3225056927.png",
      },
    ],
    country: "🇻🇳",
    bio: "Anh Nguyễn Văn Bống - Senior Engineer @Atlassian. Anh Bống từng làm việc tại Grab và có 10+ năm kinh nghiệm thiết kế các hệ thống lớn nhỏ, anh cũng có thành tích giải nhì HSG Quốc Gia môn Tin Học. Anh em dev nào chắc cũng biết tới Jira, BitBucket là những sản phẩm nổi bật của Atlassian.",
  },
];

export function Interviewers() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            100% Interviewer tới từ Big Tech & FAANG
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Với đội ngũ Senior / Tech Lead / Staff Engineer tại từ Big Tech và
            FAANG, bạn sẽ đạt được hiệu quả Mock Interview tốt nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interviewers.map((interviewer) => (
            <Card
              key={interviewer.name}
              className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="p-0">
                <div className="flex items-start p-6">
                  <div className="relative mr-4">
                    <Avatar className="w-24 h-24 border-4 border-white shadow-md">
                      <AvatarImage
                        src={interviewer.image}
                        alt={interviewer.name}
                      />
                      <AvatarFallback>
                        {interviewer.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="absolute -bottom-1 -right-1 text-xl">
                      {interviewer.country}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{interviewer.name}</h3>
                    <p className="text-gray-600 mb-2">{interviewer.title}</p>
                    <div className="flex gap-2 items-center flex-wrap">
                      {interviewer.companies.map((company) => (
                        <Badge
                          key={company.name}
                          variant="outline"
                          className="flex items-center gap-1 p-1 px-2"
                        >
                          {company.logo && (
                            <Image
                              src={company.logo}
                              alt={company.name}
                              width={16}
                              height={16}
                              className="w-4 h-4 object-contain"
                            />
                          )}
                          <span>{company.name}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{interviewer.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
