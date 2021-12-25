import { dev } from '$app/env';
import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
import FaRegEnvelope from 'svelte-icons/fa/FaRegEnvelope.svelte';

export const siteUrl = 'https://lemeilleurplanclimatdumonde.fr';

export let apiUrl = 'https://api.lemeilleurplanclimatdumonde.fr';
if (dev) {
	apiUrl = 'http://localhost:1337';
}

export const pages = [
	['/', 'Accueil'],
	['/supporters', 'Ils nous soutiennent'],
	// ["/the-plan", "Le plan"],
	['/faq', 'Des questions ?']
];

export const shareButtons = [
	{
		href: 'https://www.linkedin.com/shareArticle?mini=true&url=',
		icon: FaLinkedinIn,
		text: 'LinkedIn'
	},
	{
		href: 'https://www.facebook.com/sharer.php?u=',
		icon: FaFacebook,
		text: 'Facebook'
	},
	{
		href: 'https://twitter.com/share?url=%s&text=Un%20revenu%20climatique%20socialement%20juste,%20',
		icon: FaTwitter,
		text: 'Twitter'
	},
	{
		href: "mailto:??subject=Proposition citoyenne climatique&body=Bonjour,%0D%0A%0D%0AJe t'invite a regarder cette proposition citoyenne : ",
		icon: FaRegEnvelope,
		text: 'E-mail'
	}
];
