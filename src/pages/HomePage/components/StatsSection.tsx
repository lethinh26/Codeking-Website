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
        <section className="bg-[#F0DFDB] min-h-screen flex items-center justify-center px-6 py-16">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E91E63] text-center mb-12">
                    THÀNH TỰU
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            className="text-center shadow-lg rounded-2xl overflow-hidden border-0!"
                            style={{ 
                                backgroundColor: stat.color,
                            }}

                        >
                            <div className="text-white">
                                <h3 className="text-5xl font-bold mb-4">
                                    {stat.number}
                                </h3>
                                <p className="text-xl font-medium">
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
