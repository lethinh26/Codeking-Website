import image1 from "../../../assets/homepage/image1.png";
import image2 from "../../../assets/homepage/image2.png";
export default function AboutSection() {
    return (
        <section className="bg-[#D9D9D9] min-h-screen flex items-center justify-center px-6 py-16">
            <div className="container mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-[#471022] to-[#F50E5D] bg-clip-text text-transparent inline-block">
                            CODEKING
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-[#E91E63] mb-6 uppercase">Tự tin - Sáng tạo - Hợp tác - Thực tiễn</p>
                        <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                            Codeking là nơi tụ tập cùng những kỹ năng hàng đầu, Sinh viên học có hiệu quả trong môi trường chuyên nghiệp, phát triển
                            kỹ năng, hoàn thiện tri thức, và cùng nhau tạo nên những dự án thực tế, mang lại giá trị cho cộng đồng và xã hội.
                        </p>
                        <button className="bg-[#CD2960] hover:bg-[#E91E63] text-black border-0 rounded-full px-10 h-12 font-medium text-base">
                            Tìm hiểu thêm
                        </button>
                    </div>

                    <div className="relative">
                        <img
                            src={image1}
                            className="absolute bottom-0 left-0
                                w-[60%] h-auto z-10 rounded-2xl"
                        />
                        <img
                            src={image2}
                            className="absolute bottom-0 right-0
                                w-[60%] h-auto z-20 rounded-2xl translate-y-35"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
