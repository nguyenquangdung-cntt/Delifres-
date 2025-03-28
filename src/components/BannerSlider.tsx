"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../stores/store";
import { nextSlide, prevSlide } from "@/stores/features/sliderSlice";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function BannerSlider() {
  const dispatch = useDispatch<AppDispatch>();
  const { slides, currentIndex } = useSelector((state: RootState) => state.slider);

  // Tự động chuyển slide sau 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextSlide());
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div id="box-banner" className="relative w-full min-h-[607px] overflow-hidden">
      {/* Danh sách slides */}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full min-h-[607px] relative banner">
            <Image src={slide.image} alt={slide.title} fill className="object-fill" />
          </div>
        ))}
      </div>

      {/* Nút điều hướng */}
      <button onClick={() => dispatch(prevSlide())} className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 border-2 border-white rounded-full">
        <ChevronLeft className="text-white w-8 h-8" />
      </button>
      <button onClick={() => dispatch(nextSlide())} className="absolute right-4 top-1/2 transform -translate-y-1/2 border-2 border-white p-2 rounded-full">
        <ChevronRight className="text-white w-8 h-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
}
