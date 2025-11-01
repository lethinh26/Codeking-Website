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
        <div className="w-full flex border border-[#333333] rounded-xl">
            <img src={image} alt={title} className='object-cover rounded-l-[10px]' />
            <div className='py-6 px-10'>
                <h3 className='text-[24px] font-semibold'>{title}</h3>
                <div className='mt-4 text-[#333333]'>
                    <p>{description}</p>
                    <div className='mt-10 flex gap-7'>
                        <div className='flex flex-col'>
                            <span className='text-[#333333]'>Danh mục</span>
                            <span className='font-medium'>{category}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[#333333]'>Ngày đăng</span>
                            <span className='font-medium'>{date}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[#333333]'>Tác giả</span>
                            <span className='font-medium'>{author}</span>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className='w-42 h-10 border-black-500 border rounded-3xl end hover:bg-[#380320] hover:text-white'>
                            Xem Thêm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
