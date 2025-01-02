"use client";
import React, { useState, useEffect } from "react";

const fakeData: TimelineItem[] = [
  {
    id: 1,
    status: "completed",
    title: "Nhận đề bài Technical Interview",
    details:
      "Sinh viên sẽ nhận được đề bài technical interview nhỏ theo dạng take-home project. Sinh viên cần hoàn thành và demonstrate cho nhà tuyển dụng tại buổi Mock Interview. Nhà tuyển dụng sẽ đặt các câu hỏi xoay quanh các kiến thức liên quan đến kết quả của bài tập",
    category: "Giaidoan_1",
    is_show: true,
    file_link: undefined,
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "05/02/2024",
  },
  {
    id: 2,
    status: "completed",
    title: "Nhận đề bài Behavioral Interview",
    details:
      "Sinh viên sẽ nhận được đề bài Behavioral Interview bao gồm 3 câu hỏi hay được hỏi nhất trong các buổi phỏng vấn. Sinh viên cần trả lời và nộp lại kết quả quá trình mình trả lời phỏng vấn Behavioral Interview vào ngày 09/02/2024",
    category: "Giaidoan_1",
    is_show: true,
    file_link: "",
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "05/02/2024",
  },
  {
    id: 3,
    status: "completed",
    title: "Training CV & Behavioral Interview Buổi 1",
    details:
      "Chuyên gia tuyển dụng nhân sự sẽ hướng dẫn sinh viên về cách viết CV xin việc",
    category: "Giaidoan_1",
    is_show: true,
    file_link: "",
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "06/02/2024",
  },
  {
    id: 4,
    status: "completed",
    title: "Feedback và chỉnh sửa CV bởi Specialist",
    details:
      "Sau buổi học đầu tiên, sinh viên sẽ hoàn thành được một bản CV về vịt trí công việc mà mình chọn. Sau đó các bạn sẽ được các chuyên gia đang làm việc trực tiếp tại vị trí đó hướng dẫn và đưa ra feedback về nội dung và cấu trúc CV của mình",
    category: "Giaidoan_1",
    is_show: true,
    file_link: "",
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "06/02/2024",
  },
  {
    id: 5,
    status: "completed",
    title: "Training CV & Behavioral Interview Buổi 2",
    details:
      "Chuyên gia tuyển dụng nhân sự sẽ hướng dẫn sinh viên về kỹ năng phỏng vấn xin việc, các câu hỏi phỏng vấn thường gặp trong vòng Behavioral Interview, và trả lời phỏng vấn theo cấu trúc theo STAR Method",
    category: "Giaidoan_1",
    is_show: true,
    file_link: "",
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "07/02/2025",
  },
  {
    id: 6,
    status: "completed",
    title: "Training CV & Behavioral Interview Buổi 3",
    details:
      "Chuyên gia tuyển dụng nhân sự sẽ chia sẻ về các kỹ năng mềm cần thiết khi làm việc tại doanh nghiệp ",
    category: "Giaidoan_1",
    is_show: true,
    file_link: "",
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "08/02/2025",
  },
  {
    id: 7,
    status: "completed",
    title: "Nộp bài kiểm tra Behavioral Interview",
    details:
      "Sinh viên sẽ nộp video về cách bạn trả lời các câu hỏi Behavioral Interview",
    category: "Giaidoan_1",
    is_show: true,
    file_link: "bỏ link google form vào",
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "09/02/2025",
  },
  {
    id: 8,
    status: "completed",
    title: "Mock Interview",
    details:
      "Sinh viên sẽ đến trường theo thời gian hẹn trước để tiến hành phỏng vấn ở vị trí mà các bạn chọn",
    category: "Giaidoan_1",
    is_show: true,
    file_link: "bỏ link danh sách hẹn sinh viên vào",
    popupContent: `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Barem Điểm Mock Interview</title> <script src="https://cdn.tailwindcss.com"></script> </head> <body class="flex justify-center items-center min-h-screen bg-gray-100"> <div class="bg-white p-6 rounded-xl shadow-lg w-96"> <h1 class="text-lg font-bold text-gray-800 mb-4 text-center">BAREM ĐIỂM MOCK INTERVIEW</h1> <p class="text-gray-700"> <span class="font-bold text-blue-500">20%</span> từ kết quả của bài take-home project </p> <p class="text-gray-700 mt-4"> <span class="font-bold text-blue-500">80%</span> từ 2-4 câu hỏi phỏng vấn lý thuyết chuyên ngành và liên quan đến bài take-home project </p> <hr class="border-t-2 border-dashed border-gray-300 my-4"> <p class="text-gray-800 font-semibold text-center"> = <span class="text-blue-500">100%</span> kết quả Mock Interview </p> </div> </body> </html>`,
    isPopupFullScreen: false,
    date: "10/02/2025",
  },
  {
    id: 9,
    status: "completed",
    title: "Mock Interview",
    details:
      "Sinh viên sẽ đến trường theo thời gian hẹn trước để tiến hành phỏng vấn ở vị trí mà các bạn chọn",
    category: "Giaidoan_1",
    is_show: true,
    file_link: "bỏ link danh sách hẹn sinh viên vào",
    popupContent: undefined,
    isPopupFullScreen: false,
    date: "11/02/2025",
  },
];

