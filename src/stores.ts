import { writable } from "svelte/store";

export const isLoadingModal = writable<Boolean>(false);
