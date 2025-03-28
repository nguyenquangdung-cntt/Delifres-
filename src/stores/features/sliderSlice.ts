import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface SliderState {
  slides: Slide[];
  currentIndex: number;
}

const initialState: SliderState = {
  slides: [
    { id: 1, image: "/assets/image/banner-1.png", title: "Ưu đãi đặc biệt", description: "Giảm giá lên đến 50%" },
    { id: 2, image: "/assets/image/banner-2.png", title: "Sản phẩm mới", description: "Cập nhật sản phẩm hot nhất" },
    { id: 3, image: "/assets/image/banner-3.png", title: "Mua sắm tiện lợi", description: "Giao hàng tận nơi, nhanh chóng" },
  ],
  currentIndex: 0,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.slides.length;
    },
    prevSlide: (state) => {
      state.currentIndex = (state.currentIndex - 1 + state.slides.length) % state.slides.length;
    },
    setSlide: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, setSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
