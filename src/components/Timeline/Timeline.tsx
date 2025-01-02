"use client";
import React, { useState, useEffect } from "react";

const fakeData = [
  {
    id: 1,
    status: "completed",
    title: "Nhận đề bài Technical Interview",
    details: "",
    category: "Giaidoan_1",
    is_show: true,
    file_link: "",
    date: "06/02/2024",
    popupContent: `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Barem Điểm Mock Interview</title> <script src="https://cdn.tailwindcss.com"></script> </head> <body class="flex justify-center items-center min-h-screen bg-gray-100"> <div class="bg-white p-6 rounded-xl shadow-lg w-96"> <h1 class="text-lg font-bold text-gray-800 mb-4 text-center">BAREM ĐIỂM MOCK INTERVIEW</h1> <p class="text-gray-700"> <span class="font-bold text-blue-500">20%</span> từ kết quả của bài take-home project </p> <p class="text-gray-700 mt-4"> <span class="font-bold text-blue-500">80%</span> từ 2-4 câu hỏi phỏng vấn lý thuyết chuyên ngành và liên quan đến bài take-home project </p> <hr class="border-t-2 border-dashed border-gray-300 my-4"> <p class="text-gray-800 font-semibold text-center"> = <span class="text-blue-500">100%</span> kết quả Mock Interview </p> </div> </body> </html>`,
    isPopupFullScreen: false,
  },
  {
    id: 2,
    status: "completed",
    title: "Nhận đề bài Technical Interview",
    details: "",
    category: "Giaidoan_1",
    is_show: true,
    file_link: "",
    date: "06/02/2025",
    popupContent: ``,
    isPopupFullScreen: false,
  },
];

type TimelineItem = {
  id: number;
  status: string;
  title: string;
  details: string;
  category: string;
  is_show: boolean;
  file_link: string;
  date: string;
  popupContent: string;
  isPopupFullScreen: boolean;
};

const TimeLine = ({ items }: { items: string }) => {
  const [data, setData] = useState<TimelineItem[]>(fakeData);
  console.log("xxx item", items);
  useEffect(() => {
    if (items && items.length) {
      setData(JSON.parse(items));
    }
  }, [items]);

  return (
    <div className="w-full">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
        {data.map((item: TimelineItem, index: number) => (
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
                  className={`card ${item.popupContent.trim() && "cursor-pointer"}`}
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
              <div className="timeline-start me-4 mt-8 max-md:pt-2 block md:hidden">
                <div className="text-base-content/50 text-sm font-normal text-gray-400">
                  {item.date}
                </div>
              </div>
              <div className="timeline-end ms-4 mb-8 block md:hidden">
                <div className="card">
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
              {index !== data.length - 1 &&
                (new Date(item.date) < new Date() ? (
                  <hr className="bg-primary" />
                ) : (
                  <hr />
                ))}
            </li>
            {item.popupContent.trim() && (
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
                      <h3 className="modal-title">Dialog Title</h3>
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
                      <div
                        dangerouslySetInnerHTML={{ __html: item.popupContent }}
                      />
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
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;
