import image1 from '../../../assets/newsevent/image1.png';
import image2 from '../../../assets/newsevent/image2.png';
import image3 from '../../../assets/newsevent/image3.png';

export default function NewsHeroSection() {
    return (
        <section className="bg-[#D9D9D9] min-h-[calc(100vh-90px)] flex items-center justify-center px-6 py-16">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-10">
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4 w-[60%] leading-normal">
                        Cập nhật các tin tức và sự kiện của {" "}
                        <span className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-[#471022] to-[#F50E5D] bg-clip-text text-transparent inline-block">CODEKING</span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-700 max-w-3xl">
                        Khám phá các tin tức và sự kiện của CLB Codeking. Chúng tôi mang đến cho bạn 
                        các tin tức mới nhất về các hoạt động của CLB, thành tích nổi bật!
                    </p>
                </div>

                <div className="flex gap-25 items-start justify-between translate-y-[-70px]">
                    <div className="overflow-hidden ">
                        <img 
                            src={image1} 
                            alt="Event 1" 
                            className="object-cover mt-25"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <img 
                            src={image2} 
                            alt="Event 2" 
                            className="object-cover mt-25"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <img 
                            src={image3} 
                            alt="Event 3" 
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
