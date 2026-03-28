import { For } from "solid-js";

const falseFriends = [
	{ word: "bil", nl: "Bil", sv: "Auto" },
	{ word: "bord", nl: "Bord", sv: "Tafel" },
	{ word: "dike", nl: "Dijk", sv: "Sloot of greppel" },
	{ word: "gift", nl: "Cadeau (of gif)", sv: "Getrouwd / gif" },
	{ word: "glass", nl: "Glas", sv: "IJsje" },
	{ word: "god", nl: "God", sv: "Goed" },
	{ word: "golv", nl: "Golf", sv: "Vloer" },
	{ word: "hav", nl: "Haven", sv: "Zee" },
	{ word: "orm", nl: "Worm", sv: "Slang" },
	{ word: "snor", nl: "Snor", sv: "Snottebel" },
	{ word: "snäll", nl: "Snel", sv: "Aardig, lief" },
	
	{ word: "kind", nl: "Kind", sv: "Wang" },
	{ word: "ful", nl: "Vuil", sv: "Lelijk" },

	{ word: "middag", nl: "Middag", sv: "Avondmaaltijd / diner" },
	{ word: "puss", nl: "Poes", sv: "Kus" },
	{ word: "stor", nl: "Stoer", sv: "Groot" },
	{ word: "tegel", nl: "Tegel", sv: "Baksteen" },
	{ word: "trött", nl: "Trut", sv: "Moe" },


	{ word: "handfat", nl: "Handvat", sv: "Wastafel" },
	{ word: "kvast", nl: "Kwast", sv: "Takje, twijgbezem" },
	{ word: "svimma", nl: "Zwemmen", sv: "Flauwvallen" },
	{ word: "vrede", nl: "Vrede", sv: "Woede, boosheid" },
	{ word: "våning", nl: "Woning", sv: "Verdieping / appartement" },
];

export default function FalsefriendsSection() {
	return (
		<section class="w-full bg-meadow/10">
			<div class="max-w-[800px] mx-auto px-4 py-16">
				<h2 class="text-3xl font-bold text-forest mb-2">Valse Vrienden</h2>
				<p class="text-base-content/60 mb-8">
					Nederlands en Zweeds delen dezelfde Germaanse roots en hebben
					zo'n 80% woordoverlap — dat maakt Zweeds een van de makkelijkste
					talen om te leren als Nederlandstalige. Maar pas op: sommige
					woorden lijken hetzelfde, maar betekenen iets heel anders. Dit
					zijn de bekendste valkuilen.
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
