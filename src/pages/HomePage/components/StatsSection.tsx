import { Card } from 'antd';

export default function StatsSection() {
    const stats = [
        {
            number: '+40',
            label: 'Thành viên',
            color: '#CD2960'
        },
        {
            number: '2',
            label: 'Chi nhánh',
            color: '#CD2960'
        },
        {
            number: '2',
            label: 'Đối tác',
            color: '#CD2960'
        },
        {
            number: '+10',
            label: 'Giảng viên',
            color: '#CD2960'
        }
    ];

    return (
        <section className="bg-[#F0DFDB] min-h-screen flex items-center justify-center px-12 py-20">
            <div className="container mx-auto">
                <h2 className="text-6xl md:text-7xl font-bold text-[#E91E63] text-center mb-20">
                    THÀNH TỰU
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            className="text-center border-0 shadow-lg rounded-3xl overflow-hidden"
                            style={{ 
                                backgroundColor: stat.color,
                            }}
                            bodyStyle={{ 
                                padding: '64px 32px',
                            }}
                        >
                            <div className="text-white">
                                <h3 className="text-7xl font-bold mb-6">
                                    {stat.number}
                                </h3>
                                <p className="text-3xl font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
