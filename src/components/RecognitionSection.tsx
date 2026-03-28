import type { IconTypes } from "solid-icons";
import {
	FiBookOpen,
	FiBriefcase,
	FiHeart,
	FiHome,
	FiMessageCircle,
} from "solid-icons/fi";
import { For } from "solid-js";
import { Dynamic } from "solid-js/web";

const herkenningen: { icon: IconTypes | string; text: string }[] = [
	{
		icon: FiHome,
		text: "Je bent verhuisd naar Zweden en wilt je buren eindelijk echt verstaan",
	},
	{
		icon: FiBriefcase,
		text: "Je werkt in een Zweeds team en merkt dat Engels alleen niet meer genoeg is",
	},
	{
		icon: FiHeart,
		text: "Je partner is Zweeds en je wilt de familie niet meer in het Engels toespreken",
	},
	{
		icon: FiBookOpen,
		text: "Je volgt SFI maar mist uitleg in je eigen taal",
	},
	{
		icon: "🇸🇪",
		text: "Je droomt van een leven in Zweden en wilt alvast de taal leren",
	},
	{
		icon: FiMessageCircle,
		text: "Je spreekt al wat Zweeds maar wilt het echt goed doen",
	},
];

export default function RecognitionSection() {
	return (
		<section class="w-full bg-warm-white">
			<div class="max-w-[840px] mx-auto px-6 md:px-8 py-[6vw]">
				<h2 class="text-3xl font-bold text-forest mb-2">Herken je dit?</h2>
				<p class="text-base-content/60 mb-8">
					Zweeds leren als Nederlandstalige is makkelijker dan je denkt — maar
					je hebt wel de juiste begeleiding nodig. Onze cursussen zijn speciaal
					ontworpen voor mensen zoals jij.
				</p>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
					<For each={herkenningen}>
						{(item) => (
							<div class="flex items-start gap-3 bg-white rounded-3xl p-6 border border-forest/5">
								{typeof item.icon === "string" ? (
									<span class="text-2xl">{item.icon}</span>
								) : (
									<Dynamic
										component={item.icon}
										size={24}
										class="text-forest shrink-0"
									/>
								)}
								<p class="text-forest-light">{item.text}</p>
							</div>
						)}
					</For>
				</div>
			</div>
		</section>
	);
}
