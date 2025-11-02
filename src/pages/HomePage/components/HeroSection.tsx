import background from '../../../assets/background.png';

export default function HeroSection() {
    return (
        <section 
            className="relative min-h-[calc(100vh-90px)] flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="text-center text-white px-6">
                <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold mb-6">
                    CODEKING
                </h1>
                <p className="text-lg md:text-xl lg:text-3xl font-medium tracking-wider uppercase">
                    Tự tin - Sáng tạo - Hợp tác - Thực tiễn
                </p>
            </div>
        </section>
    );
}
