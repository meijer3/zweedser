import AISection from "../components/AISection";
import CommonMistakesSection from "../components/CommonMistakesSection";
import ContactSection from "../components/ContactSection";
import CoursesSection from "../components/CoursesSection";
import FAQSection from "../components/FAQSection";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";
import MemoryGame from "../components/MemoryGame";
import MissionSection from "../components/MissionSection";
import QASection from "../components/QASection";
import RecognitionSection from "../components/RecognitionSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<MissionSection />
			<RecognitionSection />
			<MemoryGame />
			<CommonMistakesSection />
			<QASection />
			<AISection />
			<FAQSection />
			<CoursesSection />
			<ContactSection />
			<MapSection />
		</>
	);
}
