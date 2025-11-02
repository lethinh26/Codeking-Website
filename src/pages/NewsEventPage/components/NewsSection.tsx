import { Card, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import image1 from "../../../assets/newsevent/image1.png";

export default function NewsSection() {
    const newsItems = [
        {
            image: image1,
            title: "Workshop Ứng Dụng AI Vào Học Tập",
            description:
                "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
            date: "7 PHÚT ĐỌC - 22/10/25",
        },
        {
            image: image1,
            title: "Workshop Ứng Dụng AI Vào Học Tập",
            description:
                "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
            date: "7 PHÚT ĐỌC - 22/10/25",
        },
        {
            image: image1,
            title: "Workshop Ứng Dụng AI Vào Học Tập",
            description:
                "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
            date: "7 PHÚT ĐỌC - 22/10/25",
        },
        {
            image: image1,
            title: "Workshop Ứng Dụng AI Vào Học Tập",
            description:
                "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
            date: "7 PHÚT ĐỌC - 22/10/25",
        },
        {
            image: image1,
            title: "Workshop Ứng Dụng AI Vào Học Tập",
            description:
                "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
            date: "7 PHÚT ĐỌC - 22/10/25",
        },
        {
            image: image1,
            title: "Workshop Ứng Dụng AI Vào Học Tập",
            description:
                "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
            date: "7 PHÚT ĐỌC - 22/10/25",
        },
    ];

    return (
        <section className="bg-[#D9D9D9] min-h-screen flex items-center justify-center px-6 py-0 sm:py-16">
            <div className="container mx-auto max-w-7xl">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E91E63]">TIN TỨC</h2>
                    <div className="flex gap-4">
                        <Button shape="circle" size="large" icon={<LeftOutlined />} className="border-2 border-gray-400" />
                        <Button shape="circle" size="large" icon={<RightOutlined />} className="border-2 border-gray-400" />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {newsItems.map((news, index) => (
                        <Card
                            key={index}
                            className="rounded-2xl overflow-hidden border border-black! shadow-lg"
                            style={{ backgroundColor: "transparent" }}
                            cover={
                                <div className="h-48">
                                    <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                                </div>
                            }
                        >
                            <div className="p-4">
                                <h3 className="text-base font-bold mb-3">{news.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{news.description}</p>
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
