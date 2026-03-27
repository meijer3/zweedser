import { createSignal } from "solid-js";

export default function CoursesSection() {
	const [open, setOpen] = createSignal(false);

	return (
		<section id="cursussen" class="w-full bg-forest text-white">
			<div class="max-w-[800px] mx-auto px-4 py-16 text-center">
				<h2 class="text-3xl font-bold mb-2">Cursusaanbod</h2>
				<p class="text-white/60 mb-8">
					Online of in Skåne — kies wat bij jou past.
				</p>
				<button
					type="button"
					class="btn btn-lg bg-meadow border-meadow text-white hover:bg-meadow-light hover:border-meadow-light"
					onClick={() => setOpen(true)}
				>
					Bekijk cursussen
				</button>
			</div>

			{/* Modal */}
			<dialog class="modal" classList={{ "modal-open": open() }}>
				<div class="modal-box bg-white text-base-content max-w-lg">
					<h3 class="text-2xl font-bold text-forest mb-6">
						Cursusaanbod
					</h3>

					<div class="space-y-6">
						{/* Online privélessen */}
						<div class="card bg-meadow/10">
							<div class="card-body">
								<h4 class="card-title text-forest">
									Online privélessen
								</h4>
								<p class="text-sm">
									Leer Zweeds op jouw tempo met persoonlijke
									online lessen. Flexibel inplanbaar, op elk
									niveau.
								</p>
							</div>
						</div>

						{/* Dagcursussen in Skåne */}
						<div class="card bg-meadow/10">
							<div class="card-body">
								<h4 class="card-title text-forest">
									Dagcursussen in Skåne
								</h4>
								<p class="text-sm">
									Kom naar Zuid-Zweden voor een intensieve
									hele-dag cursus. Leer de taal én beleef de
									cultuur ter plekke.
								</p>
							</div>
						</div>
					</div>

					<div class="modal-action">
						<button
							type="button"
							class="btn"
							onClick={() => setOpen(false)}
						>
							Sluiten
						</button>
					</div>
				</div>
				<div
					class="modal-backdrop"
					onClick={() => setOpen(false)}
					onKeyDown={(e) => {
						if (e.key === "Escape") setOpen(false);
					}}
				/>
			</dialog>
		</section>
	);
}
