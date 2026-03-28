import { For } from "solid-js";

const herkenningen = [
	{
		icon: "🏡",
		text: "Je bent verhuisd naar Zweden en wilt je buren eindelijk echt verstaan",
	},
	{
		icon: "💼",
		text: "Je werkt in een Zweeds team en merkt dat Engels alleen niet meer genoeg is",
	},
	{
		icon: "❤️",
		text: "Je partner is Zweeds en je wilt de familie niet meer in het Engels toespreken",
	},
	{
		icon: "🎓",
		text: "Je volgt SFI maar mist uitleg in je eigen taal",
	},
	{
		icon: "🇸🇪",
		text: "Je droomt van een leven in Zweden en wilt alvast de taal leren",
	},
	{
		icon: "🗣️",
		text: "Je spreekt al wat Zweeds maar wilt het echt goed doen",
	},
];

export default function RecognitionSection() {
	return (
		<section class="w-full bg-cream">
			<div class="max-w-[800px] mx-auto px-4 py-16">
				<h2 class="text-3xl font-bold text-forest mb-2">
					Herken je dit?
				</h2>
				<p class="text-base-content/60 mb-8">
					Zweeds leren als Nederlandstalige is makkelijker dan je denkt — maar
					je hebt wel de juiste begeleiding nodig. Onze cursussen zijn speciaal
					ontworpen voor mensen zoals jij.
				</p>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<For each={herkenningen}>
						{(item) => (
							<div class="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
								<span class="text-2xl">{item.icon}</span>
								<p class="text-forest-light">{item.text}</p>
							</div>
						)}
					</For>
				</div>
			</div>
		</section>
	);
}
