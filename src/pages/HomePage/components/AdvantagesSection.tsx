import { Card } from 'antd';
import { CodeOutlined, ExperimentOutlined, TrophyOutlined } from '@ant-design/icons';
import image3 from "../../../assets/homepage/image3.png"
import image4 from "../../../assets/homepage/image4.png"
import image5 from "../../../assets/homepage/image5.png"

const images = [image3, image4, image5];

export default function AdvantagesSection() {
    const advantages = [
        {
            icon: <CodeOutlined style={{ fontSize: '48px', color: '#E91E63' }} />,
            title: 'Đào tạo thực tiễn',
            description: 'Thành viên được training kỹ năng làm việc chuyên sâu trong lĩnh vực CNTT'
        },
        {
            icon: <ExperimentOutlined style={{ fontSize: '48px', color: '#E91E63' }} />,
            title: 'Cơ hội trải nghiệm dự án thật',
            description: 'Tham gia trực tiếp các dự án tại Rikkeisioft, Rikkeisoft'
        },
        {
            icon: <TrophyOutlined style={{ fontSize: '48px', color: '#E91E63' }} />,
            title: 'Môi trường thi đấu năng động',
            description: 'Tổ chức và tham gia các cuộc thi công nghệ lớn, quốc gia và quốc tế'
        }
    ];

    return (
        <section className="bg-[#F0DFDB] min-h-screen flex items-center justify-center px-6 py-16">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E91E63] text-center mb-12">
                    ƯU ĐIỂM VƯỢT TRỘI
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                    {advantages.map((item, index) => (
                        <Card
                            key={index}
                            className="text-center border-0! shadow-lg rounded-2xl overflow-hidden"
                            style={{ backgroundColor: 'white' }}
                            cover={
                                <div className="rounded-t-2xl overflow-hidden h-48 object-fill">
                                    <img src={images[index]} className='w-full h-full object-cover'/>
                                </div>
                            }
                        >
                            <div className="px-5 py-6">
                                <div className="mb-4 flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#E91E63] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-base text-gray-700 leading-relaxed">
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
