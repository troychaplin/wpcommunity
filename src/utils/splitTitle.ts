// Splits a title around the first match of `accent`. With no match, the whole title comes back
// as the only part.
export const splitTitle = (title: string, accent?: string): [string, string?, string?] => {
    const start = accent ? title.indexOf(accent) : -1;

    if (!accent || start === -1) {
        return [title];
    }

    return [title.slice(0, start), accent, title.slice(start + accent.length)];
};
