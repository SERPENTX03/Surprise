"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  });
  const [page, setPage] = useState(1);
  const nextPage = () => setPage((prev) => Math.min(prev + 1, 4));
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="glass h-2/3 w-1/2 flex flex-col items-center text-center p-4">
        {page === 1 && (
          <div className="" data-aos="fade-up">
            <h1 className="mt-4 text-4xl text-pink-400">เค้ามีไรให้ดูด้วย</h1>
            <h1 className="mt-4 text-4xl text-pink-400">ลองเปิดหน้าต่อไปสิ</h1>
            <button
              onClick={nextPage}
              className="mt-8 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500"
            >
              ปุ่มความลับบ
            </button>
          </div>
        )}
        {page === 2 && (
          <div data-aos="flip-right">
            <h1 className="my-4 text-4xl text-pink-400">
              ดอกไม้นี้ให้เธอน้าเจ้าอ้วน
            </h1>
            <div className="relative w-full h-[200px]">
              <Image
                className="object-cover w-full h-full rounded-lg"
                src="/imgs/Flowers.jpeg"
                alt="ดอกไม้"
                layout="fill"
              />
            </div>{" "}
            <button
              onClick={nextPage}
              className="mt-8 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500"
            >
              ปุ่มความลับบ
            </button>
          </div>
        )}
        {page === 3 && (
          <div data-aos="flip-right">
            <h1 className="mt-4 text-4xl text-pink-400">วันนี้วันอะไรน้า🥰</h1>
            <p className="mt-4 text-xl text-gray-300">
              สุขสันวันครบรอบ 2 ปี 1เดือนน้า💖
            </p>
            <p className="mt-4 text-lg text-gray-300">
              ขอให้หมูจิ้ดอยู่กับเค้านานๆ <br />
              เค้าอาจจะไม่ค่อยได้มีการเซอร์ไฟต์
              <br />
              เธอเค้ารักเธอมากนะขอให้เธอมีความสุขมากๆ
            </p>
            <button
              onClick={nextPage}
              className="mt-8 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500"
            >
              รักนะเจ้าหมู
            </button>{" "}
          </div>
        )}
        {page === 4 && (
          <div data-aos="flip-left">
            <div className="grid grid-cols-2 gap-2 m-4">
              <div className="relative w-full h-[200px]">
                <Image
                  className="object-cover w-full h-full rounded-lg"
                  src="/imgs/1.jpg"
                  alt="1"
                  width={200}
                  height={200}
                />
              </div>
              <div className="relative w-full h-[200px]">
                <Image
                  className="object-cover w-full h-full rounded-lg"
                  src="/imgs/2.jpg"
                  alt="2"
                  width={200}
                  height={200}
                />
              </div>
              <div className="relative w-full h-[200px]">
                <Image
                  className="object-cover w-full h-full rounded-lg"
                  src="/imgs/3.jpg"
                  alt="3"
                  width={200}
                  height={200}
                />
              </div>
              <div className="relative w-full h-[200px]">
                <Image
                  className="object-cover w-full h-full rounded-lg"
                  src="/imgs/4.jpg"
                  alt="4"
                  width={200}
                  height={200}
                />
              </div>
              <div className="col-span-2">
                <h3 className="font-bold text-3xl text-gray-500 text-center">
                  ฮักเด้ออ💖💖💖
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default page;
