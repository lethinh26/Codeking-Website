import { useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import logoResponsive from "../../assets/logo_responsive.png";
import background from "../../assets/background.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-cover bg-center bg-no-repeat !h[90px]" style={{ backgroundImage: `url(${background})` }}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between px-8">
                    <Link to="/" className="hidden md:block">
                        <img src={logo} alt="CODEKING" className="w-[247px] object-contain" />
                    </Link>

                    <Link to="/" className="block md:hidden">
                        <img src={logoResponsive} alt="CODEKING" className="object-contain" />
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-white hover:text-[#CD2960] transition-colors font-semi-bold">
                            Trang chủ
                        </Link>
                        <Link to="/news" className="text-white hover:text-[#CD2960] transition-colors font-semi-bold">
                            Tin tức & sự kiện
                        </Link>
                        <Link to="/blog" className="text-white hover:text-[#CD2960] transition-colors font-semi-bold">
                            Bài viết
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-[#CD2960] hover:bg-[#E91E63] text-black px-6 py-2 rounded-[5px] font-semi-bold transition-colors"
                        >
                            Liên hệ
                        </Link>
                    </nav>

                    <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className="w-10 h-10 bg-[#CD2960] rounded-full flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </button>
                </div>

                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-[#CD2960] pt-4">
                        <Link to="/" className="text-white hover:text-[#CD2960] transition-colors font-medium">
                            Trang chủ
                        </Link>
                        <Link to="/about" className="text-white hover:text-[#CD2960] transition-colors font-medium">
                            Giới thiệu
                        </Link>
                        <Link to="/news" className="text-white hover:text-[#CD2960] transition-colors font-medium">
                            Tin tức & sự kiện
                        </Link>
                        <Link to="/blog" className="text-white hover:text-[#CD2960] transition-colors font-medium">
                            Bài viết
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-[#CD2960] hover:bg-[#E91E63] text-white px-6 py-2 rounded-[5px] font-medium transition-colors text-center"
                        >
                            Liên hệ
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}
