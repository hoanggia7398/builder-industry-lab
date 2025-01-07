import { TimelineItemType } from "@/components/Timeline/Timeline";

export const fakeData: TimelineItemType[] = [
  {
    id: 1,
    status: "completed",
    title: "Nhận đề bài Technical Interview",
    details:
      "Sinh viên sẽ nhận được đề bài technical interview nhỏ theo dạng take-home project. Sinh viên cần hoàn thành và present cho nhà tuyển dụng tại buổi Mock Interview. Nhà tuyển dụng sẽ đặt các câu hỏi xoay quanh các kiến thức liên quan đến kết quả của bài tập",
    category: "Giaidoan_1",
    is_show: true,
    buttonList: [
      {
        name: "Đề bài SWE-Backend",
        link: "http://ojt-spring-2025.notion.site",
      },
      {
        name: "Đề bài SWE-Frontend",
        link: "https://ojt-spring-2025.notion.site/Software-Engineer-Frontend-1-1722be78cf5a8099af0fc3c4e2998335?pvs=4",
      },
      {
        name: "Đề bài Quality Control Engineer",
        link: "https://ojt-spring-2025.notion.site/Quality-Control-Engineer-1732be78cf5a80018972e479c575dffe?pvs=4",
      },
      {
        name: "Đề bài Business Analyst",
        link: "https://ojt-spring-2025.notion.site/Business-Analyst-1722be78cf5a80c8bb4af9b8e1431dd5?pvs=4",
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
    date: "10/01/2025",
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
  {
    id: 11,
    status: "completed",
    title: "Chọn role",
    details:
      "Sinh viên điền vào form chọn role mình muốn ứng tuyển cho kỳ thực tập",
    category: "Giaidoan_1",
    is_show: true,
    popupContent: undefined,
    isPopupFullScreen: false,
    buttonList: [
      {
        name: "Link chọn role",
        link: "https://forms.gle/f66YQwBvamLPfJoW6",
      },
    ],
    date: "06/01/2025",
  },
  {
    id: 12,
    status: "completed",
    title: "Tham gia group sửa CV",
    details:
      "Sinh viên sẽ tham gia group để sửa CV theo role đã chọn, nhận feedback từ các chuyên gia và cố gắng hoàn thiện CV của mình\nNote: Sinh viên sử dụng tên thật để tham gia group, không sử dụng nickname",
    category: "Giaidoan_1",
    is_show: true,
    popupContent: undefined,
    isPopupFullScreen: false,
    buttonList: [
      {
        name: "Group FE",
        link: "https://zalo.me/g/rtypvj912",
      },
      {
        name: "Group BE",
        link: "https://zalo.me/g/avvjpe852",
      },
      {
        name: "Group QA",
        link: "https://zalo.me/g/qmgjiq276",
      },
      {
        name: "Group BA",
        link: "https://zalo.me/g/tladsa063",
      },
    ],
    date: "06/01/2025",
  },
  {
    id: 13,
    status: "completed",
    title: "Hoàn thành CV",
    details:
      "Sinh viên sẽ nộp CV đã hoàn thiện để sử dụng trong buổi Mock Interview",
    category: "Giaidoan_1",
    is_show: true,
    popupContent: undefined,
    isPopupFullScreen: false,
    buttonList: [
      {
        name: "Link nộp CV",
        link: "https://forms.gle/7fWpvBiSx3eGzuh27",
      },
    ],
    date: "08/01/2025",
  },
  {
    id: 14,
    status: "completed",
    title: "Hoàn thành bài tập Technical Interview",
    details:
      "Sinh viên sẽ phải hoàn thành bài tập Technical Interview trước ngày Mock Interview vì các câu hỏi phỏng vấn sẽ liên quan đến bài tập này. Lưu ý sinh viên phải chạy được ứng dụng thành công ở local nếu là các bài tập liên quan đến coding",
    category: "Giaidoan_1",
    is_show: true,
    popupContent: undefined,
    isPopupFullScreen: false,
    buttonList: [],
    date: "09/01/2025",
  },
];
