import type { Dictionary } from './en';

// Chaînes d'interface pour les pages en français. Brouillon à faire relire par une personne de
// langue maternelle française avant le lancement. Typographie québécoise : pas d'espace avant
// « ? » ni « ! ».
export const fr: Dictionary = {
    meta: {
        siteName: 'WP Canada',
        description:
            'Une communauté accueillante et bilingue pour les développeurs, designers, rédacteurs et organisateurs WordPress du Canada.',
    },
    skipLink: 'Passer au contenu',
    notFound: {
        metaTitle: 'Page introuvable',
        title: 'Cette page est introuvable',
        body: "Elle a peut-être été déplacée, ou l'adresse contient une erreur.",
        home: "Retour à l'accueil",
        groups: 'Parcourir les groupes',
    },
    language: 'Langue',
    header: {
        navLabel: 'Principale',
        nav: {
            meetups: 'Rencontres',
            submit: 'Proposer un groupe',
            story: 'Notre histoire',
        },
        menu: 'Menu',
        close: 'Fermer',
    },
    footer: {
        navLabel: 'Pied de page',
        description: 'Une communauté bilingue pour les gens de WordPress au Canada.',
        nav: {
            groups: 'Groupes de rencontre',
            slack: 'Rejoindre Slack',
            submit: 'Proposer un groupe',
            gettingStarted: 'Premiers pas',
            faq: 'FAQ',
        },
        legal: "Communauté WP Canada. Conçu avec WordPress et l'esprit communautaire.",
        ecosystem: {
            before: "Membre de l'écosystème",
            link: 'WordPress',
            after: 'mondial.',
        },
    },
    home: {
        metaTitle: 'Rencontres et communauté WordPress partout au Canada',
        hero: {
            title: 'Se rassembler sous la canopée',
            accent: 'canopée',
            lead: 'Un espace accueillant et bilingue pour les développeurs, designers, rédacteurs et organisateurs WordPress du Canada. Trouvez votre rencontre locale, partagez vos connaissances et bâtissez ensemble.',
            findMeetups: 'Trouver une rencontre',
            joinSlack: 'Rejoindre le Slack canadien',
        },
        meetupIndex: {
            title: 'Répertoire des rencontres',
            version: 'v1.4',
            status: 'Statut',
            statusValue: 'Carrefour communautaire actif',
            connect: 'Communauté',
            connectValue: '{count}+ membres',
            groupCount: { one: '{count} groupe', other: '{count} groupes' },
        },
        groups: {
            title: 'Groupes de rencontre locaux',
            meta: '{count} groupes actifs au Canada',
        },
        slack: {
            eyebrow: 'Canal communautaire',
            title: 'Rejoignez le Slack WP Canada',
            body: 'Notre espace Slack national est le cœur de la communauté. Posez vos questions, partagez des ressources, trouvez des collaborateurs et restez en contact entre les rencontres.',
            cta: 'Obtenir une invitation',
            previewLabel: 'Aperçu du canal Slack #{channel}',
        },
        newHere: {
            title: 'Nouveau ici? Commencez par ceci.',
            description:
                'Que vous découvriez WordPress ou que vous soyez développeur chevronné, il y a une place pour vous dans la communauté canadienne.',
        },
        startGroup: {
            title: 'Lancez un groupe dans votre ville',
            body: 'Nous soutenons les nouveaux organisateurs avec des ressources, de la promotion et une communauté de pairs expérimentés partout au Canada.',
        },
        updates: {
            title: 'Nouvelles de la communauté',
            count: '{shown} sur {total} nouvelles',
        },
        faq: {
            title: 'Questions fréquentes',
            description: "Tout ce qu'il faut savoir pour rejoindre la communauté WordPress canadienne.",
        },
    },
    directory: {
        regionLabel: 'Région',
        allRegions: 'Toutes les régions',
        searchLabel: 'Rechercher un groupe par ville',
        searchPlaceholder: 'Recherchez votre ville...',
        showing: 'Affichage de {shown} groupes sur {total}',
        viewAll: 'Voir tous les groupes',
        empty: 'Aucun groupe ne correspond. Essayez une autre ville ou région.',
        card: {
            linkText: 'Voir le groupe',
            membersFormat: '{members} membres',
            cadenceFormat: 'Rencontres {cadence}',
        },
    },
    groupsPage: {
        eyebrow: 'Répertoire des rencontres',
        title: 'Tous les groupes de rencontre',
        description: 'Tous les groupes de rencontre WordPress au Canada, par province et région.',
    },
    group: {
        status: 'Section active',
        stats: {
            members: 'Membres locaux',
            cadence: 'Fréquence des rencontres',
            history: 'Historique',
            founded: 'Depuis {year}',
        },
        contactLabel: 'personne-ressource principale',
        contact: 'Contacter la personne-ressource',
        findOnSlack: 'Trouver sur Slack',
        handleOnSlack: '{handle} sur Slack',
        team: 'Équipe organisatrice et bénévoles',
        resources: {
            title: 'Ressources locales et liens de la section',
            meta: '{count} points de contact essentiels',
            meetup: {
                label: 'Plateforme externe',
                title: 'Page Meetup.com',
                description: 'Portail officiel des inscriptions, dates des prochains événements et discussions.',
                linkText: 'Visiter la page du groupe',
            },
            slack: {
                label: 'Slack WP Canada',
                title: 'Canal {channel}',
                description: "Clavardage local en temps réel, offres d'emploi, entraide et cafés-rencontres.",
                linkText: 'Rejoindre le canal',
            },
            slides: {
                label: 'Code et présentations',
                title: 'Présentations et dépôt',
                description: 'Diapositives, exemples de code et fichiers de départ des ateliers passés.',
                linkText: 'Parcourir le dépôt',
            },
            venue: {
                label: 'Accessibilité',
                title: "Guide du lieu et de l'arrivée",
                description:
                    "Itinéraires en transport en commun, accès en fauteuil roulant, stationnement et codes d'accès.",
                linkText: 'Lire le guide du lieu',
            },
        },
        event: {
            eyebrow: 'Prochaine rencontre',
            rsvp: "S'inscrire sur Meetup.com",
            propose: 'Proposer une présentation',
        },
    },
    cadences: {
        monthly: { label: 'Mensuelle', inCard: 'mensuelles' },
        'bi-monthly': { label: 'Bimestrielle', inCard: 'bimestrielles' },
        quarterly: { label: 'Trimestrielle', inCard: 'trimestrielles' },
    },
    formats: {
        hybrid: { label: 'Hybride', detail: 'En personne et en ligne' },
        'in-person': { label: 'En personne', detail: 'Sur place' },
        online: { label: 'En ligne', detail: 'À distance' },
    },
    updateCategories: {
        event: 'Événement',
        announcement: 'Annonce',
        resource: 'Ressource',
        community: 'Communauté',
    },
    form: {
        yourDetails: 'Vos coordonnées',
        groupDetails: 'Le groupe',
        name: 'Votre nom',
        namePlaceholder: 'Jeanne Tremblay',
        email: 'Adresse courriel',
        emailPlaceholder: 'jeanne@exemple.ca',
        city: 'Ville',
        cityPlaceholder: 'Winnipeg',
        province: 'Province ou territoire',
        provincePlaceholder: 'Choisissez',
        about: 'Parlez-nous de votre groupe',
        aboutPlaceholder: "À qui s'adresse le groupe? Quels événements prévoyez-vous?",
        note: "Nous examinerons votre demande et vous répondrons d'ici quelques jours.",
        submit: 'Soumettre mon groupe',
        submitting: 'Envoi…',
        errorSummary: 'Veuillez corriger les champs indiqués.',
        errors: {
            name: 'Veuillez entrer votre nom.',
            email: 'Veuillez entrer une adresse courriel valide.',
            city: 'Veuillez entrer la ville de votre groupe.',
            province: 'Veuillez choisir une province ou un territoire.',
            about: 'Veuillez rester sous 2 000 caractères.',
        },
        success: {
            title: 'Merci! Nous avons bien reçu votre demande.',
            body: "Nous l'examinerons et vous répondrons d'ici quelques jours.",
        },
    },
};
