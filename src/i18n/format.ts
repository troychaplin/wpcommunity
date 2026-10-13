// Fills {name} placeholders: format('Showing {shown} of {total}', { shown: 6, total: 23 })
export const format = (template: string, values: Record<string, string | number>) =>
    template.replace(/\{(\w+)\}/g, (match, key: string) =>
        key in values ? String(values[key]) : match,
    );

export interface PluralMessages {
    one: string;
    other: string;
}

// Picks the plural form for the locale (French treats 0 as singular) and fills {count}
export const plural = (messages: PluralMessages, count: number, tag: string) =>
    format(new Intl.PluralRules(tag).select(count) === 'one' ? messages.one : messages.other, {
        count: new Intl.NumberFormat(tag).format(count),
    });
