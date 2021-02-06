import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
import FaFacebookSquare from "svelte-icons/fa/FaFacebookSquare.svelte";
import FaTwitterSquare from "svelte-icons/fa/FaTwitterSquare.svelte";
import FaEnvelope from "svelte-icons/fa/FaEnvelope.svelte";

export const siteUrl = "https://lemeilleurplanclimatdumonde.fr";
//export const apiUrl = "https://api.lemeilleurplanclimatdumonde.fr";
export const apiUrl = "http://localhost:1337"; // TODO store in env?

export const pages = [
  ["/", "Accueil"],
  ["/supporters", "Ils nous soutiennent"],
  ["/the-plan", "Le plan"],
  ["/faq", "Des questions ?"],
];

export const shareButtons = [
  {
    href: "https://www.linkedin.com/shareArticle?mini=true&url=",
    icon: FaLinkedin,
    text: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/sharer.php?u=",
    icon: FaFacebookSquare,
    text: "Facebook",
  },
  {
    href:
      "https://twitter.com/share?url=%s&text=Un%20revenu%20climatique%20socialement%20juste,%20",
    icon: FaTwitterSquare,
    text: "Twitter",
  },
  {
    href:
      "mailto:??subject=Proposition citoyenne climatique&body=Bonjour,%0D%0A%0D%0AJe t'invite a regarder cette proposition citoyenne : ",
    icon: FaEnvelope,
    text: "E-mail",
  },
];
