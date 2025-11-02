import { CodeOutlined, BulbOutlined, TeamOutlined } from '@ant-design/icons';
import background from '../../../assets/background.png';

export default function CoreValuesSection() {
    const coreValues = [
        {
            icon: <CodeOutlined style={{ fontSize: '48px', color: '#E91E63' }} />,
            title: 'CHUYÊN MÔN',
            description: 'Là "Dò nào" của Codeking, Ban Chuyên Môn phụ trách tập trung đào tạo và nâng cao kỹ năng lập trình và tham gia các cuộc thi như Hackathon, hay dự án thực tế tại Rikkeisoft và Rikkeiacademy.'
        },
        {
            icon: <BulbOutlined style={{ fontSize: '48px', color: '#E91E63' }} />,
            title: 'SỰ KIỆN',
            description: 'Là "tâm hồn sáng tạo" của CLB, Ban Sự kiện đảm nhiệm việc lên ý tưởng, tổ chức các chương trình, cuộc thi và sự kiện giáo dục giúp các CLB.'
        },
        {
            icon: <TeamOutlined style={{ fontSize: '48px', color: '#E91E63' }} />,
            title: 'HẬU CẦN',
            description: 'Là "hậu phương vững chắc" của CLB, Ban Hậu Cần chịu trách nhiệm chuẩn bị cơ sở vật chất, thiết bị, tài liệu và quản lý kinh phí cho mọi hoạt động.'
        }
    ];

    return (
        <section 
            className="min-h-screen flex items-center justify-center px-6 py-16 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E91E63] text-center mb-12">
                    CÁC BAN CHÍNH
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                    {coreValues.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-[#471022] rounded-2xl p-8 text-center text-white"
                        >
                            <div className="mb-6 flex justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">
                                {item.title}
                            </h3>
                            <p className="text-base text-gray-200 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
