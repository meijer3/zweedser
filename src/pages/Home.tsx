import ContactSection from "../components/ContactSection";
import CoursesSection from "../components/CoursesSection";
import FalsefriendsSection from "../components/FalsefriendsSection";
import HeroSection from "../components/HeroSection";
import MapSection from "../components/MapSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<FalsefriendsSection />
			<MapSection />
			<CoursesSection />
			<ContactSection />
		</>
	);
}
