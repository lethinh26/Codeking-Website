import PostItem from './PostItem';
import Pagination from './Pagination';
import first_thirt from '../../../assets/blog/first_thirt.png';

export default function AllPost() {
    return (
        <div className='w-full mt-30 max-w-7xl mx-auto px-6 md:px-12'>
            <h2 className='font-extrabold text-2xl md:text-3xl lg:text-4xl text-[#E91E63] border-b-2 border-[#333333] pb-4'>
                TẤT CẢ BÀI VIẾT
            </h2>
            
            <div className='border-b-2 py-5 border-[#333333]'>
                <div className='flex flex-wrap justify-center gap-4'>
                    <button className='px-6 py-2 rounded-lg bg-[#471022] text-white font-medium hover:bg-[#CD2960] text-sm'>
                        Công Nghệ
                    </button>
                    <button className='px-6 py-2 rounded-lg bg-[#471022] text-white font-medium hover:bg-[#CD2960] text-sm'>
                        Kiến Thức
                    </button>
                    <button className='px-6 py-2 rounded-lg bg-[#471022] text-white font-medium hover:bg-[#CD2960] text-sm'>
                        Kinh Nghiệm
                    </button>
                    <button className='px-6 py-2 rounded-lg bg-[#471022] text-white font-medium hover:bg-[#CD2960] text-sm'>
                        Dự Án
                    </button>
                </div>
            </div>

            <PostItem
                image={first_thirt}
                title="AWS Sập DNS DynamoDB Khu Vực Us-East-1"
                description="Ngày 20/10/2025, nhiều tổ chức công nghệ toàn cầu ghi nhận lỗi API, độ trễ tăng cao và dịch vụ ngừng phản hồi do sự cố tại vùng US-EAST-1 của Amazon Web Services (AWS) trung tâm hạ tầng quan trọng bậc nhất của internet hiện nay..."
                date="22/10/2025"
            />
            <PostItem
                image={first_thirt}
                title="AWS Sập DNS DynamoDB Khu Vực Us-East-1"
                description="Ngày 20/10/2025, nhiều tổ chức công nghệ toàn cầu ghi nhận lỗi API, độ trễ tăng cao và dịch vụ ngừng phản hồi do sự cố tại vùng US-EAST-1 của Amazon Web Services (AWS) trung tâm hạ tầng quan trọng bậc nhất của internet hiện nay..."
                date="22/10/2025"
            />
            <PostItem
                image={first_thirt}
                title="AWS Sập DNS DynamoDB Khu Vực Us-East-1"
                description="Ngày 20/10/2025, nhiều tổ chức công nghệ toàn cầu ghi nhận lỗi API, độ trễ tăng cao và dịch vụ ngừng phản hồi do sự cố tại vùng US-EAST-1 của Amazon Web Services (AWS) trung tâm hạ tầng quan trọng bậc nhất của internet hiện nay..."
                date="22/10/2025"
            />

            <Pagination />
        </div>
    );
}
