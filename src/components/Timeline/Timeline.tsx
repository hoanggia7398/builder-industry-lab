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
];

export type TimelineItem = {
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
  buttonName?: string;
};

const TimeLine = ({ items }: { items?: string | TimelineItem[] }) => {
  const [data, setData] = useState<TimelineItem[]>(fakeData);
  useEffect(() => {
    try {
      if (items && typeof items === "string") {
        setData(JSON.parse(items));
      } else {
        setData(Array.isArray(items) ? items : fakeData);
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
            <div className="text-base-content/50 text-base font-bold text-gray-500">
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
                {(item.file_link || item.buttonName) && (
                  <div className="card-actions">
                    {item.file_link?.trim() ? (
                      <a
                        href={item.file_link}
                        className="btn btn-sm btn-soft bg-blue-500 text-gray-50"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                      >
                        {item.buttonName ? item.buttonName : "File Link"}
                      </a>
                    ) : (
                      <span className="btn btn-sm btn-soft bg-blue-500 text-gray-50">
                        {item.buttonName ? item.buttonName : "File Link"}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
        <>
          <div className="timeline-start me-4 mt-8 max-md:pt-2 block md:hidden">
            <div className="text-base-content/50 text-sm font-normal text-gray-500">
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
                {(item.file_link || item.buttonName) && (
                  <div className="card-actions">
                    {item.file_link?.trim() ? (
                      <a
                        href={item.file_link}
                        className="btn btn-sm btn-soft dark:bg-blue-500 dark:text-gray-50"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                      >
                        {item.buttonName ? item.buttonName : "File Link"}
                      </a>
                    ) : (
                      <span className="btn btn-sm btn-soft dark:bg-blue-500 dark:text-gray-50">
                        {item.buttonName ? item.buttonName : "File Link"}
                      </span>
                    )}
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
          renderTimelineItem(item, index),
        )}
      </ul>
    </div>
  );
};

export default TimeLine;
