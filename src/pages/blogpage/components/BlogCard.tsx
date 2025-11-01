import { Card } from 'antd';

interface BlogCardProps {
    image: string;
    title: string;
    description: string;
    category: string;
    date: string;
}

export default function BlogCard({ image, title, description, category, date }: BlogCardProps) {
    return (
        <Card
            className="rounded-xl overflow-hidden bg-[#D9D9D9]"
            style={{ backgroundColor: '#D9D9D9', border: '1px solid black' }}
            styles={{
                body: { padding: 0 },
            }}
            cover={
                <div>
                    <img
                        alt={title}
                        src={image}
                        className="object-cover w-full h-full"
                    />
                    <p className='mx-6 text-[#E91E63] font-medium pt-1'>{category}</p>
                </div>
            }
        >
            <div className='flex flex-col px-6 pb-4'>
                <h2 className='font-bold text-2xl'>{title}</h2>
                <p className='text-sm text-gray-600 mt-2'>{description}</p>
                <div className='flex justify-between items-center mt-8'>
                    <span className='text-[12px] font-medium'>{date}</span>
                        <button className='w-32 h-10 border-black-500 border rounded-3xl end hover:bg-[#380320] hover:text-white'>
                            Xem Thêm
                        </button>
                </div>
            </div>
        </Card>
    );
}
