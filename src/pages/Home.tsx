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
import WaveDivider from "../components/WaveDivider";

const cream = "#f0ebe0";
const warmWhite = "#faf8f3";
const forest = "#2d5016";
const sage = "#d4e4cb";

export default function Home() {
	return (
		<>
			<HeroSection />
			<MissionSection />
			<WaveDivider topColor={sage} bottomColor={warmWhite} />
			<RecognitionSection />
			<WaveDivider topColor={warmWhite} bottomColor={cream} />
			<MemoryGame />
			<WaveDivider topColor={cream} bottomColor={sage} />
			<CommonMistakesSection />
			<WaveDivider topColor={sage} bottomColor={warmWhite} />
			<QASection />
			<WaveDivider topColor={warmWhite} bottomColor={cream} />
			<FAQSection />
			<WaveDivider topColor={cream} bottomColor={forest} />
			<CoursesSection />
			<WaveDivider topColor={forest} bottomColor={cream} />
			<ContactSection />
			<MapSection />
		</>
	);
}
