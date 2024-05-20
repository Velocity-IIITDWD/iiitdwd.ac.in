export type Announcement = {
    href: string
    text: string
    timestamp: number
};

let announcements: Announcement[] = [
    {
        href: '/docs/announcement4.pdf',
        text: 'IIIT Dharwad announces its latest announcement',
        timestamp: 1716140476349
    },
    {
        href: '/docs/announcement3.pdf',
        text: 'IIIT Dharwad announces its 3nd announcement',
        timestamp: 1716140475349
    },
    {
        href: '/docs/announcement2.pdf',
        text: 'IIIT Dharwad announces its 2nd announcement',
        timestamp: 1716140474349
    },
    {
        href: '/docs/announcement1.pdf',
        text: 'IIIT Dharwad announces its 1st announcement',
        timestamp: 1716140473349
    },
];

announcements.sort();

export { announcements };
