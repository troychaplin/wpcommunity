// Sample content from the designs, shared by the stories. English only: the pages pass the French.

export const languages = [
    { code: 'en', label: 'English', shortLabel: 'En', href: '#en', isCurrent: true },
    { code: 'fr', label: 'Français', shortLabel: 'Fr', href: '#fr' },
];

export const meetupRegions = [
    { label: 'British Columbia', count: 4, href: '#bc' },
    { label: 'Prairies & North', count: 3, href: '#prairies' },
    { label: 'Ontario', count: 9, href: '#on' },
    { label: 'Québec', count: 5, href: '#qc' },
    { label: 'Atlantic Canada', count: 2, href: '#atlantic' },
];

export const regionOptions = [
    { value: 'all', label: 'All Regions' },
    { value: 'bc', label: 'British Columbia' },
    { value: 'prairies', label: 'Prairies' },
    { value: 'on', label: 'Ontario' },
    { value: 'qc', label: 'Québec' },
    { value: 'atlantic', label: 'Atlantic' },
];

export const provinces = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Northwest Territories',
    'Nova Scotia',
    'Nunavut',
    'Ontario',
    'Prince Edward Island',
    'Québec',
    'Saskatchewan',
    'Yukon',
].map((name) => ({ value: name, label: name }));

export const groups = [
    {
        regionKey: 'on',
        region: 'Ontario',
        name: 'WordPress Toronto',
        description:
            "Canada's largest WordPress community. Monthly presentations, workshops, and networking for all skill levels.",
        members: 1200,
        cadence: 'Monthly',
    },
    {
        regionKey: 'bc',
        region: 'British Columbia',
        name: 'WordPress Vancouver',
        description: 'A vibrant Pacific coast community for WordPress enthusiasts, from freelancers to agency teams.',
        members: 640,
        cadence: 'Bi-monthly',
    },
    {
        regionKey: 'qc',
        region: 'Québec',
        name: 'WordPress Montréal',
        description: 'Bilingual group welcoming developers and designers from across the greater Montréal area.',
        members: 480,
        cadence: 'Monthly',
    },
    {
        regionKey: 'prairies',
        region: 'Prairies',
        name: 'WordPress Calgary',
        description:
            'Building community across southern Alberta. A welcoming space for WordPress users at any level.',
        members: 210,
        cadence: 'Quarterly',
    },
    {
        regionKey: 'atlantic',
        region: 'Atlantic Canada',
        name: 'WordPress Halifax',
        description:
            "Atlantic Canada's WordPress hub. Friendly talks, code sprints, and community events in Nova Scotia.",
        members: 145,
        cadence: 'Bi-monthly',
    },
    {
        regionKey: 'on',
        region: 'Ontario',
        name: 'WordPress Ottawa',
        description:
            "Canada's capital city community. Bringing together government, agency, and freelance WordPress talent.",
        members: 320,
        cadence: 'Monthly',
    },
];

export const volunteers = [
    { name: 'Marcus Chen', role: 'Speaker Curator', handle: '@marcus_c' },
    { name: 'Amira Said', role: 'Workshop Lead', handle: '@amira_dev' },
    { name: 'Jean-Luc Tremblay', role: 'Welcome Ambassador', handle: '@jltremblay' },
];

export const resources = [
    {
        label: 'External Platform',
        title: 'Meetup.com Page',
        description: 'Official RSVP portal, upcoming event dates, and community discussions.',
        linkText: 'Visit Group Page',
    },
    {
        label: 'WP Canada Slack',
        title: '#wp-toronto Channel',
        description: 'Real-time local chat, job postings, emergency help, and coffee meetups.',
        linkText: 'Join Channel',
    },
    {
        label: 'Code & Slides',
        title: 'Slide Decks & Repo',
        description: 'Presentation slides, code examples, and workshop starter files from past sessions.',
        linkText: 'Browse Repository',
    },
    {
        label: 'Accessibility Info',
        title: 'Venue & Arrival Guide',
        description: 'Transit directions, wheelchair access notes, parking details, and building codes.',
        linkText: 'Read Venue Guide',
    },
];

export const updates = [
    {
        date: 'Sept 12',
        dateTime: '2026-09-12',
        category: 'Event',
        title: 'WordPress Toronto hosts Full Site Editing workshop',
        excerpt:
            "Last week's hands-on session walked members through block themes, template editing, and the style engine. Slides and recording now available on the meetup page.",
        linkText: 'Read recap',
    },
    {
        date: 'Sept 5',
        dateTime: '2026-09-05',
        category: 'Announcement',
        title: 'WordCamp Canada 2027 organizer applications now open',
        excerpt:
            'Want to bring WordCamp to your city? The organizing team is actively looking for volunteers across three potential host cities.',
        linkText: 'Learn more',
    },
    {
        date: 'Aug 28',
        dateTime: '2026-08-28',
        category: 'Resource',
        title: 'New bilingual welcome guide added to community resources',
        excerpt:
            "We've published a revised getting-started guide in both English and French. It covers finding local meetups, joining Slack, and attending your first WordCamp.",
        linkText: 'Download guide',
    },
];

export const chatMessages = [
    {
        author: 'Sophie L.',
        time: 'Today, 9:14 AM',
        text: 'Anyone heading to WordCamp Canada this year? Looking for a Montréal carpool from Ottawa.',
    },
    {
        author: 'Raj K.',
        time: 'Today, 9:31 AM',
        text: 'Great FSE talk last night in Toronto. Slides are on the meetup page now if you missed it!',
    },
    {
        author: 'Marie-Ange',
        time: 'Today, 10:02 AM',
        text: 'Notre groupe Montréal cherche un animateur bénévole pour novembre. Faites-moi signe!',
    },
];

export const chatStats = [
    { value: '2,400+', label: 'members' },
    { value: '18', label: 'channels' },
    { value: 'bilingual', label: 'en & fr' },
];

export const groupStats = [
    { value: '1,200+', label: 'Local Members' },
    { value: 'Monthly', label: 'Meeting Cadence' },
    { value: 'Hybrid', label: 'In-Person & Online' },
    { value: 'Est. 2011', label: 'Community History' },
];

export const headerNav = [
    { href: '#groups', label: 'Meetups' },
    { href: '#start-a-group', label: 'Submit a Group' },
    { href: '#new-here', label: 'Our Story' },
];

export const footerNav = [
    { href: '#groups', label: 'All groups' },
    { href: '#slack', label: 'Slack' },
    { href: '#start-a-group', label: 'Submit a group' },
    { href: '#new-here', label: 'Getting started' },
    { href: '#faq', label: 'FAQ' },
];
