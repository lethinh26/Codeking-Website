import Banner from './components/Banner';
import NewsPost from './components/NewsPost';
import AllPost from './components/AllPost';

export default function BlogPage() {
    return (
        <div className="bg-[#D9D9D9] pb-30">
            <Banner />
            <NewsPost />
            <AllPost />
        </div>
    );
}
