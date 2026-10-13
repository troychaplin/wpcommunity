// MOCK DATA for development: homepage updates, FAQ, Slack preview and features. Replace with
// real content before launch. French copy is a draft that needs a native speaker's review.
import type { FaqGroup, Feature, Localized, Province, SlackMessage, Update } from './types';

export const slackMemberCount = 2400;

// PLACEHOLDER: WordPress's own Slack sign-up page until WP Canada has an invite link
export const slackInviteUrl = 'https://make.wordpress.org/chat/';

export const totalUpdates = 38;

export const updates: Update[] = [
    {
        date: '2026-09-12',
        category: 'event',
        title: {
            en: 'WordPress Toronto hosts Full Site Editing workshop',
            fr: "WordPress Toronto organise un atelier sur l'édition complète du site",
        },
        excerpt: {
            en: "Last week's hands-on session walked members through block themes, template editing, and the style engine. Slides and recording now available on the meetup page.",
            fr: "L'atelier pratique de la semaine dernière a présenté les thèmes de blocs, l'édition des modèles et le moteur de styles. Les diapositives et l'enregistrement sont maintenant sur la page Meetup.",
        },
        linkText: { en: 'Read recap', fr: 'Lire le compte rendu' },
        href: '/groups/toronto',
    },
    {
        date: '2026-09-05',
        category: 'announcement',
        title: {
            en: 'WordCamp Canada 2027 organizer applications now open',
            fr: 'Les candidatures pour organiser WordCamp Canada 2027 sont ouvertes',
        },
        excerpt: {
            en: 'Want to bring WordCamp to your city? The organizing team is actively looking for volunteers across three potential host cities. Apply through the official WordCamp Central site.',
            fr: "Vous voulez accueillir WordCamp dans votre ville? L'équipe recherche activement des bénévoles dans trois villes hôtes potentielles. Postulez sur le site officiel WordCamp Central.",
        },
        linkText: { en: 'Learn more', fr: 'En savoir plus' },
        href: 'https://central.wordcamp.org/',
    },
    {
        date: '2026-08-28',
        category: 'resource',
        title: {
            en: 'New bilingual welcome guide added to community resources',
            fr: "Nouveau guide d'accueil bilingue dans les ressources communautaires",
        },
        excerpt: {
            en: "We've published a revised getting-started guide in both English and French. It covers finding local meetups, joining Slack, and attending your first WordCamp.",
            fr: 'Nous avons publié un guide de démarrage révisé en anglais et en français. Il explique comment trouver une rencontre locale, rejoindre Slack et participer à votre premier WordCamp.',
        },
        linkText: { en: 'Download guide', fr: 'Télécharger le guide' },
        href: '/#new-here',
    },
    {
        date: '2026-08-19',
        category: 'community',
        title: {
            en: 'WP Canada crosses 2,400 members on Slack',
            fr: 'WP Canada dépasse les 2 400 membres sur Slack',
        },
        excerpt: {
            en: 'The national Slack workspace continues to grow, adding 80 new members this month alone. Thank you to everyone who helps make the community so welcoming.',
            fr: "L'espace Slack national continue de grandir, avec 80 nouveaux membres ce mois-ci seulement. Merci à toutes les personnes qui rendent la communauté si accueillante.",
        },
        linkText: { en: 'Join Slack', fr: 'Rejoindre Slack' },
        href: '/#slack',
    },
];

export const faq: FaqGroup[] = [
    {
        label: { en: 'Getting started', fr: 'Premiers pas' },
        items: [
            {
                question: {
                    en: 'Do I need to be a developer to attend meetups?',
                    fr: 'Faut-il être développeur pour participer aux rencontres?',
                },
                answer: {
                    en: 'Not at all. Meetups welcome designers, writers, site owners, marketers, and anyone curious about WordPress.',
                    fr: 'Pas du tout. Les rencontres accueillent designers, rédacteurs, propriétaires de sites, spécialistes du marketing et toute personne curieuse de WordPress.',
                },
            },
            {
                question: { en: 'Are meetups free to attend?', fr: 'Les rencontres sont-elles gratuites?' },
                answer: {
                    en: 'Almost always. Some workshops ask for a small fee to cover the venue, and the group will say so on its Meetup page.',
                    fr: "Presque toujours. Certains ateliers demandent une petite contribution pour la salle; le groupe l'indique alors sur sa page Meetup.",
                },
            },
            {
                question: {
                    en: 'How do I find out when the next event is?',
                    fr: 'Comment savoir quand aura lieu la prochaine rencontre?',
                },
                answer: {
                    en: "Each group lists its events on its Meetup.com page and announces them in its Slack channel.",
                    fr: 'Chaque groupe publie ses événements sur sa page Meetup.com et les annonce dans son canal Slack.',
                },
            },
        ],
    },
    {
        label: { en: 'Slack and online community', fr: 'Slack et communauté en ligne' },
        items: [
            {
                question: { en: 'How do I join the WP Canada Slack?', fr: 'Comment rejoindre le Slack WP Canada?' },
                answer: {
                    en: 'Request an invite from the Slack section of the homepage. Invites usually arrive within a day.',
                    fr: "Demandez une invitation dans la section Slack de la page d'accueil. Elle arrive habituellement en moins d'une journée.",
                },
            },
            {
                question: { en: 'Is the Slack group bilingual?', fr: 'Le Slack est-il bilingue?' },
                answer: {
                    en: 'Yes. Channels run in English and French, and many members are comfortable in both.',
                    fr: "Oui. Les canaux fonctionnent en anglais et en français, et bien des membres sont à l'aise dans les deux langues.",
                },
            },
            {
                question: {
                    en: 'Can I post job listings or service offers in Slack?',
                    fr: "Puis-je publier des offres d'emploi ou de services dans Slack?",
                },
                answer: {
                    en: 'Yes, in the dedicated jobs channel. Please keep promotional posts out of the general and regional channels.',
                    fr: "Oui, dans le canal réservé aux emplois. Merci de garder les messages promotionnels hors des canaux généraux et régionaux.",
                },
            },
        ],
    },
];

