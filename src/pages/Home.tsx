import AISection from "../components/AISection";
import ContactSection from "../components/ContactSection";
import CoursesSection from "../components/CoursesSection";
import FAQSection from "../components/FAQSection";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import MemoryGame from "../components/MemoryGame";
import MissionSection from "../components/MissionSection";
import QASection from "../components/QASection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<MissionSection />
			<MemoryGame />
			<QASection />
			<AISection />
			<FAQSection />
			<CoursesSection />
			<ContactSection />
			<MapSection />
		</>
	);
}
