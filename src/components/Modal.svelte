<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import FaCircleNotch from 'svelte-icons/fa/FaCircleNotch.svelte';
	import FaTimes from 'svelte-icons/fa/FaTimes.svelte';

	import Button from './Button.svelte';

	import { apiUrl } from '../const';

	type FormState = 'idle' | 'submitting' | 'error' | 'success';
	interface Values {
		email: string;
		privacyPolicy: boolean;
	}
	type Errors = {
		[k in keyof Values]?: string;
	};

	const emailRegex =
		/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

	const dispatch = createEventDispatcher();
	function onOutClick() {
		dispatch('triggerModal', {});
	}

	const values: Values = { email: '', privacyPolicy: false };
	let errors: Errors = {};
	let formState: FormState = 'idle';

	function isEmailValid(): boolean {
		formState = 'idle';
		errors = { ...errors, email: undefined };

		if (!values.email) {
			errors.email = 'Votre email est obligatoire';
			formState = 'error';
		}
		if (!emailRegex.test(values.email)) {
			errors.email = "Format de l'adresse invalide";
			formState = 'error';
		}

		return formState !== 'error';
	}

	function isPrivacyPolicyValid(): boolean {
		formState = 'idle';
		errors = { ...errors, privacyPolicy: undefined };

		if (!values.privacyPolicy) {
			errors.privacyPolicy = 'Cette case est obligatoire';
			formState = 'error';
		}

		return formState !== 'error';
	}

	function isValid(): boolean {
		const emailValid = isEmailValid();
		const privacyPolicyValid = isPrivacyPolicyValid();
		return emailValid && privacyPolicyValid;
	}

	async function onSubmit() {
		formState = 'submitting';

		if (!isValid()) {
			return;
		}

		const res = await fetch(apiUrl + '/emails', {
			method: 'POST',
			body: JSON.stringify(values)
		});

		if (res.status !== 200) {
			formState = 'error';
		}

		formState = 'success';
	}
</script>

<div class="absolute inset-0 z-40 flex items-center justify-center">
	<section
		class="mx-auto max-w-4xl p-8 py-16 rounded-sm bg-sand-100 h-full overflow-auto sm:h-auto relative z-50 flex-1"
	>
		<div class="mx-auto max-w-xl">
			{#if formState === 'success'}
				<div>
					<h2 class="text-xl font-bold mb-4 sm:text-2xl sm:text-center">Merci de votre soutien</h2>
				</div>
			{:else}
				<form class="md:max-w-2xl mx-auto" on:submit|preventDefault={onSubmit}>
					<h2 class="text-xl font-bold mb-4 sm:text-2xl sm:text-center">Je suis un citoyen</h2>

					<p class="mb-8 text-sm sm:text-base sm:text-center">
						Le soutien des citoyens est la première étape pour l'introduction d'une taxe climatique
						en France et dans le monde.
						<br />
						Grace à votre email, nous allons pouvoir peser dans la balance lors de nos discussions avec
						des politiques en montrant le nombre de soutiens.
						<br />
						Nous allons occasionellement vous envoyer des newsletters. Pas de spam (promis!), et vous
						gardez la possibilité de vous désincrire à tout moment.
					</p>

					{#if formState === 'error' && Object.keys(errors).length === 0}
						<div
							class="border-2 text-red-700 border-red-700 px-4 py-3 rounded-sm mb-4 sm:mb-8"
							role="alert"
						>
							Une erreur à eu lieu. Veuillez réessayer plus tard.
						</div>
					{/if}

					<div class="text-center mb-10 flex flex-col justify-center">
						<label>
							<p class="block text-green-700 mr-8">Votre email</p>
							<input
								type="text"
								class="border-2 rounded-sm py-3 px-4 mb-4 bg-sand-100 w-3/5 {errors.email
									? 'border-red-700 mb-2'
									: 'border-green-700 mb-4'}"
								bind:value={values.email}
								on:blur={isEmailValid}
							/>

							{#if errors.email}
								<p class="text-red-500 text-s italic mb-3">{errors.email}</p>
							{/if}
						</label>

						<label>
							<input
								type="checkbox"
								class="border-2 rounded-sm py-3 px-4  bg-sand-100 {errors.privacyPolicy
									? 'border-red-700 mb-2'
									: 'border-green-700 mb-4'}"
								bind:checked={values.privacyPolicy}
								on:blur={isPrivacyPolicyValid}
							/>

							<p class="inline text-green-700 ml-8">
								J'ai lu et j'accepte
								<a class="underline" href="/privacy-policy" on:click={onOutClick}>
									la politique de confidentialité
								</a>
							</p>
						</label>

						{#if errors.privacyPolicy}
							<p class="text-red-500 text-s italic mb-3">{errors.privacyPolicy}</p>
						{/if}
					</div>

					<!-- TODO: fix animation -->
					{#if formState === 'submitting'}
						<div class="text-green-500 sm:flex sm:justify-center">
							<span class="w-8 h-8 animate-spin">
								<FaCircleNotch />
							</span>
						</div>
					{:else}
						<Button large classes="block mx-auto">Donner mon soutien</Button>
					{/if}
				</form>
			{/if}

			<hr class="m-10 divider" />

			<h2 class="text-xl font-bold mb-4 sm:text-2xl sm:text-center">
				Je représente une association
			</h2>
			<p class="mb-3 text-sm sm:text-base sm:mb-8 sm:text-center">
				Contactez nous à l'addresse ccl.fra.paris@gmail.com pour en discuter.
			</p>

			<button
				type="button"
				class="h-4 w-4 absolute top-0 right-0 cursor-pointer text-xl text-sand-700 hover:text-sand-800 transition ease-in-out duration-200 m-6 sm:m-8"
				on:click={onOutClick}
			>
				<FaTimes />
			</button>
		</div>
	</section>

	<div on:click={onOutClick} class="absolute inset-0 bg-green-900 opacity-50 cursor-pointer" />
</div>

<style>
	.divider {
		border-color: theme('colors.green.700');
	}
</style>
