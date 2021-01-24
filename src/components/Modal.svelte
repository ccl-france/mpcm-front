<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Sveltik, Form } from "sveltik";
  import FaCircleNotch from "svelte-icons/fa/FaCircleNotch.svelte";
  import FaTimes from "svelte-icons/fa/FaTimes.svelte";

  import FormField from "./FormField.svelte";
  import Button from "./Button.svelte";

  import { apiUrl } from "../const";

  interface Values {
    email: string;
  }

  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const initialValues: Values = { email: "" };
  const dispatch = createEventDispatcher();
  let state = {
    hasSubmitted: false,
    hasFormError: false,
  };

  function onOutClick() {
    dispatch("triggerModal", {});
  }

  function validateForm(values: Values) {
    const errors: Partial<Values> = {};

    if (!values.email) {
      errors.email = "Votre email est obligatoire";
    }

    if (!emailRegex.test(values.email)) {
      errors.email = "Format de l'adresse invalide";
    }

    return errors;
  }

  async function onSubmit(values: Values, { setSubmitting }) {
    state = { hasSubmitted: false, hasFormError: false };

    const res = await fetch(apiUrl + "/emails", {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (res.status !== 200) {
      state = { hasSubmitted: true, hasFormError: true };
    } else {
      state = { hasSubmitted: true, hasFormError: false };
    }

    setSubmitting(false);
  }

  $: console.log(state);
</script>

<style>
  .divider {
    border-color: theme("colors.green.700");
  }
</style>

<div class="fixed inset-0 z-40 flex items-center justify-center">
  <section
    class="mx-auto max-w-4xl p-8 py-16 rounded-sm bg-sand-100 h-full overflow-auto sm:h-auto relative z-50 flex-1">
    <div class="mx-auto max-w-lg">
      {#if state.hasSubmitted && !state.hasFormError}
        <div>
          <h2 class="text-xl font-bold mb-4 sm:text-2xl sm:text-center">
            Merci de votre soutien
          </h2>
        </div>
      {:else}
        <Sveltik
          {initialValues}
          validate={validateForm}
          {onSubmit}
          let:isSubmitting>
          <Form class="md:max-w-2xl mx-auto">
            <h2 class="text-xl font-bold mb-4 sm:text-2xl sm:text-center">
              Je suis un citoyen
            </h2>

            <p class="mb-8 text-sm sm:text-base sm:text-center">
              Le soutien des citoyens est la première étape pour l'introduction
              d'une taxe climatique en France et dans le monde. Montrez votre
              soutien publiquement pour aider les politiques à prendre
              conscience de l'ampleur de cette demande.
            </p>

            {#if state.hasFormError}
              <div
                class="border-2 text-red-700 border-red-700 px-4 py-3 rounded-sm mb-4 sm:mb-8"
                role="alert">
                Une erreur à eu lieu. Veuillez réessayer plus tard.
              </div>
            {/if}

            <div class="text-center mb-10">
              <FormField
                classes="w-full sm:w-1/2 sm:mx-2"
                name="email"
                label="Votre email" />
            </div>

            {#if isSubmitting}
              <div class="text-green-500 sm:flex sm:justify-center">
                <span
                  class="w-8 h-8"
                  style="animation: spin 1s infinite ease-in-out;">
                  <FaCircleNotch />
                </span>
              </div>
            {:else}
              <Button large classes="block mx-auto">Donner mon soutien</Button>
            {/if}
          </Form>
        </Sveltik>
      {/if}

      <hr class="m-10 divider" />

      <h2 class="text-xl font-bold mb-4 sm:text-2xl sm:text-center">
        Je représente une association
      </h2>
      <p class="mb-3 text-sm sm:text-base sm:mb-8 sm:text-center">
        Contactez nous à l'addresse lemeilleurplanclimatdumonde@gmail.com pour
        en discuter.
      </p>

      <button
        type="button"
        class="h-4 w-4 absolute top-0 right-0 cursor-pointer text-xl text-sand-700 hover:text-sand-800 transition ease-in-out duration-200 m-6 sm:m-8"
        on:click={onOutClick}>
        <FaTimes />
      </button>
    </div>
  </section>

  <div
    on:click={onOutClick}
    class="absolute inset-0 bg-green-900 opacity-50 cursor-pointer" />
</div>