type TimelineItem = {
  id?: number;
  status?: string;
  title?: string;
  details?: string;
  category?: string;
  is_show?: boolean;
  file_link?: string;
  date: string;
  popupContent?: string;
  isPopupFullScreen?: boolean;
};

const TimeLine = ({ items }: { items?: string }) => {
  const [data, setData] = useState<TimelineItem[]>(fakeData);
  useEffect(() => {
    try {
      if (items) {
        setData(JSON.parse(items));
      }
    } catch (error) {
      console.log(error);
    }
  }, [items]);
  const renderTimelineItem = (item: TimelineItem, index: number) => (
    <React.Fragment key={item.id}>
      <li key={item.id}>
        <div className="timeline-middle h-16">
          {new Date(item.date) < new Date() ? (
            <span className="badge badge-primary size-4.5 rounded-full p-0">
              <span className="icon-[tabler--check] text-primary-content size-3.5"></span>
            </span>
          ) : (
            <span className="bg-secondary/20 flex size-4.5 items-center justify-center rounded-full">
              <span className="badge badge-secondary size-3 rounded-full p-0" />
            </span>
          )}
        </div>
        <>
          <div
            className={`timeline-${index % 2 === 0 ? "start" : "end"} me-4 mt-8 max-md:pt-2 ${index % 2 === 0 ? "block" : "hidden"} md:block`}
          >
            <div className="text-base-content/50 text-sm font-normal text-gray-400">
              {item.date}
            </div>
          </div>
          <div
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls={`basic-modal${index}`}
            data-overlay={`#basic-modal${index}`}
            className={`timeline-${index % 2 === 0 ? "end" : "start"} ms-4 mb-8 ${index % 2 === 0 ? "block" : "hidden"} md:block`}
          >
            <div
              className={`card ${item.popupContent && item.popupContent.trim() && "cursor-pointer"}`}
            >
              <div className="card-body gap-4">
                <h5 className="card-title text-lg">{item.title}</h5>
                <p>{item.details}</p>
                {item.file_link && (
                  <div className="card-actions">
                    <a
                      href={item.file_link}
                      className="btn btn-sm btn-soft btn-secondary"
                    >
                      File Link
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
        <>
          <div className="timeline-start me-4 mt-8 max-md:pt-2 block md:hidden">
            <div className="text-base-content/50 text-sm font-normal text-gray-400">
              {item.date}
            </div>
          </div>
          <div
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls={`basic-modal${index}`}
            data-overlay={`#basic-modal${index}`}
            className="timeline-end ms-4 mb-8 block md:hidden"
          >
            <div
              className={`card ${item.popupContent && item.popupContent.trim() && "cursor-pointer"}`}
            >
              <div className="card-body gap-4">
                <h5 className="card-title text-lg">{item.title}</h5>
                <p>{item.details}</p>
                {item.file_link && (
                  <div className="card-actions">
                    <a
                      href={item.file_link}
                      className="btn btn-sm btn-soft btn-secondary"
                    >
                      File Link
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
        {index !== data.length - 1 &&
          (new Date(item.date) < new Date() ? (
            <hr className="bg-primary" />
          ) : (
            <hr />
          ))}
      </li>
      {item.popupContent && item.popupContent.trim() && (
        <div
          id={`basic-modal${index}`}
          key={`modal-${item.id}`}
          className="overlay modal overlay-open:opacity-100 hidden"
          role="dialog"
          tabIndex={-1}
        >
          <div
            className={`modal-dialog overlay-open:opacity-100 ${item.isPopupFullScreen && "max-w-none"}`}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Information</h3>
                <button
                  type="button"
                  className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
                  aria-label="Close"
                  data-overlay={`#basic-modal${index}`}
                >
                  <span className="icon-[tabler--x] size-4"></span>
                </button>
              </div>
              <div className="modal-body flex flex-col items-center">
                <div dangerouslySetInnerHTML={{ __html: item.popupContent }} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-overlay={`#basic-modal${index}`}
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
  return (
    <div className="w-full">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
        {data.map((item: TimelineItem, index: number) =>
          renderTimelineItem(item, index)
        )}
      </ul>
    </div>
  );
};

export default TimeLine;
