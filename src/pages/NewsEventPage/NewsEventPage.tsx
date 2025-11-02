import NewsHeroSection from './components/NewsHeroSection';
import SpecialNewsSection from './components/SpecialNewsSection';
import EventsSection from './components/EventsSection';
import NewsSection from './components/NewsSection';

export default function NewsEventPage() {
    return (
        <div>
            <NewsHeroSection />
            <SpecialNewsSection />
            <EventsSection />
            <NewsSection />
        </div>
    );
}
