import background from '../../assets/background.png';

export default function Footer() {
    return (
        <footer 
            className="text-white py-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="text-center">
                        <p className="text-xl font-bold">© 2025 CODEKING</p>
                    </div>

                    <div className="text-center">
                        <p className="text-[#F5F5F5] font-medium uppercase tracking-wide">
                            TỰ TIN – SÁNG TẠO – HỢP TÁC – THỰC TIỄN
                        </p>
                    </div>

                    <div className="flex items-center gap-6 text-[#F5F5F5]">
                        <a 
                            href="mailto:contact@codeking.club" 
                            className="flex items-center gap-2 hover:text-[#CD2960] transition-colors"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2"/>
                                <path d="M3 7l9 6 9-6" strokeWidth="2"/>
                            </svg>
                            contact@codeking.club
                        </a>
                        <span className="text-[#CD2960]">|</span>
                        <a 
                            href="https://codeking.vn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-[#CD2960] transition-colors"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2"/>
                            </svg>
                            codeking.vn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
