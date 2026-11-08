// UI strings for English pages. The French dictionary is typed against this one, so a key added
// here and missing there fails the build.
export const en = {
    meta: {
        siteName: 'WP Canada',
        description:
            "A welcoming, bilingual community for Canada's WordPress developers, designers, writers, and organizers.",
    },
    skipLink: 'Skip to content',
    notFound: {
        metaTitle: 'Page not found',
        title: "We couldn't find that page",
        body: 'The page may have moved, or the address may be mistyped.',
        home: 'Back to the homepage',
        groups: 'Browse meetup groups',
    },
    language: 'Language',
    header: {
        navLabel: 'Primary',
        nav: {
            meetups: 'Meetups',
            submit: 'Submit a Group',
            story: 'Our Story',
        },
        menu: 'Menu',
        close: 'Close',
    },
    footer: {
        navLabel: 'Footer',
        // The footer language toggle's landmark name; the header's is `language`
        languageNavLabel: 'Footer language',
        description: "A bilingual community for Canada's WordPress people.",
        nav: {
            groups: 'Meetup Groups',
            slack: 'Join Slack',
            submit: 'Submit a Group',
            gettingStarted: 'Getting Started',
            faq: 'FAQ',
        },
        legal: 'WP Canada Community. Built with WordPress and community care.',
        ecosystem: {
            before: 'Part of the global',
            link: 'WordPress',
            after: 'ecosystem.',
        },
    },
    home: {
        metaTitle: 'WordPress meetups and community across Canada',
        hero: {
            title: 'Gather under the canopy',
            accent: 'canopy',
            lead: "A welcoming, bilingual space for Canada's WordPress developers, designers, writers, and organizers. Find your local meetup, share knowledge, and build together.",
            findMeetups: 'Find Local Meetups',
            joinSlack: 'Join Canadian Slack',
        },
        meetupIndex: {
            title: 'Meetup Index',
            version: 'v1.4',
            status: 'Status',
            statusValue: 'Active Community Hub',
            connect: 'Connect',
            connectValue: '{count}+ Members',
            groupCount: { one: '{count} group', other: '{count} groups' },
        },
        groups: {
            title: 'Local Meetup Groups',
            meta: '{count} active groups across Canada',
        },
        slack: {
            eyebrow: 'Community channel',
            title: 'Join the WP Canada Slack',
            body: 'Our national Slack workspace is the heartbeat of the community. Ask questions, share resources, find collaborators, and stay connected between meetups.',
            cta: 'Get your invite',
            previewLabel: 'Preview of the #{channel} Slack channel',
        },
        newHere: {
            title: 'New here? Start with these.',
            description:
                "Whether you're new to WordPress or a seasoned developer, there's a place for you in the Canadian community.",
        },
        startGroup: {
            title: 'Start a group in your city',
            body: 'We support new organizers with resources, promotion, and a community of experienced peers across Canada.',
        },
        updates: {
            title: 'Community updates',
            count: '{shown} of {total} updates',
        },
        faq: {
            title: 'Common questions',
            description: 'Everything you need to know about joining the Canadian WordPress community.',
        },
    },
    directory: {
        regionLabel: 'Region',
        allRegions: 'All Regions',
        searchLabel: 'Search groups by city',
        searchPlaceholder: 'Search your city...',
        showing: 'Showing {shown} of {total} groups',
        viewAll: 'View all groups',
        empty: 'No groups match. Try another city or region.',
        card: {
            linkText: 'View group details',
            membersFormat: '{members} members',
            cadenceFormat: '{cadence} meetups',
        },
    },
    groupsPage: {
        eyebrow: 'Meetup directory',
        title: 'All meetup groups',
        description: 'Every WordPress meetup group across Canada, by province and region.',
    },
    group: {
        status: 'Active Chapter',
        stats: {
            members: 'Local Members',
            cadence: 'Meeting Cadence',
            history: 'Community History',
            founded: 'Est. {year}',
        },
        contactLabel: 'primary group contact',
        contact: 'Contact Organizer',
        findOnSlack: 'Find on Slack',
        handleOnSlack: '{handle} on Slack',
        team: 'Organizing Team & Volunteers',
        resources: {
            title: 'Local Resources & Chapter Links',
            meta: '{count} Essential Touchpoints',
            meetup: {
                label: 'External Platform',
                title: 'Meetup.com Page',
                description: 'Official RSVP portal, upcoming event dates, and community discussions.',
                linkText: 'Visit Group Page',
            },
            slack: {
                label: 'WP Canada Slack',
                title: '{channel} Channel',
                description: 'Real-time local chat, job postings, help, and coffee meetups.',
                linkText: 'Join Channel',
            },
            slides: {
                label: 'Code & Slides',
                title: 'Slide Decks & Repo',
                description: 'Presentation slides, code examples, and workshop starter files from past sessions.',
                linkText: 'Browse Repository',
            },
            venue: {
                label: 'Accessibility Info',
                title: 'Venue & Arrival Guide',
                description: 'Transit directions, wheelchair access notes, parking details, and building codes.',
                linkText: 'Read Venue Guide',
            },
        },
        event: {
            eyebrow: 'Upcoming Gathering',
            rsvp: 'RSVP on Meetup.com',
            propose: 'Propose a Talk',
        },
    },
    cadences: {
        monthly: { label: 'Monthly', inCard: 'Monthly' },
        'bi-monthly': { label: 'Bi-monthly', inCard: 'Bi-monthly' },
        quarterly: { label: 'Quarterly', inCard: 'Quarterly' },
    },
    formats: {
        hybrid: { label: 'Hybrid', detail: 'In-Person & Online' },
        'in-person': { label: 'In-Person', detail: 'On Site' },
        online: { label: 'Online', detail: 'Remote' },
    },
    updateCategories: {
        event: 'Event',
        announcement: 'Announcement',
        resource: 'Resource',
        community: 'Community',
    },
    form: {
        yourDetails: 'Your details',
        groupDetails: 'Group details',
        name: 'Your name',
        namePlaceholder: 'Jane Smith',
        email: 'Email address',
        emailPlaceholder: 'jane@example.ca',
        city: 'City',
        cityPlaceholder: 'Winnipeg',
        province: 'Province or territory',
        provincePlaceholder: 'Choose one',
        about: 'Tell us about your group',
        aboutPlaceholder: 'Who is the group for? What kind of events do you plan?',
        note: "We'll review your submission and reach out within a few days.",
        submit: 'Submit my group',
        submitting: 'Submitting…',
        errorSummary: 'Please fix the highlighted fields.',
        errors: {
            name: 'Please enter your name.',
            email: 'Please enter a valid email address.',
            city: 'Please enter the city for your group.',
            province: 'Please choose a province or territory.',
            about: 'Please keep this under 2,000 characters.',
        },
        success: {
            title: 'Thanks! We got your submission.',
            body: "We'll review it and reach out within a few days.",
        },
    },
};

export type Dictionary = typeof en;
