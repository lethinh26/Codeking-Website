import icon1 from "../../assets/contact/icon1.png";
import icon2 from "../../assets/contact/icon2.png";
import icon3 from "../../assets/contact/icon3.png";
import icon4 from "../../assets/contact/icon4.png";
import iconCall from "../../assets/contact/imgCall.png";
import iconLetter from "../../assets/contact/imgLetter.png";
import iconCalenda from "../../assets/contact/imgCalenda.png";
import iconFb from "../../assets/contact/imgFb.png";
import iconDC from "../../assets/contact/imgDC.png";
import bannerContact from "../../assets/contact/bannerContact.png";

export default function ContactPage() {
    return (
        <>
            <div className="bg-[#D9D9D9]">
                <div className="px-42 mx-auto pt-16">
                    <div className=" relative rounded-3xl bg-[url('src/assets/contact/bannerContact.png')] h-150 bg-cover bg-center flex items-center justify-center text-white">
                        {/* Overlay */}
                        <div className="absolute rounded-3xl inset-0 bg-black/50"></div>

                        {/* Nội dung */}
                        <div className="relative z-10 text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Liên hệ</h1>
                            <p className="text-base md:text-lg  mx-auto mt-4 font-normal">
                                Trở thành một phần của câu lạc bộ ngay hôm nay Mọi thứ bạn cần chúng tôi đều có
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
                    <div className="bg-[#F0DFDB] p-8 md:p-12 rounded-3xl">
                        <h2 className="text-center mb-2">
                            <span className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-[#471022] to-[#F50E5D] bg-clip-text text-transparent inline-block">
                                CODEKING
                            </span>
                        </h2>
                        <h3 className="text-center text-[#E91E63] font-extrabold text-lg md:text-xl">TỰ TIN - SÁNG TẠO - HỢP TÁC - THỰC TIỄN</h3>
                        <div className="mt-12 md:mt-16 px-4 md:px-8 flex flex-col md:flex-row justify-between gap-8">
                            <div className="text-[#333333] flex flex-col gap-6">
                                <div className="flex gap-3 pb-4 border-b border-b-[#5F5F5F]">
                                    <div className="flex items-center justify-center shrink-0">
                                        <img src={icon1} width={48} height={48} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">EXPERIENCE</h3>
                                        <p className="text-sm font-medium">Học hỏi được nhiều kiến thức/kinh nghiệm</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 pb-4 border-b border-[#5F5F5F]">
                                    <div className="flex items-center justify-center shrink-0">
                                        <img src={icon2} width={48} height={48} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">HELPER</h3>
                                        <p className="text-sm font-medium">Được nhiều mentor/thầy cô giúp đỡ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[#333333] flex flex-col gap-6">
                                <div className="flex gap-3 border-b pb-4 border-b-[#5F5F5F]">
                                    <div className="flex items-center justify-center shrink-0">
                                        <img src={icon3} width={48} height={48} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">COMPETITION</h3>
                                        <p className="text-sm font-medium">Tham gia các cuộc thi lập trình</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 border-b pb-4 border-[#5F5F5F]">
                                    <div className="flex items-center justify-center shrink-0">
                                        <img src={icon4} width={48} height={48} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">TEAM WORK</h3>
                                        <p className="text-sm font-medium">Rèn luyện kỹ năng team work cho bản thân</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-12 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
                    <div className="flex justify-between flex-col max-w-2xl">
                        <div className="flex flex-col">
                            <div>
                                <h3 className="text-[#E91E63] font-extrabold text-2xl md:text-3xl lg:text-4xl">Liên Hệ Với Chúng Tôi</h3>
                                <p className="text-base md:text-lg font-normal mt-3">
                                    Quan tâm đến CLB?
                                    <br />
                                    Hãy để lại thông tin, đội ngũ của chúng tôi sẽ liên hệ ngay để đồng hành cùng bạn.
                                </p>
                            </div>
                        </div>
                        <div className="flex mt-6 gap-4">
                            <img src={iconFb} width={48} height={48} alt="" />
                            <img src={iconDC} width={48} height={48} alt="" />
                        </div>
                        <div className="mt-8 flex gap-6 flex-col">
                            <div className="flex gap-3 items-center">
                                <div className="icon p-3 rounded-full bg-[#F0DFDB]">
                                    <img src={iconCall} width={40} alt="" />
                                </div>
                                <div>
                                    <h3 className="text-[#471022] font-bold text-base">Hotline:</h3>
                                    <p className="text-[#333333] text-sm font-semibold">0123 456 789</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="icon p-3 rounded-full bg-[#F0DFDB]">
                                    <img src={iconLetter} width={40} alt="" />
                                </div>
                                <div>
                                    <h3 className="text-[#471022] font-bold text-base">Email:</h3>
                                    <p className="text-[#333333] text-sm font-semibold">contact@codeking.club</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="icon p-3 rounded-full bg-[#F0DFDB]">
                                    <img src={iconCalenda} width={40} alt="" />
                                </div>
                                <div>
                                    <h3 className="text-[#471022] font-bold text-base">Thời gian:</h3>
                                    <p className="text-[#333333] text-sm font-semibold">8:00 - 17:00 hàng ngày</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="flex flex-col gap-6 w-full max-w-2xl">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="text-sm font-medium text-[#333333]">Họ và tên</label>
                                <input
                                    type="text"
                                    className="w-full mt-2 px-4 py-2 text-sm border border-[#999999] rounded-full bg-[#C3C1C2] shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-[#333333]">Email</label>
                                <input
                                    type="email"
                                    className="w-full mt-2 px-4 py-2 text-sm border border-[#999999] rounded-full bg-[#C3C1C2] shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="text-sm font-medium text-[#333333]">Số điện thoại</label>
                                <input
                                    type="text"
                                    className="w-full mt-2 px-4 py-2 text-sm border border-[#999999] rounded-full bg-[#C3C1C2] shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-[#333333]">Bạn Mong muốn</label>
                                <input
                                    type="text"
                                    className="w-full mt-2 px-4 py-2 text-sm border border-[#999999] rounded-full bg-[#C3C1C2] shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-[#333333]">Lý do muốn vào CLB</label>
                            <textarea className="w-full h-32 mt-2 px-4 py-2 text-sm border border-[#999999] rounded-2xl bg-[#C3C1C2] shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"></textarea>
                        </div>
                        <button className="bg-[#CD2960] hover:bg-[#E91E63] rounded-full px-8 h-11 font-medium text-black text-base">Đăng ký</button>
                    </form>
                </div>
            </div>
        </>
    );
}
