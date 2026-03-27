export default function ContactSection() {
	return (
		<section class="w-full bg-cream">
			<div class="max-w-[800px] mx-auto px-4 py-16">
				<h2 class="text-3xl font-bold text-forest mb-2">Contact</h2>
				<p class="text-base-content/60 mb-8">
					Vragen over onze cursussen? Neem gerust contact op.
				</p>
				<form class="space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Naam</span>
						</div>
						<input
							type="text"
							placeholder="Je naam"
							class="input input-bordered w-full"
						/>
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">E-mail</span>
						</div>
						<input
							type="email"
							placeholder="je@email.nl"
							class="input input-bordered w-full"
						/>
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Bericht</span>
						</div>
						<textarea
							placeholder="Schrijf je bericht..."
							class="textarea textarea-bordered w-full h-32"
						/>
					</label>
					<button
						type="submit"
						class="btn bg-forest border-forest text-white hover:bg-forest-light hover:border-forest-light"
					>
						Verstuur
					</button>
				</form>
			</div>
		</section>
	);
}
