import type { IconTypes } from "solid-icons";
import {
	FiBookOpen,
	FiBriefcase,
	FiHeart,
	FiHome,
	FiMessageCircle,
} from "solid-icons/fi";
import type { JSX } from "solid-js";
import { For } from "solid-js";
import { Dynamic } from "solid-js/web";

const herkenningen: { icon: IconTypes | string; text: JSX.Element }[] = [
	{
		icon: "🇸🇪",
		text: <>Je <b class="font-semibold text-forest">droomt</b> van een leven in Zweden en wilt alvast de taal leren</>,
	},
	{
		icon: FiHome,
		text: <>Je gaat emigreren en wilt een <b class="font-semibold text-forest">vliegende start</b> met de taal</>,
	},
	{
		icon: FiBookOpen,
		text: <>Je volgt SFI maar mist uitleg in je <b class="font-semibold text-forest">eigen taal</b></>,
	},
	{
		icon: FiBriefcase,
		text: <>Je werkt in een Zweeds team en merkt dat Engels alleen <b class="font-semibold text-forest">niet meer genoeg</b> is</>,
	},
	{
		icon: FiHeart,
		text: <>Je partner is Zweeds en je wilt de <b class="font-semibold text-forest">familie</b> niet meer in het Engels toespreken</>,
	},
	{
		icon: FiMessageCircle,
		text: <>Je spreekt al wat Zweeds maar wilt <b class="font-semibold text-forest">niet meer opvallen</b></>,
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
