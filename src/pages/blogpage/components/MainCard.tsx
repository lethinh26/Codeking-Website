interface MainCardProps {
    image: string;
    title: string;
    description: string;
    category: string;
    date: string;
    author: string;
}

export default function MainCard({ image, title, description, category, date, author }: MainCardProps) {
    return (
        <div className="w-full flex flex-col md:flex-row border border-[#333333] rounded-2xl overflow-hidden">
            <img src={image} alt={title} className='object-cover md:w-1/2 h-64 md:h-auto' />
            <div className='py-5 px-6'>
                <h3 className='text-lg md:text-xl font-semibold'>{title}</h3>
                <div className='mt-3 text-[#333333]'>
                    <p className='text-sm md:text-base'>{description}</p>
                    <div className='mt-6 flex flex-wrap gap-4'>
                        <div className='flex flex-col'>
                            <span className='text-xs text-[#333333]'>Danh mục</span>
                            <span className='text-sm font-medium'>{category}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs text-[#333333]'>Ngày đăng</span>
                            <span className='text-sm font-medium'>{date}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs text-[#333333]'>Tác giả</span>
                            <span className='text-sm font-medium'>{author}</span>
                        </div>
                    </div>
                    <div className='flex justify-end mt-4'>
                        <button className='px-6 h-9 text-sm border-black-500 border rounded-full hover:bg-[#380320] hover:text-white'>
                            Xem Thêm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
