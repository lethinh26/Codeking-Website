
import { Card } from 'antd';
import first_thirt from '../../assets/blog/first_thirt.png';
import secondBlog from '../../assets/blog/secondBlog.png';

export default function BlogPage() {
    return (
        <>
            {/* header: 90px footer: 160px */}
            <div className=" bg-[#D9D9D9] pb-30">
                {/* banner */}
                <div className=" relative bg-[url('D:\TASK_clubs_wed\task2\src\assets\blog\bannerBlog.png')] bg-cover bg-center h-150 flex items-center justify-center text-white">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Nội dung */}
                    <div className="relative z-10 text-center">
                        <h1 className="text-[80px] font-bold">Bài Viết</h1>
                    </div>
                </div>

                {/* News post */}
                <div className="px-16 pt-16 flex flex-col gap-10">
                    <h2 className="text-[40px] font-extrabold text-[#E91E63]">CÁC BÀI VIẾT MỚI NHẤT</h2>
                    {/* main card */}
                    <div className="w-full flex border border-[#333333] rounded-xl">
                        <img src={first_thirt} alt="image AWS Sập DNS DynamoDB Khu Vực Us-East-1" className='object-cover' />
                        <div className='py-6 px-10'>
                            <h3 className='text-[24px] font-semibold'>AWS Sập DNS DynamoDB Khu Vực Us-East-1</h3>
                            <div className='mt-4  text-[#333333]'>
                                <p>Ngày 20/10/2025, nhiều tổ chức công nghệ toàn cầu ghi nhận lỗi API, độ trễ tăng cao và dịch vụ ngừng phản hồi do sự cố tại vùng US-EAST-1 của Amazon Web Services (AWS) trung tâm hạ tầng quan trọng bậc nhất của internet hiện nay...</p>
                                <div className='mt-10 flex gap-7'>
                                    <div className='flex flex-col'>
                                        <span className='text-[#333333]'>Danh mục</span>
                                        <span className='font-medium'>Công nghệ</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[#333333]'>Ngày đăng</span>
                                        <span className='font-medium'>20/10/2025</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[#333333]'>Tác giả</span>
                                        <span className='font-medium'>Lê Phú Thịnh</span>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <button className='w-42 h-10 border-black-500 border rounded-3xl end hover:bg-gray-700 hover:text-white'>Xem Thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* list card */}
                    <div className='grid grid-cols-3 gap-8'>
                        <Card
                            // hoverable
                            className=" rounded-xl overflow-hidden  bg-[#D9D9D9]"
                            style={{ "backgroundColor": '#D9D9D9', border: '1px solid black' }}
                            styles={{
                                body: { padding: 0 },
                            }}
                            cover={
                                // <div className="h-[230px] w-107">
                                <div>
                                    <img
                                        alt="Workshop"
                                        src={secondBlog}
                                        className="object-cover w-full h-full"
                                    />
                                    {/* Overlay mờ */}
                                    {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div> */}

                                    <p className='mx-6 text-[#E91E63] font-medium pt-1'>Kiến Thức</p>
                                </div>
                            }
                        >

                            <div className='flex flex-col px-6  pb-4'>
                                <h2 className='font-bold text-2xl'>Workshop Ứng Dụng AI Vào Học Tập</h2>
                                <p className='text-sm text-gray-600 mt-2'>Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...</p>
                                <div className='flex justify-between items-center mt-8'>
                                    <span className='text-[12px] font-medium'>22/10/2025</span>
                                    <button className='w-32 h-10 bg-[#380320] text-white hover:text-black hover:bg-[#D9D9D9] rounded-3xl font-medium border'>Xem Thêm</button>
                                </div>
                            </div>
                        </Card>
                        <Card
                            // hoverable
                            className=" rounded-xl overflow-hidden  bg-[#D9D9D9]"
                            style={{ "backgroundColor": '#D9D9D9', border: '1px solid black' }}
                            styles={{
                                body: { padding: 0 },
                            }}
                            cover={
                                // <div className="h-[230px] w-107">
                                <div>
                                    <img
                                        alt="Workshop"
                                        src={secondBlog}
                                        className="object-cover w-full h-full"
                                    />
                                    {/* Overlay mờ */}
                                    {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div> */}

                                    <p className='mx-6 text-[#E91E63] font-medium pt-1'>Kiến Thức</p>
                                </div>
                            }
                        >

                            <div className='flex flex-col px-6  pb-4'>
                                <h2 className='font-bold text-2xl'>Workshop Ứng Dụng AI Vào Học Tập</h2>
                                <p className='text-sm text-gray-600 mt-2'>Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...</p>
                                <div className='flex justify-between items-center mt-8'>
                                    <span className='text-[12px] font-medium'>22/10/2025</span>
                                    <button className='w-32 h-10 bg-[#380320] text-white hover:text-black hover:bg-[#D9D9D9] rounded-3xl font-medium border'>Xem Thêm</button>
                                </div>
                            </div>
                        </Card>
                        <Card
                            // hoverable
                            className=" rounded-xl overflow-hidden  bg-[#D9D9D9]"
                            style={{ "backgroundColor": '#D9D9D9', border: '1px solid black' }}
                            styles={{
                                body: { padding: 0 },
                            }}
                            cover={
                                // <div className="h-[230px] w-107">
                                <div>
                                    <img
                                        alt="Workshop"
                                        src={secondBlog}
                                        className="object-cover w-full h-full"
                                    />
                                    {/* Overlay mờ */}
                                    {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div> */}

                                    <p className='mx-6 text-[#E91E63] font-medium pt-1'>Kiến Thức</p>
                                </div>
                            }
                        >

                            <div className='flex flex-col px-6  pb-4'>
                                <h2 className='font-bold text-2xl'>Workshop Ứng Dụng AI Vào Học Tập</h2>
                                <p className='text-sm text-gray-600 mt-2'>Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...</p>
                                <div className='flex justify-between items-center mt-8'>
                                    <span className='text-[12px] font-medium'>22/10/2025</span>
                                    <button className='w-32 h-10 bg-[#380320] text-white hover:text-black hover:bg-[#D9D9D9] rounded-3xl font-medium border'>Xem Thêm</button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* { all post } */}
                <div className='w-full mt-30'>
                    <h2 className='pl-16 font-extrabold text-[40px] text-[#E91E63] border-b-2 border-[#333333]'>TẤT CẢ BÀI VIẾT</h2>
                    <div className='border-b-2 py-6 border-[#333333]'>
                        <div className='flex justify-center gap-6'>
                            <button className='w-50 h-18.5 rounded-[10px] bg-[#471022] text-white font-medium hover:bg-[#CD2960]'>Công Nghệ</button>
                            <button className='w-50 h-18.5 rounded-[10px] bg-[#471022] text-white font-medium hover:bg-[#CD2960]'>Kiến Thức</button>
                            <button className='w-50 h-18.5 rounded-[10px] bg-[#471022] text-white font-medium hover:bg-[#CD2960]'>Kinh Nghiệm</button>
                            <button className='w-50 h-18.5 rounded-[10px] bg-[#471022] text-white font-medium hover:bg-[#CD2960]'>Dự Án</button>
                        </div>
                    </div>

                    <div className='py-12 border-b-2 border-[#333333] flex justify-center'>
                        <div className="w-full pl-14 pr-10 flex ">
                            <img src={first_thirt} alt="image AWS Sập DNS DynamoDB Khu Vực Us-East-1" className='object-cover' />
                            <div className='py-6 px-10'>
                                <p className='font-medium text-[#333333] mb-2 '>22/10/2025</p>
                                <h3 className='text-[24px] font-semibold'>AWS Sập DNS DynamoDB Khu Vực Us-East-1</h3>
                                <div className='mt-4  text-[#333333]'>
                                    <p>Ngày 20/10/2025, nhiều tổ chức công nghệ toàn cầu ghi nhận lỗi API, độ trễ tăng cao và dịch vụ ngừng phản hồi do sự cố tại vùng US-EAST-1 của Amazon Web Services (AWS) trung tâm hạ tầng quan trọng bậc nhất của internet hiện nay...</p>
                                    <div className='flex justify-end mt-8'>
                                        <button className='w-42 h-10 border-black-500 border rounded-3xl end hover:bg-gray-700 hover:text-white'>Xem Thêm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-12 border-b-2 border-[#333333] flex justify-center'>
                        <div className="w-full pl-14 pr-10 flex ">
                            <img src={first_thirt} alt="image AWS Sập DNS DynamoDB Khu Vực Us-East-1" className='object-cover' />
                            <div className='py-6 px-10'>
                                <p className='font-medium text-[#333333] mb-2'>22/10/2025</p>
                                <h3 className='text-[24px] font-semibold'>AWS Sập DNS DynamoDB Khu Vực Us-East-1</h3>
                                <div className='mt-4  text-[#333333]'>
                                    <p>Ngày 20/10/2025, nhiều tổ chức công nghệ toàn cầu ghi nhận lỗi API, độ trễ tăng cao và dịch vụ ngừng phản hồi do sự cố tại vùng US-EAST-1 của Amazon Web Services (AWS) trung tâm hạ tầng quan trọng bậc nhất của internet hiện nay...</p>
                                    <div className='flex justify-end mt-8'>
                                        <button className='w-42 h-10 border-black-500 border rounded-3xl end hover:bg-gray-700 hover:text-white'>Xem Thêm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-12 border-b-2 border-[#333333] flex justify-center'>
                        <div className="w-full pl-14 pr-10 flex ">
                            <img src={first_thirt} alt="image AWS Sập DNS DynamoDB Khu Vực Us-East-1" className='object-cover' />
                            <div className='py-6 px-10'>
                                <p className='font-medium text-[#333333] mb-2'>22/10/2025</p>
                                <h3 className='text-[24px] font-semibold'>AWS Sập DNS DynamoDB Khu Vực Us-East-1</h3>
                                <div className='mt-4  text-[#333333]'>
                                    <p>Ngày 20/10/2025, nhiều tổ chức công nghệ toàn cầu ghi nhận lỗi API, độ trễ tăng cao và dịch vụ ngừng phản hồi do sự cố tại vùng US-EAST-1 của Amazon Web Services (AWS) trung tâm hạ tầng quan trọng bậc nhất của internet hiện nay...</p>
                                    <div className='flex justify-end mt-8'>
                                        <button className='w-42 h-10 border-black-500 border rounded-3xl end hover:bg-gray-700 hover:text-white'>Xem Thêm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-7 flex items-center justify-center gap-3 border-[#333333] border-b-2'>
                        <span className='text-gray-500 flex justify-center items-center font-bold hover:text-black hover:bg-[#E91E63] hover:w-10 hover:h-10 hover:rounded-full active:bg-[#4d071e] cursor-pointer'>&lt;</span>
                        <div className='flex gap-3'>
                            <button className='w-10 h-10 cursor-pointer font-bold rounded-lg bg-[#E91E63]'>1</button>
                            <button className='font-bold cursor-pointer hover:bg-[#E91E63] hover:w-10 hover:h-10 active:bg-[#4d071e]'>2</button>
                            <button className='font-bold cursor-pointer hover:bg-[#E91E63] hover:w-10 hover:h-10 active:bg-[#4d071e]'>3</button>
                            <button className='font-bold cursor-pointer hover:bg-[#E91E63] hover:w-10 hover:h-10 active:bg-[#4d071e]'>4</button>
                            <button className='font-bold '>...</button>
                            <button className='font-bold cursor-pointer hover:bg-[#E91E63] hover:w-10 hover:h-10 active:bg-[#4d071e]'>10</button>
                        </div>
                        <span className='text-gray-500 flex justify-center items-center font-bold hover:text-black hover:bg-[#E91E63] hover:w-10 hover:h-10 hover:rounded-full active:bg-[#4d071e] cursor-pointer'>&gt;</span>
                    </div>
                </div>
                    <div></div>


            </div>
            {/* footer */}
        </>
    )
}
