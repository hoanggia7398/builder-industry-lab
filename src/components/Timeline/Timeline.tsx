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
};

const TimeLine = ({ items }: { items: string }) => {
  const [data, setData] = useState<TimelineItem[]>(fakeData);
  useEffect(() => {
    if (items) {
      setData(JSON.parse(items));
    }
  }, [items]);

  return (
    <div className="w-full">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
        {data.map((item: TimelineItem, index: number) => (
          <li key={index}>
            <div className="timeline-middle h-16">
              <span
                className={`bg-${item.status === "completed" ? "success" : "error"}/20 flex size-8 items-center justify-center rounded-full`}
              >
                <span
                  className={`icon-[tabler--file] text-${item.status === "completed" ? "success" : "error"} size-5`}
                ></span>
              </span>
            </div>
            <>
              <div
                className={`timeline-${index % 2 === 0 ? "start" : "end"} me-4 mt-8 max-md:pt-2 hidden md:block`}
              >
                <div className="text-base-content/50 text-sm font-normal text-gray-400">
                  {item.date}
                </div>
              </div>
              <div
                className={`timeline-${index % 2 === 0 ? "end" : "start"} ms-4 mb-8 hidden md:block`}
              >
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
            </>
            <>
              <div
                className={`timeline-start me-4 mt-8 max-md:pt-2 block md:hidden`}
              >
                <div className="text-base-content/50 text-sm font-normal text-gray-400">
                  {item.date}
                </div>
              </div>
              <div className={`timeline-end ms-4 mb-8 block md:hidden`}>
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
            </>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;
