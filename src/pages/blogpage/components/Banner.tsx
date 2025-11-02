export default function Banner() {
    return (
        <div className="relative bg-[url('src/assets/blog/bannerBlog.png')] bg-cover bg-center min-h-[calc(100vh-90px)] flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold">Bài Viết</h1>
            </div>
        </div>
    );
}
