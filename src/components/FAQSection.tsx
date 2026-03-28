import { For } from "solid-js";

const faqs = [
	{
		q: "Heb ik voorkennis van het Zweeds nodig?",
		a: "Nee, we werken op jouw eigen niveau. Of je nu helemaal opnieuw begint of al wat Zweeds spreekt — de lessen sluiten aan bij waar jij staat.",
	},
	{
		q: "Hoe zien de lessen eruit?",
		a: "We geven privélessen en lessen in kleine groepen, zodat er volop ruimte is voor persoonlijke aandacht en oefening.",
	},
	{
		q: "Voor wie zijn de cursussen bedoeld?",
		a: "Voor iedereen! Van studenten die in Zweden willen studeren tot mensen die na hun pensioen in Zweden wonen. Onze docent heeft zelf in Lund gestudeerd en woont al jaren in Skåne.",
	},
	{
		q: "Waar vinden de dagcursussen plaats?",
		a: "De dagcursussen worden gegeven in Skåne, Zuid-Zweden. De exacte locatie ontvang je na inschrijving.",
	},
	{
		q: "Kan ik ook online lessen volgen?",
		a: "Ja! We bieden online privélessen aan die je flexibel kunt inplannen op een moment dat jou uitkomt.",
	},
	{
		q: "Hoeveel kost een cursus?",
		a: "De prijzen variëren per cursustype. Neem contact met ons op voor een actueel overzicht.",
	},
	{
		q: "In welke taal wordt er lesgegeven?",
		a: "De lessen zijn in het Nederlands, met steeds meer Zweeds naarmate je vordert.",
	},
	{
		q: "Waarom vervangt AI geen docent?",
		a: "Een taal leren draait om meer dan woorden en grammatica. Het gaat om persoonlijk contact, nuance, en de cultuur achter de taal. Dat kan geen AI je bieden. Bij ons krijg je een echte docent die je kent, corrigeert en motiveert.",
	},
	{
		q: "Hoe zetten jullie AI in?",
		a: "AI is een geweldig hulpmiddel om leuke en interactieve oefeningen te maken. Denk aan woordspelletjes, quizzen en oefenmateriaal op maat. Zo combineren we het beste van twee werelden: technologie én persoonlijke begeleiding.",
	},
];

export default function FAQSection() {
	return (
		<section class="w-full bg-cream">
			<div class="max-w-[840px] mx-auto px-6 md:px-8 py-[6vw]">
				<h2 class="text-3xl font-bold text-forest mb-2">Veelgestelde vragen</h2>
				<p class="text-base-content/60 mb-8">
					Antwoorden op de meest gestelde vragen over onze cursussen.
				</p>
				<div class="space-y-3">
					<For each={faqs}>
						{(faq) => (
							<div class="collapse collapse-arrow bg-cream rounded-2xl overflow-hidden">
								<input type="radio" name="faq-accordion" />
								<div class="collapse-title font-semibold text-forest">
									{faq.q}
								</div>
								<div class="collapse-content text-sm text-base-content/70">
									<p>{faq.a}</p>
								</div>
							</div>
						)}
					</For>
				</div>
			</div>
		</section>
	);
}
