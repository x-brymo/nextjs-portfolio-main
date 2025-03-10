import { BsFillEnvelopeOpenFill, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export const SOCIAL_MEDIA = [
	{
		id: "linkedin",
		icon: <BsLinkedin />,
		title: "Visit LinkedIn profile",
		url: "https://www.linkedin.com/in/mahmoud-hafez-eltarqi-44b07a22a/"
	},
	{
		id: "github",
		icon: <BsGithub />,
		title: "Visit Github profile",
		url: "https://github.com/x-brymo"
	},
	{
		id: "mail",
		icon: <BsFillEnvelopeOpenFill />,
		title: "Send me an email",
		url: "mailto://xbrymo06@gmail.com"
	},
	{
		id: "Whatsapp",
		icon: <BsWhatsapp />,
		title: "Send me a message",
		url: "https://wa.me/201007944857"
	}
];
