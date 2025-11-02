import { Card, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import image4 from "../../../assets/newsevent/image4.png";

export default function SpecialNewsSection() {
    const featuredNews = [
        {
            image: image4,
            title: "[Codeking] Hợp tác cùng sinh viên PTIT",
            description:
                "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
            date: "5-7 PHÚT ĐỌC",
        },
        {
            image: image4,
            title: "[Codeking] Hợp tác cùng sinh viên PTIT",
            description:
                "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
            date: "5-7 PHÚT ĐỌC",
        },
    ];

    return (
        <section className="bg-[#F0DFDB] min-h-screen flex items-center justify-center px-6 py-0 sm:py-16">
            <div className="container mx-auto max-w-7xl">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E91E63]">TIN NỔI BẬT</h2>
                    <div className="flex gap-4">
                        <Button shape="circle" size="large" icon={<LeftOutlined />} />
                        <Button shape="circle" size="large" icon={<RightOutlined />} />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {featuredNews.map((news, index) => (
                        <Card
                            key={index}
                            className="rounded-2xl overflow-hidden shadow-lg border-black!"
                            style={{ backgroundColor: "transparent" }}
                            cover={
                                <div className="relative h-56">
                                    <img src={news.image} className="w-full h-full object-cover" />
                                </div>
                            }
                        >
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-3">{news.title}</h3>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{news.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500 font-medium">{news.date}</span>
                                    <button className="px-5 h-8 text-xs border-black-500 border rounded-full hover:bg-[#380320] hover:text-white">
                                        Xem Thêm
                                    </button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
