import { For } from "solid-js";

const falseFriends = [
	{
		word: "bok",
		nl: "Geit",
		sv: "Boek",
	},
	{
		word: "rolig",
		nl: "Rustig / kalm",
		sv: "Grappig / leuk",
	},
	{
		word: "semester",
		nl: "Schoolperiode",
		sv: "Vakantie",
	},
	{
		word: "glass",
		nl: "Glas",
		sv: "IJsje",
	},
	{
		word: "rar",
		nl: "Raar / vreemd",
		sv: "Grappig",
	},
	{
		word: "gift",
		nl: "Cadeau (of gif)",
		sv: "Getrouwd / gif",
	},
];

export default function FalsefriendsSection() {
	return (
		<section class="w-full bg-meadow/10">
			<div class="max-w-[800px] mx-auto px-4 py-16">
				<h2 class="text-3xl font-bold text-forest mb-2">Valse Vrienden</h2>
				<p class="text-base-content/60 mb-8">
					Woorden die hetzelfde lijken, maar iets heel anders betekenen.
				</p>
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					<For each={falseFriends}>
						{(item) => (
							<div class="card bg-white shadow-sm">
								<div class="card-body p-4">
									<h3 class="text-xl font-bold text-forest">{item.word}</h3>
									<div class="text-sm space-y-1">
										<p>
											<span class="font-semibold">🇳🇱 NL:</span> {item.nl}
										</p>
										<p>
											<span class="font-semibold">🇸🇪 SV:</span> {item.sv}
										</p>
									</div>
								</div>
							</div>
						)}
					</For>
				</div>
			</div>
		</section>
	);
}
