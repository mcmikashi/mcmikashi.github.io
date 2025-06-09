<script lang="ts">
	import {
		PUBLIC_EMAILJS_PUBLIC_KEY,
		PUBLIC_EMAILJS_SERVER_ID,
		PUBLIC_EMAILJS_TEMPLATE_ID
	} from '$env/static/public';
	import { send } from '@emailjs/browser';
	import { BadgeCheck, BadgeX } from '@lucide/svelte';
	import { slide } from 'svelte/transition';
	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let formResult = $state<boolean | null>(null);
    
	function onsubmit(event: SubmitEvent) {
		event.preventDefault();
		var templateParams = {
			name: name,
			email: email,
			subject: subject,
			message: message
		};
		send(PUBLIC_EMAILJS_SERVER_ID, PUBLIC_EMAILJS_TEMPLATE_ID, templateParams, {
			publicKey: PUBLIC_EMAILJS_PUBLIC_KEY
		}).then(
			function (response) {
				formResult = true;
				const form = event.target as HTMLFormElement;
				form.reset();
			},
			function (err) {
				formResult = false;
			}
		);
	}

	$effect(() => {
		if (formResult != null) {
			setTimeout(() => {
				formResult = null;
			}, 10000);
		}
	});
</script>

<section class="hero" id="contact">
	<div class="hero-content text-center">
		<div>
			<h3 class="mb-4 text-2xl font-extrabold">Contact</h3>
			{#if formResult === true}
				<div role="alert" class="alert alert-success my-2" transition:slide>
					<BadgeCheck />
					<span>Votre message a bien été envoyé. Merci !</span>
				</div>
			{:else if formResult === false}
				<div role="alert" class="alert alert-error my-2">
					<BadgeX />
					<span>Une erreur est survenue. Veuillez réessayer plus tard.</span>
				</div>
			{/if}
			<form {onsubmit}>
				<fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-8">
					<label class="label" for="name-input">Nom *</label>
					<input
						type="text"
						class="input validator"
						placeholder="Jean Dupont"
						id="name-input"
						required
						bind:value={name}
					/>

					<label class="label" for="input-email">E-mail *</label>
					<input
						type="email"
						class="input validator"
						placeholder="contact@jeandupont.com"
						id="input-email"
						required
						bind:value={email}
					/>

					<label class="label" for="input-subject">Objet *</label>
					<input
						type="text"
						class="input validator"
						placeholder="Demande de collaboration, question, etc."
						id="input-subject"
						required
						bind:value={subject}
					/>

					<label class="label" for="textarea-message">Message *</label>
					<textarea
						class="textarea validator h-24"
						placeholder="Expliquez-moi votre besoin, votre idée ou votre projet en quelques lignes..."
						id="textarea-message"
						required
						bind:value={message}
					>
					</textarea>
					<button class="btn btn-neutral btn-block mt-2" type="submit">Envoyer</button>
				</fieldset>
			</form>
		</div>
	</div>
</section>

<style lang="postcss">
	@reference "tailwindcss";
	:global(input, textarea) {
		@apply w-sm;
	}
</style>
