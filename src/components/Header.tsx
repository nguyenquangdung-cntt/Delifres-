"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/image/logo.png";
import { ShoppingCart, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4 items-center relative">
      <div className="p-4 flex items-center">
        <div className="pr-4 pl-24">
          <Image src={Logo} alt="Delifres+" width={150} height={150} />
        </div>
        <p className="text-[15px] font-bold pt-2">Tươi Ngon - Bổ Dưỡng - An Toàn</p>
        <p className="text-[15px] font-bold pt-2 pl-10 text-red-600">Hotline: 028 6685 8086</p>
      </div>

      <div
        className="pt-4 pb-4 bg-emerald-950 text-white relative"
        style={{
          clipPath: "polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <nav className="p-4 pl-16 flex items-center">
          <ul id="menu-main" className="flex space-x-4">
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Sản phẩm</a></li>
            <li><a href="#">Tin tức</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
          <div className="ml-auto flex items-center space-x-4">
            <button className="relative p-2">
              <ShoppingCart />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
            <button
              id="btn-login"
              className="px-4 py-2 border border-gray-300 rounded-lg flex items-center"
              onClick={() => setIsOpen(true)}
            >
              Đăng nhập
            </button>
          </div>
        </nav>
      </div>

      {/* Modal đăng nhập */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-96 relative">
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
            <Dialog.Title className="text-[30px] font-bold mb-4 text-center">Đăng nhập</Dialog.Title>
            <input type="text" placeholder="Email" className="w-full p-2 border rounded mb-3" />
            <input type="password" placeholder="Mật khẩu" className="w-full p-2 border rounded mb-3" />
            <button className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700">
              Đăng nhập
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

export default Header;
