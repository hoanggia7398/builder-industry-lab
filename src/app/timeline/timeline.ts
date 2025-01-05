import { TimelineItemType } from "@/components/Timeline/Timeline";

export const fakeData: TimelineItemType[] = [
  {
    id: 1,
    status: "completed",
    title: "Nhận đề bài Technical Interview",
    details:
      "Sinh viên sẽ nhận được đề bài technical interview nhỏ theo dạng take-home project. Sinh viên cần hoàn thành và demonstrate cho nhà tuyển dụng tại buổi Mock Interview. Nhà tuyển dụng sẽ đặt các câu hỏi xoay quanh các kiến thức liên quan đến kết quả của bài tập",
    category: "Giaidoan_1",
    is_show: true,
    buttonList: [
      {
        name: "will be available on 06 Jan 2025",
        link: "",
      },
    ],
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "05/01/2025",
  },
  {
    id: 2,
    status: "completed",
    title: "Nhận đề bài Behavioral Interview",
    details:
      "Sinh viên sẽ nhận được đề bài Behavioral Interview bao gồm 3 câu hỏi hay được hỏi nhất trong các buổi phỏng vấn. Sinh viên cần trả lời và nộp lại kết quả quá trình mình trả lời phỏng vấn Behavioral Interview vào ngày 09/02/2024",
    category: "Giaidoan_1",
    is_show: true,
    buttonList: [
      {
        name: "Đề bài Behavioral Interview",
        link: "https://drive.google.com/file/d/1C1MpXEiVRmuJdg9Vu61gSkV_G7XDGIor/view?usp=sharing",
      },
    ],
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "05/01/2025",
  },
  {
    id: 3,
    status: "completed",
    title: "Training CV & Behavioral Interview Buổi 1",
    details:
      "Chuyên gia tuyển dụng nhân sự sẽ hướng dẫn sinh viên về cách viết CV xin việc",
    category: "Giaidoan_1",
    is_show: true,
    buttonList: [],
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "06/01/2025",
  },
  {
    id: 4,
    status: "completed",
    title: "Feedback và chỉnh sửa CV bởi Specialist",
    details:
      "Sau buổi học đầu tiên, sinh viên sẽ hoàn thành được một bản CV về vị trí công việc mà mình chọn. Sau đó các bạn sẽ được các chuyên gia đang làm việc trực tiếp tại vị trí đó hướng dẫn và đưa ra feedback về nội dung và cấu trúc CV của mình",
    category: "Giaidoan_1",
    is_show: true,
    buttonList: [],
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "06/01/2025",
  },
  {
    id: 5,
    status: "completed",
    title: "Training CV & Behavioral Interview Buổi 2",
    details:
      "Chuyên gia tuyển dụng nhân sự sẽ hướng dẫn sinh viên về kỹ năng phỏng vấn xin việc, các câu hỏi phỏng vấn thường gặp trong vòng Behavioral Interview, và trả lời phỏng vấn theo cấu trúc theo STAR Method",
    category: "Giaidoan_1",
    is_show: true,
    buttonList: [],
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "07/01/2025",
  },
  {
    id: 6,
    status: "completed",
    title: "Training CV & Behavioral Interview Buổi 3",
    details:
      "Chuyên gia tuyển dụng nhân sự sẽ chia sẻ về các kỹ năng mềm cần thiết khi làm việc tại doanh nghiệp ",
    category: "Giaidoan_1",
    is_show: true,
    buttonList: [],
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "08/01/2025",
  },
  {
    id: 7,
    status: "completed",
    title: "Nộp bài kiểm tra Behavioral Interview",
    details:
      "Sinh viên sẽ nộp video về cách bạn trả lời các câu hỏi Behavioral Interview",
    category: "Giaidoan_1",
    is_show: true,
    buttonList: [
      {
        name: "Link nộp bài",
        link: "bỏ link google form vào",
      },
    ],
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "09/01/2025",
  },
  {
    id: 8,
    status: "completed",
    title: "Mock Interview",
    details:
      "Sinh viên sẽ đến trường theo thời gian hẹn trước để tiến hành phỏng vấn ở vị trí mà các bạn chọn\n(click vào để xem barem điểm)",
    category: "Giaidoan_1",
    is_show: true,
    popupContent: `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Barem Điểm Mock Interview</title> <script src="https://cdn.tailwindcss.com"></script> </head> <body class="flex justify-center items-center min-h-screen bg-gray-900"> <div class="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md"> <h1 class="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center"> BAREM ĐIỂM MOCK INTERVIEW </h1> <p class="text-gray-700 text-sm sm:text-base leading-relaxed"> <span class="font-bold text-blue-500">20%</span> từ kết quả của bài take-home project </p> <p class="text-gray-700 text-sm sm:text-base mt-4 leading-relaxed"> <span class="font-bold text-blue-500">80%</span> từ 2-4 câu hỏi phỏng vấn lý thuyết chuyên ngành và liên quan đến bài take-home project </p> <hr class="border-t-2 border-dashed border-gray-300 my-4"> <p class="text-gray-800 text-sm sm:text-base lg:text-lg font-semibold text-center"> = <span class="text-blue-500">100%</span> kết quả Mock Interview </p> </div> </body> </html> `,
    isPopupFullScreen: false,
    buttonList: [],
    date: "09:00 - 12:00 10/01/2025",
  },
  {
    id: 9,
    status: "completed",
    title: "Workshop: Làn sóng công nghệ nào đang chờ đón sinh viên",
    details: "Diễn giả HCA",
    category: "Giaidoan_1",
    is_show: true,
    popupContent: undefined,
    isPopupFullScreen: false,

    buttonList: [],
    date: "10/01/2025",
  },
  {
    id: 10,
    status: "completed",
    title: "Mock Interview",
    details:
      "Sinh viên sẽ đến trường theo thời gian hẹn trước để tiến hành phỏng vấn ở vị trí mà các bạn chọn",
    category: "Giaidoan_1",
    is_show: true,
    popupContent: `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Barem Điểm Mock Interview</title> <script src="https://cdn.tailwindcss.com"></script> </head> <body class="flex justify-center items-center min-h-screen bg-gray-900"> <div class="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md"> <h1 class="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center"> BAREM ĐIỂM MOCK INTERVIEW </h1> <p class="text-gray-700 text-sm sm:text-base leading-relaxed"> <span class="font-bold text-blue-500">20%</span> từ kết quả của bài take-home project </p> <p class="text-gray-700 text-sm sm:text-base mt-4 leading-relaxed"> <span class="font-bold text-blue-500">80%</span> từ 2-4 câu hỏi phỏng vấn lý thuyết chuyên ngành và liên quan đến bài take-home project </p> <hr class="border-t-2 border-dashed border-gray-300 my-4"> <p class="text-gray-800 text-sm sm:text-base lg:text-lg font-semibold text-center"> = <span class="text-blue-500">100%</span> kết quả Mock Interview </p> </div> </body> </html> `,
    isPopupFullScreen: false,
    buttonList: [],
    date: "11/01/2025",
  },
];
