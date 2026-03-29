import { FiCheck, FiX } from "solid-icons/fi";
import { For } from "solid-js";

const mistakes: {
  wrong?: string;
  right?: string;
  title?: string;
  explanation: string;
  category: string;
}[] = [
  {
    wrong: "Hur heter du?",
    right: "Vad heter du?",
    explanation:
      'In het Nederlands zeg je "hoe heet je", maar in het Zweeds gebruik je "vad" (wat), niet "hur" (hoe).',
    category: "woordkeuze",
  },
  {
    wrong: "mögligt",
    right: "möjligt",
    explanation:
      '"Möglig" betekent schimmelig! "Möjlig" betekent mogelijk. Eén letter verschil, heel andere betekenis.',
    category: "valse vriend",
  },
  // {
  // 	title: "sju (7) vs tjugo (20)",
  // 	explanation:
  // 		"Voor Nederlanders klinken 7 en 20 bijna hetzelfde. Let op: sju heeft een kort sj-geluid, tjugo begint met een tj-klank.",
  // 	category: "uitspraak",
  // },
  {
    wrong: "Jag vill <u>inte</u> ha kaffe",
    right: "Jag vill inte ha <u>kaffe</u>",
    explanation:
      'In het Zweeds benadruk je het woord waar de betekenis zit, niet de negatie. "Inte" is onbeklemtoond — de klemtoon ligt op wat je wél of níet wilt.',
    category: "klemtoon",
  },
  {
    title: "W, niet V",
    explanation:
      'In het Zweeds klinkt de V als een W. Viking wordt "wiking", var klinkt als "war", vän als "wän". Nederlanders spreken de V als een F uit',
    category: "uitspraak",
  },
  {
    wrong: "sta<u>t</u>",
    right: "sta<u>d</u>",
    explanation:
      "Nederlanders verstemlozen de D aan het eind en klinkt het als een T (inderdaad!). Een stad: staD (en geen stat)",
    category: "uitspraak",
  },
  {
    wrong: "Jag vet att han kommer inte",
    right: "Jag vet att han inte kommer",
    explanation:
      'In bijzinnen (na att, om, när, etc.) staat "inte" vóór het werkwoord — anders dan in een gewone zin.',
    category: "grammatica",
  },
];

export default function CommonMistakesSection() {
  return (
    <section class="w-full bg-sage">
      <div class="max-w-[840px] mx-auto px-6 md:px-8 py-[6vw]">
        <h2 class="text-3xl font-bold text-forest mb-2">Veelgemaakte fouten</h2>
        <p class="text-base-content/60 mb-8">
          Als Nederlandstalige heb je een enorme voorsprong bij het leren van
          Zweeds. Maar juist die gelijkenis zorgt voor typische valkuilen.
          Herken je deze fouten?
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <For
            each={[
              ...mistakes.filter((m) => m.title),
              ...mistakes.filter((m) => m.wrong && m.right),
            ]}
          >
            {(item) => (
              <div class="card bg-white rounded-3xl border border-forest/5">
                <div class="card-body p-6">
                  <div class="flex items-start justify-between gap-2">
                    {item.wrong && item.right ? (
                      <div class="space-y-1 flex-1">
                        <div class="flex items-center gap-2 text-forest/40 line-through">
                          <FiX size={18} />
                          <span
                            class="font-mono text-sm"
                            innerHTML={item.wrong}
                          />
                        </div>
                        <div class="flex items-center gap-2 text-forest">
                          <FiCheck size={18} />
                          <span
                            class="font-mono text-sm font-semibold"
                            innerHTML={item.right}
                          />
                        </div>
                      </div>
                    ) : (
                      <h3 class="text-lg font-bold text-forest flex-1">
                        {item.title}
                      </h3>
                    )}
                    <span class="badge badge-sm bg-meadow/15 text-forest-light border-0 text-xs">
                      {item.category}
                    </span>
                  </div>
                  <p class="text-sm text-base-content/70 mt-2">
                    {item.explanation}
                  </p>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
