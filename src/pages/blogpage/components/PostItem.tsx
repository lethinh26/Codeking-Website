interface PostItemProps {
    image: string;
    title: string;
    description: string;
    date: string;
}

export default function PostItem({ image, title, description, date }: PostItemProps) {
    return (
        <div className="py-8 border-b-2 border-[#333333]">
            <div className="w-full flex flex-col md:flex-row gap-6">
                <img src={image} alt={title} className="object-cover rounded-xl w-full md:w-80 h-48" />
                <div className="flex-1">
                    <p className="text-xs font-medium text-[#333333] mb-2">{date}</p>
                    <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                    <div className="mt-3 text-[#333333]">
                        <p className="text-sm md:text-base">{description}</p>
                        <div className="flex justify-end mt-6">
                            <button className="px-6 h-9 text-sm border-black-500 border rounded-full hover:bg-[#380320] hover:text-white">
                                Xem Thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