export const slackChannel = 'wp-canada-general';

export const slackMessages: SlackMessage[] = [
    {
        author: 'Sophie L.',
        time: { en: 'Today, 9:14 AM', fr: "Aujourd'hui, 9 h 14" },
        text: 'Anyone heading to WordCamp Canada this year? Looking for a Montréal carpool from Ottawa.',
    },
    {
        author: 'Raj K.',
        time: { en: 'Today, 9:31 AM', fr: "Aujourd'hui, 9 h 31" },
        text: 'Great FSE talk last night in Toronto. Slides are on the meetup page now if you missed it!',
    },
    {
        author: 'Marie-Ange',
        time: { en: 'Today, 10:02 AM', fr: "Aujourd'hui, 10 h 02" },
        text: 'Notre groupe Montréal cherche un animateur bénévole pour novembre. Faites-moi signe!',
    },
];

export const slackStats: { value: Localized; label: Localized }[] = [
    { value: { en: '2,400+', fr: '2 400+' }, label: { en: 'members', fr: 'membres' } },
    { value: { en: '18', fr: '18' }, label: { en: 'channels', fr: 'canaux' } },
    { value: { en: 'bilingual', fr: 'bilingue' }, label: { en: 'en & fr', fr: 'en et fr' } },
];

export const features: Feature[] = [
    {
        icon: 'map-pin',
        title: { en: 'Find your meetup', fr: 'Trouver votre rencontre' },
        text: {
            en: 'Browse 23 active local groups organized by province. Most groups welcome all skill levels and backgrounds.',
            fr: 'Parcourez 23 groupes locaux actifs, classés par province. La plupart accueillent tous les niveaux et tous les profils.',
        },
        linkText: { en: 'Browse groups', fr: 'Parcourir les groupes' },
        href: '/groups',
    },
    {
        icon: 'messages-square',
        title: { en: 'Join Slack', fr: 'Rejoindre Slack' },
        text: {
            en: 'Connect with 2,400+ Canadian WordPress people between events. Channels for help, hiring, and regional chat.',
            fr: "Échangez avec plus de 2 400 personnes de la communauté WordPress canadienne entre les rencontres. Des canaux pour l'entraide, l'emploi et les régions.",
        },
        linkText: { en: 'Get an invite', fr: 'Obtenir une invitation' },
        href: '/#slack',
    },
    {
        icon: 'circle-plus',
        title: { en: 'Organize a group', fr: 'Organiser un groupe' },
        text: {
            en: "Don't see your city listed? Submit your group and we'll help you get set up with resources and support.",
            fr: 'Votre ville ne figure pas dans la liste? Proposez votre groupe et nous vous aiderons à démarrer avec des ressources et du soutien.',
        },
        linkText: { en: 'Submit a group', fr: 'Proposer un groupe' },
        href: '/#start-a-group',
    },
    {
        icon: 'star',
        title: { en: 'Attend a WordCamp', fr: 'Participer à un WordCamp' },
        text: {
            en: 'WordCamps are official, volunteer-run WordPress conferences. Canada hosts several every year across provinces.',
            fr: 'Les WordCamps sont des conférences WordPress officielles organisées par des bénévoles. Le Canada en accueille plusieurs chaque année.',
        },
        linkText: { en: 'Find a WordCamp', fr: 'Trouver un WordCamp' },
        href: 'https://central.wordcamp.org/schedule/',
    },
];

export const provinces: Province[] = [
    { code: 'AB', name: { en: 'Alberta', fr: 'Alberta' } },
    { code: 'BC', name: { en: 'British Columbia', fr: 'Colombie-Britannique' } },
    { code: 'MB', name: { en: 'Manitoba', fr: 'Manitoba' } },
    { code: 'NB', name: { en: 'New Brunswick', fr: 'Nouveau-Brunswick' } },
    { code: 'NL', name: { en: 'Newfoundland and Labrador', fr: 'Terre-Neuve-et-Labrador' } },
    { code: 'NT', name: { en: 'Northwest Territories', fr: 'Territoires du Nord-Ouest' } },
    { code: 'NS', name: { en: 'Nova Scotia', fr: 'Nouvelle-Écosse' } },
    { code: 'NU', name: { en: 'Nunavut', fr: 'Nunavut' } },
    { code: 'ON', name: { en: 'Ontario', fr: 'Ontario' } },
    { code: 'PE', name: { en: 'Prince Edward Island', fr: 'Île-du-Prince-Édouard' } },
    { code: 'QC', name: { en: 'Québec', fr: 'Québec' } },
    { code: 'SK', name: { en: 'Saskatchewan', fr: 'Saskatchewan' } },
    { code: 'YT', name: { en: 'Yukon', fr: 'Yukon' } },
];
