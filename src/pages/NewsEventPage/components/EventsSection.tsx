import { Card, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import background from "../../../assets/background.png";
import image5 from "../../../assets/newsevent/image5.png";

export default function EventsSection() {
    const events = [
        {
            image: image5,
            title: "Rau củ quả",
            description:
                "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
            date: "5-7 PHÚT ĐỌC",
        },
        {
            image: image5,
            title: "Rau củ quả",
            description:
                "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
            date: "5-7 PHÚT ĐỌC",
        },
        {
            image: image5,
            title: "Rau củ quả",
            description:
                "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
            date: "5-7 PHÚT ĐỌC",
        },
    ];

    return (
        <section
            className="min-h-screen flex items-center justify-center px-6 py-0 sm:py-16 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="container mx-auto max-w-7xl">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E91E63]">SỰ KIỆN</h2>
                    <div className="flex gap-4">
                        <Button shape="circle" size="large" icon={<LeftOutlined />} className="bg-white" />
                        <Button shape="circle" size="large" icon={<RightOutlined />} className="bg-white" />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <Card
                            key={index}
                            className="rounded-2xl overflow-hidden shadow-lg border-0!"
                            style={{ backgroundColor: "#471022" }}
                            cover={
                                <div className="relative h-48">
                                    <img src={event.image} className="w-full h-full object-cover" />
                                </div>
                            }
                        >
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-3 text-white">{event.title}</h3>
                                <p className="text-sm text-gray-300 mb-4 leading-relaxed">{event.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-400 font-medium">{event.date}</span>

                                    <button className="px-5 h-8 text-xs hover:bg-[#E91E63] hover:text-black border-black-500 border rounded-full bg-[#380320] text-white">
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
