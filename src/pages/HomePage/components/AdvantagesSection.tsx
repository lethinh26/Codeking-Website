import { Card } from 'antd';
import { CodeOutlined, ExperimentOutlined, TrophyOutlined } from '@ant-design/icons';
import image3 from "../../../assets/homepage/image3.png"
import image4 from "../../../assets/homepage/image4.png"
import image5 from "../../../assets/homepage/image5.png"

const images = [image3, image4, image5];

export default function AdvantagesSection() {
    const advantages = [
        {
            icon: <CodeOutlined style={{ fontSize: '64px', color: '#E91E63' }} />,
            title: 'Đào tạo thực tiễn',
            description: 'Thành viên được training kỹ năng làm việc chuyên sâu trong lĩnh vực CNTT'
        },
        {
            icon: <ExperimentOutlined style={{ fontSize: '64px', color: '#E91E63' }} />,
            title: 'Cơ hội trải nghiệm dự án thật',
            description: 'Tham gia trực tiếp các dự án tại Rikkeisioft, Rikkeisoft'
        },
        {
            icon: <TrophyOutlined style={{ fontSize: '64px', color: '#E91E63' }} />,
            title: 'Môi trường thi đấu năng động',
            description: 'Tổ chức và tham gia các cuộc thi công nghệ lớn, quốc gia và quốc tế'
        }
    ];

    return (
        <section className="bg-[#F0DFDB] min-h-screen flex items-center justify-center px-12 py-20">
            <div className="container mx-auto">
                <h2 className="text-6xl md:text-6xl font-bold text-[#E91E63] text-center mb-20">
                    ƯU ĐIỂM VƯỢT TRỘI
                </h2>
                
                <div className="grid md:grid-cols-3 gap-10">
                    {advantages.map((item, index) => (
                        <Card
                            key={index}
                            className="text-center border-0 shadow-lg rounded-3xl overflow-hidden"
                            style={{ backgroundColor: 'white' }}
                            cover={
                                <div className="rounded-t-3xl overflow-hidden h-70 object-fill">
                                    <img src={images[index]} className='w-full h-full'/>
                                </div>
                            }
                        >
                            <div className="px-6">
                                <div className="mb-6 flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[#E91E63] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
