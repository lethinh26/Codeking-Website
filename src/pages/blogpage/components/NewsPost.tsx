import MainCard from './MainCard';
import BlogCard from './BlogCard';
import first_thirt from '../../../assets/blog/first_thirt.png';
import secondBlog from '../../../assets/blog/secondBlog.png';

export default function NewsPost() {
    return (
        <div className="px-6 md:px-12 pt-12 flex flex-col gap-8 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#E91E63]">CÁC BÀI VIẾT MỚI NHẤT</h2>
            
            <MainCard
                image={first_thirt}
                title="AWS Sập DNS DynamoDB Khu Vực Us-East-1"
                description="Ngày 20/10/2025, nhiều tổ chức công nghệ toàn cầu ghi nhận lỗi API, độ trễ tăng cao và dịch vụ ngừng phản hồi do sự cố tại vùng US-EAST-1 của Amazon Web Services (AWS) trung tâm hạ tầng quan trọng bậc nhất của internet hiện nay..."
                category="Công nghệ"
                date="20/10/2025"
                author="Lê Phú Thịnh"
            />

            <div className='grid md:grid-cols-3 gap-6'>
                <BlogCard
                    image={secondBlog}
                    title="Workshop Ứng Dụng AI Vào Học Tập"
                    description="Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường..."
                    category="Kiến Thức"
                    date="22/10/2025"
                />
                <BlogCard
                    image={secondBlog}
                    title="Workshop Ứng Dụng AI Vào Học Tập"
                    description="Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường..."
                    category="Kiến Thức"
                    date="22/10/2025"
                />
                <BlogCard
                    image={secondBlog}
                    title="Workshop Ứng Dụng AI Vào Học Tập"
                    description="Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường..."
                    category="Kiến Thức"
                    date="22/10/2025"
                />
            </div>
        </div>
    );
}
