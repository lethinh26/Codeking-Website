import PostItem from './PostItem';
import Pagination from './Pagination';
import first_thirt from '../../../assets/blog/first_thirt.png';

export default function AllPost() {
    return (
        <div className='w-full mt-30'>
            <h2 className='pl-16 font-extrabold text-[40px] text-[#E91E63] border-b-2 border-[#333333]'>
                TẤT CẢ BÀI VIẾT
            </h2>
            
            <div className='border-b-2 py-6 border-[#333333]'>
                <div className='flex justify-center gap-6'>
                    <button className='w-50 h-18.5 rounded-[10px] bg-[#471022] text-white font-medium hover:bg-[#CD2960]'>
                        Công Nghệ
                    </button>
                    <button className='w-50 h-18.5 rounded-[10px] bg-[#471022] text-white font-medium hover:bg-[#CD2960]'>
                        Kiến Thức
                    </button>
                    <button className='w-50 h-18.5 rounded-[10px] bg-[#471022] text-white font-medium hover:bg-[#CD2960]'>
                        Kinh Nghiệm
                    </button>
                    <button className='w-50 h-18.5 rounded-[10px] bg-[#471022] text-white font-medium hover:bg-[#CD2960]'>
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
