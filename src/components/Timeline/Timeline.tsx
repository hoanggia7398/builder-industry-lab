"use client";
import React, { useState, useEffect } from "react";
import TimelineItem from "./TimelineItem";

const fakeData: TimelineItemType[] = [
  {
    id: 1,
    status: "completed",
    title: "Nhận đề bài Technical Interview",
    details:
      "Sinh viên sẽ nhận được đề bài technical interview nhỏ theo dạng take-home project. Sinh viên cần hoàn thành và demonstrate cho nhà tuyển dụng tại buổi Mock Interview. Nhà tuyển dụng sẽ đặt các câu hỏi xoay quanh các kiến thức liên quan đến kết quả của bài tập",
    category: "Giaidoan_1",
    is_show: true,
    date: "05/02/2024",
    buttonList: [
      {
        name: "View Details",
        link: "https://example.com/details",
      },
      {
        name: "Download",
        link: "https://example.com/download",
      },
    ],
  },
];

export type TimelineItemType = {
  id?: number;
  status?: string;
  title?: string;
  details?: string;
  category?: string;
  is_show?: boolean;
  date: string;
  popupContent?: string;
  isPopupFullScreen?: boolean;
  buttonList?: {
    name: string;
    link: string;
    isDisabled?: boolean;
  }[];
};

const TimeLine = ({ items }: { items?: string | TimelineItemType[] }) => {
  const [data, setData] = useState<TimelineItemType[]>(fakeData);
  const [nextEvent, setNextEvent] = useState<TimelineItemType | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    try {
      if (items && typeof items === "string") {
        const parsedItems = JSON.parse(items);
        setData(parsedItems);
      } else {
        setData(Array.isArray(items) ? items : fakeData);
      }
    } catch (error) {
      console.log(error);
    }
  }, [items]);

  useEffect(() => {
    const upcomingEvents = data.filter(
      (item) =>
        new Date(item.date.split("/").reverse().join("-")).getTime() >
        new Date().getTime(),
    );
    if (upcomingEvents.length > 0) {
      const next = upcomingEvents.sort(
        (a, b) =>
          new Date(a.date.split("/").reverse().join("-")).getTime() -
          new Date(b.date.split("/").reverse().join("-")).getTime(),
      )[0];
      setNextEvent(next);
    }
  }, [data]);

  useEffect(() => {
    if (nextEvent) {
      const interval = setInterval(() => {
        const eventDate = new Date(
          nextEvent.date.split("/").reverse().join("-"),
        ).getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);

        if (distance < 0) {
          clearInterval(interval);
          setTimeRemaining("Event has started");
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [nextEvent]);

  return (
    <div className="w-full">
      {nextEvent && (
        <div
          className="alert alert-soft flex flex-col gap-4 mb-10"
          role="alert"
        >
          <h3>
            Next Event: <span className="font-bold">{nextEvent.title}</span>{" "}
          </h3>
          <p>Time Remaining: {timeRemaining}</p>
        </div>
      )}
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
        {data
          .sort((a, b) => {
            const [dayA, monthA, yearA] = a.date.split("/").map(Number);
            const [dayB, monthB, yearB] = b.date.split("/").map(Number);
            return (
              new Date(yearA, monthA - 1, dayA).getTime() -
              new Date(yearB, monthB - 1, dayB).getTime()
            );
          })
          .map((item: TimelineItemType, index: number) => (
            <TimelineItem
              isLast={index !== data.length - 1}
              key={item.id}
              item={item}
              index={index}
            />
          ))}
      </ul>
    </div>
  );
};

export default TimeLine;
