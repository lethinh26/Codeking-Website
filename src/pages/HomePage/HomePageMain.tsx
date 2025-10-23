import { Card } from "antd";

export default function HomePageMain() {
    return (
        <>


            <main className="w-full box-border bg-[#D9D9D9]">
                <div className="h-[600px] bg-linear-to-r from-rose-950 to-fuchsia-900
                    flex flex-col justify-center items-center text-white text-center
                ">
                    <h1 className="text-[48px] font-bold mb-2">CODEKING</h1>
                    <h2 className="text-2xl font-bold">TỰ TIN - SÁNG TẠO - HỢP TÁC - THỰC TIỄN</h2>
                </div>
                <div className="bg-[#D9D9D9] pt-[50px] pb-[100px] px-[100px] ">
                    <div className="flex justify-evenly items-center gap-10">
                        <div className="w-1/3 flex flex-col ">
                            <div className="font-extrabold bg-linear-to-r 
                            from-rose-900 to-fuchsia-400  bg-clip-text text-transparent">
                                <h2 className="text-[40px]">CODEKING</h2>
                                <h3 className="text-[20px]">TỰ TIN - SÁNG TẠO - HỢP TÁC - THỰC TIỄN</h3>
                            </div>
                            <p className="font-bold text-gray-500 text-[12px]">CodeKing là câu lạc bộ công nghệ thông tin được thành lập vào tháng 8/2025, nơi quy tụ những sinh viên đam mê lập trình. Với slogan “TỰ TIN - SÁNG TẠO - HỢP TÁC - THỰC TIỄN”, CodeKing hướng tới rèn luyện kỹ năng thực chiến, tham gia dự án thực tế và chinh phục các cuộc thi công nghệ.`</p>
                            <button className="bg-[#CD2960] w-50 rounded-[30px] px-3 py-2 mt-2">Tìm hiểu thêm</button>
                        </div>
                        <div className="relative w-3/5 h-[400px] overflow-hidden">
                            <img src="../../../public/anh duoi.png" alt="" className="absolute top-0 left-0
                                w-[60%] h-auto z-10 rounded-2xl shadow-xl border-4 border-white  "/>
                            <img src="../../../public/anh tren.png" alt=""
                                className="absolute bottom-0 right-0
                                w-[60%] h-auto z-20 rounded-2xl shadow-2xl border-4 border-white "/>
                        </div>
                    </div>
                </div>
                <div className="p-5 text-center bg-[#F0DFDB] pb-10">
                    <h2 className="text-4xl font-bold text-pink-600 mb-15 mt-8">ƯU ĐIỂM VƯỢT TRỘI</h2>
                    <div className="grid grid-cols-4 gap-3">
                        <Card hoverable  cover={
                            <img
                                className="h-100 w-81 object-cover"
                                draggable={false}
                                alt="example"
                                src="../../../public/imgCard1.png"
                            />}
                            style={{
                                width: 324 ,
                                background: 'none',
                                boxShadow: 'none',
                                border: 'none'
                            }}
                            className="bg-[#F0DFDB]"
                        >
                            <Card.Meta title={
                                <div className="text-[#E91E63] text-[26px] font-bold whitespace-normal">Đào tạo thực tiễn</div>
                            } description={
                                <h3 className="font-bold text-xl">
                                    Thành viên được training kỹ năng làm việc chuyên sâu trong lĩnh vực CNTT
                                </h3>
                            } />
                        </Card>
                        <Card hoverable style={{
                                width: 324 ,
                                background: 'none',
                                boxShadow: 'none',
                                border: 'none'
                            }} cover={
                            <img
                                className="h-100 w-81 object-cover"
                                draggable={false}
                                alt="example"
                                src="../../../public/imgCard1.png"
                            />}
                        >
                            <Card.Meta title={
                                <div className="text-[#E91E63] text-[26px] font-bold whitespace-normal">Cơ hội trải nghiệm dự án thật</div>
                            } description={
                                <h3 className="font-bold text-xl">
                                    Tham gia trực tiếp các dự án tại Rikasoft, Rikkeisoft                                </h3>
                            } />
                        </Card>
                        <Card hoverable style={{
                                width: 324 ,
                                background: 'none',
                                boxShadow: 'none',
                                border: 'none'
                            }} cover={
                            <img
                                className="h-100 w-81 object-cover"
                                draggable={false}
                                alt="example"
                                src="../../../public/imgCard3.png"
                            />}
                        >
                            <Card.Meta title={
                                <div className="text-[#E91E63] text-[26px] font-bold whitespace-normal">Môi trường thi đấu năng động</div>
                            } description={
                                <h3 className="font-bold text-xl">
                                    Tổ chức và tham gia các cuộc thi công nghệ nội bộ, quốc gia và quốc tế.                                    </h3>
                            } />
                        </Card>
                        <Card hoverable style={{
                                width: 324 ,
                                background: 'none',
                                boxShadow: 'none',
                                border: 'none'
                            }} cover={
                            <img
                                className="h-100 w-81 object-cover"
                                draggable={false}
                                alt="example"
                                src="../../../public/imgCard4.png"
                            />}
                        >
                            <Card.Meta title={
                                <div className="text-[#E91E63] text-[26px] font-bold whitespace-normal">Kết nối cộng đồng</div>
                            } description={
                                <h3 className="font-bold text-xl">
                                    Giao lưu, học hỏi cùng các CLB lập trình ở nhiều trường đại học trên toàn quốc                                    </h3>
                            } />
                        </Card>
                    </div>

                </div>
                <div className="py-10 text-center px-20 bg-[rgb(217,217,217)]">
                    <h2 className="text-4xl text-pink-700 font-bold mt-20 mb-15">CÁC BAN CHÍNH</h2>
                    <div className="flex justify-between px-5 bg-[#380320] h-[500px] rounded-2xl items-center">
                        <div className="flex flex-col gap-2 w-81 ">
                            <img src="../../../public/icon1card2.png" alt="" className="mx-auto" width={90} />
                            <h3 className="text-white font-bold text-xl">CHUYÊN MÔN</h3>
                            <p className="text-white font-xl">Là “bộ não” của CodeKing. Ban Chuyên Môn phụ trách lập trình, rèn luyện kỹ năng công nghệ và tham gia các cuộc thi như ICPC, Hackathon, hay dự án thực tế tại Rikkeisoft và Rikasoft.</p>
                        </div>
                        <div className="flex flex-col gap-2 w-81 ">
                            <img src="../../../public/icon2card2.png" alt="" className="mx-auto" width={90} />
                            <h3 className="text-white font-bold text-xl">CHUYÊN MÔN</h3>
                            <p className="text-white font-xl">Là “bộ não” của CodeKing. Ban Chuyên Môn phụ trách lập trình, rèn luyện kỹ năng công nghệ và tham gia các cuộc thi như ICPC, Hackathon, hay dự án thực tế tại Rikkeisoft và Rikasoft.</p>
                        </div>
                        <div className="flex flex-col gap-2 w-81 ">
                            <img src="../../../public/icon3card2.png" alt="" className="mx-auto" width={90} />
                            <h3 className="text-white font-bold text-xl">CHUYÊN MÔN</h3>
                            <p className="text-white font-xl">Là “bộ não” của CodeKing. Ban Chuyên Môn phụ trách lập trình, rèn luyện kỹ năng công nghệ và tham gia các cuộc thi như ICPC, Hackathon, hay dự án thực tế tại Rikkeisoft và Rikasoft.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F0DFDB] text-center p-8">
                    <h2 className="mb-15 text-[40px] font-bold">THÀNH TỰU</h2>
                    <div className="flex justify-evenly flex-wrap items-center gap-12 pb-20">
                        <div className="w-120 h-37 bg-[#CD2960] rounded-[60px] flex flex-col items-center justify-center">
                            <h3 className="text-[50px] font-bold text-[#471022]">+40</h3>
                            <p className="font-bold text-white text-[16px]">Thành viên</p>
                        </div>
                        <div className="w-120 h-37 bg-[#CD2960] rounded-[60px] flex flex-col items-center justify-center">
                            <h3 className="text-[50px] font-bold text-[#471022]">2</h3>
                            <p className="font-bold text-white text-[16px]">Chi nhánh</p>
                        </div>
                        <div className="w-120 h-37 bg-[#CD2960] rounded-[60px] flex flex-col items-center justify-center">
                            <h3 className="text-[50px] font-bold text-[#471022]">2</h3>
                            <p className="font-bold text-white text-[16px]">Đối tác</p>
                        </div>
                        <div className="w-120 h-37 bg-[#CD2960] rounded-[60px] flex flex-col items-center justify-center">
                            <h3 className="text-[50px] font-bold text-[#471022]">+10</h3>
                            <p className="font-bold text-white text-[16px]">Đối tác</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
