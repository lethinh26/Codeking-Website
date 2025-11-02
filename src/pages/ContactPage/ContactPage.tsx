import icon1 from '../../assets/contact/icon1.png'
import icon2 from '../../assets/contact/icon2.png'
import icon3 from '../../assets/contact/icon3.png'
import icon4 from '../../assets/contact/icon4.png'
import iconCall from '../../assets/contact/imgCall.png'
import iconLetter from '../../assets/contact/imgLetter.png'
import iconCalenda from '../../assets/contact/imgCalenda.png'
import iconFb from '../../assets/contact/imgFb.png'
import iconDC from '../../assets/contact/imgDC.png'
export default function ContactPage() {
    return (
        <>
            <div className="bg-[#D9D9D9]">
                <div className={` relative bg-[url('D:/TASK_clubs_wed/task3/src/assets/contact/bannerContact.png')] bg-cover bg-center h-150 flex items-center justify-center text-white
                    px-16 pt-17 pb-30`}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Nội dung */}
                    <div className="relative z-10 text-center">
                        <h1 className="text-[80px] font-bold">Liên hệ</h1>
                        <p className="text-[24px] max-w-140 mt-4 font-normal">Trở thành một phần của câu lạc bộ ngay hôm nay
                            Mọi thứ bạn cần chúng tôi đều có</p>
                    </div>
                </div>

                <div className="px-16 py-30">

                    <div className="bg-[#F0DFDB] p-16 rounded-[60px]">
                        <h2 className="text-center mb-3 ">
                            <span className="text-[60px] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#471022] to-[#F50E5D]">Cooking</span>
                        </h2>
                        <h3 className="text-center text-[#E91E63] font-extrabold text-2xl">TỰ TIN - SÁNG TẠO - HỢP TÁC - THỰC TIỄN</h3>
                        <div className="mt-30 px-15 flex justify-between">
                            <div className="text-[#333333] flex flex-col gap-15">
                                <div className="flex gap-4 pb-4.5 border-b border-b-[#5F5F5F]">
                                    <div className="flex items-center justify-center">
                                        <img src={icon1} width={60} height={60} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">EXPERIENCE</h3>
                                        <p className="text-[20px] font-medium">Học hỏi được nhiều kiến thức/kinh nghiệm</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 pb-4.5 border-b border-[#5F5F5F]">
                                    <div className="flex items-center justify-center">
                                        <img src={icon2} width={60} height={60} alt="" />

                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">HELPER</h3>
                                        <p className="text-[20px] font-medium">Được nhiều mentor/thầy cô giúp đỡ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[#333333]  flex flex-col gap-15">
                                <div className="flex gap-4 border-b pb-4.5 border-b-[#5F5F5F]">
                                    <div className="flex items-center justify-center">
                                        <img src={icon3} width={60} height={60} alt="" />

                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">COMPETITION</h3>
                                        <p className="text-[20px] font-medium">Tham gia các cuộc thi lập trình</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 border-b pb-4.5 border-[#5F5F5F]">
                                    <div className="flex items-center justify-center">
                                        <img src={icon4} width={60} height={60} alt="" />

                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">TEAM WORK</h3>
                                        <p className="text-[20px] font-medium">Rèn luyện kỹ năng team work cho bản thân</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex justify-between pb-30 px-16'>
                    <div className="flex justify-between flex-col max-w-150">
                        <div className="flex flex-col">
                            <div>
                                <h3 className="text-[#E91E63] font-extrabold text-[40px]">
                                    Liên Hệ Với Chúng Tôi
                                </h3>
                                <p className="text-[20px] font-normal mt-3">Quan tâm đến CLB?
                                    <br />
                                    Hãy để lại thông tin, đội ngũ của chúng tôi sẽ liên hệ ngay để đồng hành cùng bạn.</p>
                            </div>

                        </div>
                        <div className="flex mt-6 gap-6">
                            <img src={iconFb} width={60} height={60} alt="" />
                            <img src={iconDC} width={60} height={60} alt="" />
                        </div>
                        <div className='mt-12 flex gap-8 flex-col'>
                            <div className='flex gap-4 items-center '>
                                <div className='icon p-4 rounded-[50px] bg-[#F0DFDB] '>
                                    <img src={iconCall} width={60} alt="" />
                                </div>
                                <div>
                                    <h3 className='text-[#471022] font-bold text-[20px]'>Hotline:</h3>
                                    <p className='text-[#333333]'>0123 456 789</p>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center '>
                                <div className='icon p-4 rounded-[50px] bg-[#F0DFDB] '>
                                    <img src={iconLetter} width={60} alt="" />
                                </div>
                                <div>
                                    <h3 className='text-[#471022] font-bold text-[20px]'>Hotline:</h3>
                                    <p className='text-[#333333]'>0123 456 789</p>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center '>
                                <div className='icon p-4 rounded-[50px] bg-[#F0DFDB] '>
                                    <img src={iconCalenda} width={60} alt="" />
                                </div>
                                <div>
                                    <h3 className='text-[#471022] font-bold text-[20px]'>Hotline:</h3>
                                    <p className='text-[#333333]'>0123 456 789</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        className="flex flex-col gap-12 mt-11.5 max-w-141"
                    >
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <label className='font-medium text-[#333333]'>Họ và tên</label>
                                <input type="text" className="w-full  mt-2 px-2 py-1 border border-[#999999] rounded-3xl bg-[#C3C1C2] shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500" />
                            </div>
                            <div>
                                <label className='font-medium text-[#333333]'>Email</label>
                                <input type="email" className="w-full mt-2  px-2 py-1 border border-[#999999] rounded-3xl bg-[#C3C1C2] shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500" />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-6'>

                            <div>
                                <label className='font-medium text-[#333333]'>Số điện thoại</label>
                                <input type="text" className="w-full  mt-2 px-2 py-1 border border-[#999999] rounded-3xl bg-[#C3C1C2] shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500" />
                            </div>
                            <div>
                                <label className='font-medium text-[#333333]'>Bạn Mong muốn</label>
                                <input type="email" className="w-full mt-2  px-2 py-1 border border-[#999999] rounded-3xl bg-[#C3C1C2] shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500" />
                            </div>
                        </div>
                        <div>
                            <label className='font-medium text-[#333333]'>Lý do muốn vào CLB</label>
                            <textarea
                                className="w-full h-32 mt-2 px-2 py-1 border border-[#999999] rounded-3xl bg-[#C3C1C2] shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500"
                            ></textarea>
                        </div>
                        <button className='bg-[#CD2960] rounded w-50 h-11 font-medium text-black text-[18px]'>
                            Đăng ký
                        </button>
                    </form>
                </div>



            </div>
        </>
    )
}
