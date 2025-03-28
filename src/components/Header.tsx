import Image from "next/image";
import Logo from "..//..//public/assets/image/logo.png";

function Header() {
  return (
    <div className="grid grid-cols-2 gap-4 items-center relative">
        <div
            className="p-4 flex items-center"
            style={{
                clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%)",
            }}
        >
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
            <nav className="p-4 pl-16">
                <ul id="menu-main" className="flex space-x-4">
                    <li><a href="#">Trang chủ</a></li>
                    <li><a href="#">Sản phẩm</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Tuyển dụng</a></li>
                    <li><a href="#">Liên hệ</a></li>
                </ul>
            </nav>
        </div>
    </div>
  );
}

export default Header;