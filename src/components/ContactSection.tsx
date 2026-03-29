import { createSignal } from "solid-js";

export default function ContactSection() {
	const [status, setStatus] = createSignal<"idle" | "sending" | "success" | "error">("idle");

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		setStatus("sending");

		const form = e.currentTarget as HTMLFormElement;
		const data = new FormData(form);
		data.append("access_key", "e209cb43-5972-4fdb-9129-89f420f3a512");

		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: data,
			});
			if (res.ok) {
				setStatus("success");
				form.reset();
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	}

	return (
		<section class="w-full bg-cream">
			<div class="max-w-[840px] mx-auto px-6 md:px-8 py-[6vw]">
				<h2 class="text-3xl font-bold text-forest mb-2">Contact</h2>
				<p class="text-base-content/60 mb-8">
					Vragen over onze cursussen? Neem gerust contact op.
				</p>
				<form class="space-y-4 max-w-md" onSubmit={handleSubmit}>
					<input type="hidden" name="subject" value="Nieuw bericht via zweedser.nl" />
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Naam</span>
						</div>
						<input
							type="text"
							name="name"
							required
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
							name="email"
							required
							placeholder="je@email.nl"
							class="input input-bordered w-full"
						/>
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Bericht</span>
						</div>
						<textarea
							name="message"
							required
							placeholder="Schrijf je bericht..."
							class="textarea textarea-bordered w-full h-32"
						/>
					</label>
					<button
						type="submit"
						disabled={status() === "sending"}
						class="btn bg-forest border-forest text-white hover:bg-forest-light hover:border-forest-light mt-4"
					>
						{status() === "sending" ? "Verzenden..." : "Verstuur"}
					</button>
					{status() === "success" && (
						<p class="text-green-600 font-medium">Bericht verstuurd! We nemen snel contact op.</p>
					)}
					{status() === "error" && (
						<p class="text-red-600 font-medium">Er ging iets mis. Probeer het opnieuw.</p>
					)}
				</form>
			</div>
		</section>
	);
}
