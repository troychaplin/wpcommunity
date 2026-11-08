import { Button } from '@/components/Button';
import { ButtonGroup } from '@/components/ButtonGroup';
import { Hero } from '@/components/Hero';
import { MeetupIndex } from '@/components/MeetupIndex';
import { getRegions, slackMemberCount } from '@/data';
import { DirectorySearch } from '@/features/directory/DirectorySearch';
import { format, plural } from '@/i18n/format';
import { useI18n } from '@/i18n/useI18n';
import { homeSections } from './sections';

// The homepage hero, with the Meetup Index beside it. Its search and region links drive the group
// grid below, so it renders inside the page's DirectoryProvider.
export function HomeHero() {
    const { tag, t, locale } = useI18n();
    const number = new Intl.NumberFormat(tag);
    const { hero, meetupIndex } = t.home;

    return (
        <Hero
            title={hero.title}
            accent={hero.accent}
            lead={hero.lead}
            actions={
                <ButtonGroup>
                    <Button text={hero.findMeetups} icon="map-pin" href={`#${homeSections.groups}`} isLarge />
                    <Button
                        text={hero.joinSlack}
                        icon="message-circle-more"
                        color="white"
                        href={`#${homeSections.slack}`}
                        isLarge
                    />
                </ButtonGroup>
            }
            aside={
                <MeetupIndex
                    title={meetupIndex.title}
                    version={meetupIndex.version}
                    search={<DirectorySearch />}
                    regions={getRegions(locale).map((region) => ({
                        label: region.label,
                        count: region.count,
                        href: `#region-${region.key}`,
                    }))}
                    countLabel={(count) => plural(meetupIndex.groupCount, count, tag)}
                    meta={[
                        { label: meetupIndex.status, value: meetupIndex.statusValue },
                        {
                            label: meetupIndex.connect,
                            value: format(meetupIndex.connectValue, { count: number.format(slackMemberCount) }),
                        },
                    ]}
                />
            }
        />
    );
}
