import amazon from "../../assets/Detail/amazon.png";
export default function DetailPage() {
  return (
    <div className="min-h-screen bg-[#d9d9d9]">
      <section
        className="relative bg-cover bg-center "
        style={{ backgroundImage: `url(${amazon})` }}
      >
        <div className="absolute inset-0 bg-black/50 w-full h-full"></div>
        <div className="relative mx-auto px-4 text-center z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-[64px] font-bold text-white mb-4 drop-shadow-lg mt-95">
            AWS Sập DNS DynamoDB
            <br />
            Khu Vực Us-East-1
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto bg-[#d9d9d9]">
        <div className="flex flex-col lg:flex-row">

          {/* Main Article */}
          <main className="lg:w-2/3 border-l-0 bg-[#d9d9d9]">

            {/* Article Header */}
            <div className="border-b border-black border-r px-20 py-10">
              <h2 className="text-[20px] font-bold text-black-700 mb-2">
                Giới thiệu
              </h2>
              <p className="text-gray-900 leading-relaxed text-[20px]">
                AWS (Amazon Web Services) là một nền tảng điện toán đám mây toàn
                diện do Amazon cung cấp. Nó cung cấp hàng trăm dịch vụ giúp
                doanh nghiệp và cá nhân xây dựng, triển khai và quản lý ứng dụng
                trên môi trường internet mà không cần phải đầu tư hạ tầng phần
                cứng truyền thống.
              </p>
            </div>

            {/* Incident Report */}
            <div className="border-b border-black border-r px-20 pb-10 py-10">
              <h3 className="text-[20px] font-semibold text-back-700 mb-3">
                Sự cố ngày 20/10
              </h3>
              <p className="text-gray-900 leading-relaxed text-[20px] mb-4">
                Hàng loạt trang web, trò chơi và ứng dụng trực tuyến đang bị ảnh
                hưởng bởi một sự cố mạng nghiêm trọng. Sự cố bắt đầu từ khoảng
                13h30 ngày 20/10 (giờ Việt Nam), đường như liên quan đến trực
                trác tại Amazon Web Services (AWS) – nền tảng điện toán đám mây
                lớn nhất thế giới.
              </p>
              <p className="text-gray-900 leading-relaxed text-[20px] mb-4">
                Theo trang giám sát Downdetector, riêng tại Mỹ đã có hơn 2.000
                báo cáo về việc AWS gặp lỗi.
              </p>
              <p className="text-gray-900 leading-relaxed text-[20px] mb-4">
                Sự cố diễn ra đột ngột và lan rộng, làm gián đoạn hoạt động của
                các ứng dụng và dịch vụ như Snapchat, nền tảng game Roblox, sàn
                giao dịch tiền số Coinbase, ứng dụng giao dịch Robinhood, ứng
                dụng hợp video Zoom và ứng dụng học ngoại ngữ Duolingo.
              </p>
              <p className="text-gray-900 leading-relaxed text-[20px] mb-4">
                Bản thân các dịch vụ của Amazon như Amazon.com, PrimeVideo và
                Alexa cũng gặp trục trặc.
              </p>
              <p className="text-gray-900 leading-relaxed text-[20px] mb-4">
                Trên trang tình trạng dịch vụ của mình, AWS cho biết đang ghi
                nhận “tỷ lệ lỗi tăng cao” và “độ trễ lớn” ở nhiều dịch vụ. Công
                ty cho hay: “Chúng tôi đang tích cực khắc phục sự cố và tìm hiểu
                nguyên nhân gốc rễ”, đồng thời hứa sẽ cập nhật thông tin trong
                vòng 45 phút tới.
              </p>
              <p className="text-gray-900 leading-relaxed text-[20px] mb-4">
                AWS thừa nhận có “tỷ lệ lỗi nghiêm trọng” đối với các yêu cầu
                tới dịch vụ lưu trữ dữ liệu DynamoDB tại khu vực US-EAST-1 (miền
                Bắc bang Virginia, Mỹ). Công ty nói thêm nhiều dịch vụ khác tại
                khu vực này cũng đang bị ảnh hưởng, khiến người dùng “không thể
                tạo hoặc cập nhật các yêu cầu hỗ trợ”.
              </p>
              <p className="text-gray-900 leading-relaxed text-[20px] mb-4">
                Theo MakeUseOf, US-EAST-1 là khu vực điện toán đám mây lớn nhất
                và có tầm quan trọng chiến lược nhất thế giới. Điều này có nghĩa
                lỗi không chỉ giới hạn ở khu vực miền Đông nước Mỹ mà còn gây
                hiệu ứng lan tỏa toàn cầu.
              </p>
              <p className="text-gray-900 leading-relaxed text-[20px] mb-4">
                Đây là trung tâm dữ liệu lâu đời và lớn nhất của AWS, vai trò
                then chốt trong hệ thống hạ tầng đám mây của Amazon. Đặc biệt,
                các bảng điều khiển cho nhiều dịch vụ toàn cầu của AWS – như
                Amazon Identity and Access Management (IAM) và Amazon CloudFront
                – đều được đặt tại đây.
              </p>
              <p className="text-gray-900 leading-relaxed text-[20px] mb-4">
                Do khối khu vực này gặp sự cố, các dịch vụ trên thế giới cũng có
                thể bị ảnh hưởng, bởi nhiều ứng dụng cần xác thực hoặc truy cập
                bằng dữ liệu toàn cầu, ngay cả khi dữ liệu chính của chúng được
                lưu ở nơi khác.
              </p>
              <p className="text-gray-900 leading-relaxed text-[20px] mb-4">
                Theo AWS, các kỹ sư “đã ngay lập tức vào cuộc” khi phát hiện sự
                cố và “đang tích cực làm việc để khắc phục và điều tra nguyên
                nhân”.
              </p>
            </div>

            {/* AWS Impact Explanation Section */}
            <div className="border-b border-black border-r px-20 py-10 bg-[#d9d9d9]">
              <h3 className="text-[20px] font-bold text-black-700 mb-3">
                Vì sao AWS bị lỗi gây ảnh hưởng diện rộng?
              </h3>
              <p className="mb-4 text-gray-900 text-[20px]">
                AWS được mô tả là “dịch vụ đám mây toàn diện nhất thế giới”,
                cung cấp hạ tầng máy chủ, cơ sở dữ liệu và lưu trữ cho hàng
                triệu doanh nghiệp, tổ chức và chính phủ trên toàn cầu. Chính vì
                vậy, chỉ một sự cố nhỏ ở AWS cũng có thể gây tác động dây chuyền
                đến hàng loạt nền tảng trực tuyến.
              </p>
              <p className="mb-4 text-gray-900 text-[20px]">
                Giám đốc điều hành của công ty AI Perplexity, ông Aravind
                Srinivas, thông báo trên X: “Perplexity hiện không hoạt động
                được. Nguyên nhân gốc rễ là do AWS. Chúng tôi đang khắc phục”.
              </p>
              <p className="mb-4 text-gray-900 text-[20px]">
                Sự cố ngày 20/10 của AWS khiến nhiều người nhớ lại vụ sập mạng
                toàn cầu tháng 7/2024, khi một bản cập nhật lỗi của hãng an ninh
                mạng CrowdStrike khiến 8,5 triệu thiết bị Windows trên toàn thế
                giới gặp trục trặc. Vụ việc làm hàng nghìn chuyến bay bị huỷ,
                bệnh viện, ngành hàng và hãng truyền thông bị liệt. Đến nay,
                CrowdStrike vẫn đang bị Delta Airlines và cổ đông kiện.
              </p>
              <p className="mb-4 text-gray-900 text-[20px]">
                MakeUseOf nhận định, những sự cố như trên cho thấy mức độ phụ
                thuộc sâu sắc của Internet hiện đại vào hạ tầng dùng chung. Khi
                một “trụ cột” trung tâm gặp trục trặc, nhiều ứng dụng chuyển lan
                toàn cầu, khiến hàng loạt dịch vụ – từ công cụ làm việc cho đến
                nền tảng giải trí – đồng loạt tê liệt.
              </p>
              <p className="mb-4 text-gray-900 text-[20px]">
                Hiện tại, người dùng chỉ còn biết chờ các kỹ sư AWS khắc phục sự
                cố và khôi phục các nền tảng phụ thuộc trên toàn mạng. Đây là
                một lời cảnh tỉnh hiếm hoi nhưng đáng suy ngẫm: ngay cả “đám
                mây” – biểu tượng của độ tin cậy và linh hoạt – cũng có thể có
                điểm yếu chí tử.
              </p>
              <p className="mt-4 text-gray-900 text-[20px]">(Theo MOU, Skynews)</p>
            </div>

            {/* Additional Content */}
            <div className="space-y-4 text-gray-900 leading-relaxed text-base"></div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3 border-b border-r border-black p-8">
            <div className="bg-[#d9d9d9] p-8 ml-0 rounded-xl">

              {/* Article Info */}
              <div className="space-y-2 mb-8 text-sm">
                <div className="grid grid-cols-2 gap-y-2 gap-x-8 text-base mb-2">
                  <div>
                    <div className="text-gray-700">Danh mục</div>
                    <div className="font-bold text-black">Công nghệ</div>
                  </div>
                  <div>
                    <div className="text-gray-700">Ngày đăng</div>
                    <div className="font-bold text-black">20/10/2024</div>
                  </div>
                  <div>
                    <div className="text-gray-700">Thời gian đọc</div>
                    <div className="font-bold text-black">10 phút</div>
                  </div>
                  <div>
                    <div className="text-gray-700">Tác giả</div>
                    <div className="font-bold text-black">Lê Phú Thịnh</div>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Mục lục</h4>
                <div className="bg-[#c3c1c2] rounded-xl p-6">
                  <ul className="space-y-4 text-base text-black list-disc pl-6">
                    <li>Giới thiệu</li>
                    <li>Sự cố ngày 20/10</li>
                    <li>Vì sao AWS bị lỗi gây ảnh hưởng diện rộng</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Articles Section */}
      <section className="bg-[#d9d9d9] py-12 mx-auto">
        <div className="max-w-[1440px] mx-auto px-12">
          <h2 className="text-[40px] font-bold text-left text-pink-600 tracking-tight pb-4">
            BÀI VIẾT TƯƠNG TỰ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tag: "Kiến thức",
                tagColor: "text-pink-600",
                img: "/src/assets/blog/first_thirt.png",
                title: "Workshop Ứng Dụng AI Vào Học Tập",
                desc: "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
                date: "22/10/2025",
                btnColor: "bg-[#380320] text-white",
              },
              {
                tag: "Kinh nghiệm",
                tagColor: "text-pink-600",
                img: "/src/assets/blog/secondBlog.png",
                title: "Workshop Ứng Dụng AI Vào Học Tập",
                desc: "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
                date: "22/10/2025",
                btnColor: "bg-gray-100 text-gray-900 border border-gray-400",
              },
              {
                tag: "Dự án",
                tagColor: "text-pink-600",
                img: "/src/assets/blog/first_thirt.png",
                title: "Workshop Ứng Dụng AI Vào Học Tập",
                desc: "Ngày 11/8 vừa qua, Codeking và sinh viên PTIT đã chung tay hiện thực hóa mô hình đào tạo gắn kết chặt chẽ giữa môi trường...",
                date: "22/10/2025",
                btnColor: "bg-[#380320] text-white",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm border border-black overflow-hidden flex flex-col transition-all hover:shadow-lg"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 bg-[#d9d9d9]">
                  <div
                    className={`mb-2 font-semibold text-base ${item.tagColor}`}
                  >
                    {item.tag}
                  </div>
                  <h3 className="font-bold text-[24px] text-gray-900 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-700 mb-4 line-clamp-2">
                    {item.desc}
                  </p>
                  <div className="flex justify-between items-end mt-auto pt-2">
                    <span className="text-[12px] text-black-500 font-bold">{item.date}</span>
                    <button
                      className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 shadow-sm ${item.btnColor} hover:scale-105 hover:cursor-pointer`}
                    >
                      XEM THÊM
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

