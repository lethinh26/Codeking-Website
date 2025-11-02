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
            className="rounded-2xl overflow-hidden bg-[#D9D9D9]"
            style={{ backgroundColor: '#D9D9D9', border: '1px solid black' }}
            styles={{
                body: { padding: 0 },
            }}
            cover={
                <div>
                    <img
                        alt={title}
                        src={image}
                        className="object-cover w-full h-48"
                    />
                    <p className='mx-4 text-[#E91E63] font-medium pt-1 text-sm'>{category}</p>
                </div>
            }
        >
            <div className='flex flex-col px-4 pb-4'>
                <h2 className='font-bold text-base'>{title}</h2>
                <p className='text-xs text-gray-600 mt-2'>{description}</p>
                <div className='flex justify-between items-center mt-6'>
                    <span className='text-xs font-medium'>{date}</span>
                    <button className='px-5 h-8 text-xs border-black-500 border rounded-full hover:bg-[#380320] hover:text-white'>
                        Xem Thêm
                    </button>
                </div>
            </div>
        </Card>
    );
}
