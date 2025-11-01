interface PostItemProps {
    image: string;
    title: string;
    description: string;
    date: string;
}

export default function PostItem({ image, title, description, date }: PostItemProps) {
    return (
        <div className="py-12 border-b-2 border-[#333333] flex justify-center">
            <div className="w-full pl-14 pr-10 flex">
                <img src={image} alt={title} className="object-cover rounded-[10px]" />
                <div className="py-6 px-10">
                    <p className="font-medium text-[#333333] mb-2">{date}</p>
                    <h3 className="text-[24px] font-semibold">{title}</h3>
                    <div className="mt-4 text-[#333333]">
                        <p>{description}</p>
                        <div className="flex justify-end mt-8">
                            <button className="w-42 h-10 border-black-500 border rounded-3xl end hover:bg-[#380320] hover:text-white">
                                Xem Thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
