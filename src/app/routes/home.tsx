import { Accordion } from '@/components/Accordion';
import { Button } from '@/components/Button';
import { ButtonGroup } from '@/components/ButtonGroup';
import { ChatPreview } from '@/components/ChatPreview';
import { Column } from '@/components/Column';
import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { FeatureItem } from '@/components/FeatureItem';
import { FlexGroup } from '@/components/FlexGroup';
import { GridGroup } from '@/components/GridGroup';
import { Heading } from '@/components/Heading';
import { Hero } from '@/components/Hero';
import { Main } from '@/components/Main';
import { MeetupIndex } from '@/components/MeetupIndex';
import { SectionHeader } from '@/components/SectionHeader';
import { UpdateList } from '@/components/UpdateList';
import {
    faq,
    features,
    formatShortDate,
    getDirectoryGroups,
    getRegions,
    provinces,
    slackChannel,
    slackInviteUrl,
    slackMemberCount,
    slackMessages,
    slackStats,
    totalUpdates,
    updates,
} from '@/data';
import { DirectoryProvider } from '@/features/directory/DirectoryProvider';
import { DirectoryResults } from '@/features/directory/DirectoryResults';
import { DirectorySearch } from '@/features/directory/DirectorySearch';
import { GroupForm } from '@/features/group-form/GroupForm';
import { format, plural } from '@/i18n/format';
import { localeHref } from '@/i18n/paths';
import { useI18n } from '@/i18n/useI18n';
import { PageMeta } from '../PageMeta';

export default function Home() {
    const { locale, tag, t } = useI18n();
    const groups = getDirectoryGroups(locale, (cadence) => t.cadences[cadence].inCard);
    const regions = getRegions(locale);
    const number = new Intl.NumberFormat(tag);

    return (
        <Main hasPadding={false}>
            <PageMeta locale={locale} absoluteTitle={`${t.home.metaTitle} | ${t.meta.siteName}`} path="" />
            <DirectoryProvider groups={groups} resultsId="groups">
                <Hero
                    title={t.home.hero.title}
                    accent={t.home.hero.accent}
                    lead={t.home.hero.lead}
                    actions={
                        <ButtonGroup>
                            <Button text={t.home.hero.findMeetups} icon="map-pin" href="#groups" isLarge />
                            <Button
                                text={t.home.hero.joinSlack}
                                icon="message-circle-more"
                                color="white"
                                href="#slack"
                                isLarge
                            />
                        </ButtonGroup>
                    }
                    aside={
                        <MeetupIndex
                            title={t.home.meetupIndex.title}
                            version={t.home.meetupIndex.version}
                            search={
                                <DirectorySearch
                                    label={t.directory.searchLabel}
                                    placeholder={t.directory.searchPlaceholder}
                                />
                            }
                            regions={regions.map((region) => ({
                                label: region.label,
                                count: region.count,
                                href: `#region-${region.key}`,
                            }))}
                            countLabel={(count) => plural(t.home.meetupIndex.groupCount, count, tag)}
                            meta={[
                                { label: t.home.meetupIndex.status, value: t.home.meetupIndex.statusValue },
                                {
                                    label: t.home.meetupIndex.connect,
                                    value: format(t.home.meetupIndex.connectValue, {
                                        count: number.format(slackMemberCount),
                                    }),
                                },
                            ]}
                        />
                    }
                />

                <Container as="section" id="groups" maxWidth="alignwide" contentWidth="alignwide">
                    <SectionHeader
                        title={t.home.groups.title}
                        meta={format(t.home.groups.meta, { count: groups.length })}
                    />
                    <DirectoryResults
                        regions={[
                            { value: 'all', label: t.directory.allRegions },
                            ...regions.map((region) => ({ value: region.key, label: region.shortLabel })),
                        ]}
                        labels={t.directory}
                        groupsPath={`/${locale}/groups`}
                        localeTag={tag}
                        limit={6}
                        viewAllHref={`/${locale}/groups`}
                    />
                </Container>
            </DirectoryProvider>

            <Container as="section" id="slack" color="sage" maxWidth="alignfull" contentWidth="alignwide">
                <Column cols="2">
                    <Column.Content>
                        <SectionHeader prefix={t.home.slack.eyebrow} title={t.home.slack.title} />
                        <p>{t.home.slack.body}</p>
                        <Button text={t.home.slack.cta} href={slackInviteUrl} />
                    </Column.Content>
                    <Column.Content>
                        <ChatPreview
                            channel={slackChannel}
                            label={format(t.home.slack.previewLabel, { channel: slackChannel })}
                            messages={slackMessages.map((message) => ({
                                author: message.author,
                                time: message.time[locale],
                                text: message.text,
                            }))}
                            stats={slackStats.map((stat) => ({
                                value: stat.value[locale],
                                label: stat.label[locale],
                            }))}
                        />
                    </Column.Content>
                </Column>
            </Container>

            <Container as="section" id="new-here" maxWidth="alignwide" contentWidth="alignwide">
                <SectionHeader title={t.home.newHere.title} description={t.home.newHere.description} />
                <GridGroup columns={4} dividers="columns">
                    {features.map((feature) => (
                        <FeatureItem
                            key={feature.icon}
                            icon={feature.icon}
                            title={feature.title[locale]}
                            href={localeHref(locale, feature.href)}
                            linkText={feature.linkText[locale]}
                        >
                            {feature.text[locale]}
                        </FeatureItem>
                    ))}
                </GridGroup>
            </Container>

            <Container
                as="section"
                id="start-a-group"
                color="forest"
                maxWidth="alignfull"
                contentWidth="alignwide"
            >
                <Column cols="1/3">
                    <Column.Content>
                        <Heading size="heading-medium">{t.home.startGroup.title}</Heading>
                        <p>{t.home.startGroup.body}</p>
                    </Column.Content>
                    <Column.Content>
                        <GroupForm
                            locale={locale}
                            labels={t.form}
                            provinces={provinces.map((province) => ({
                                value: province.code,
                                label: province.name[locale],
                            }))}
                        />
                    </Column.Content>
                </Column>
            </Container>

            <Container as="section" id="updates" maxWidth="alignwide" contentWidth="aligncontent">
                <SectionHeader title={t.home.updates.title} align="center" />
                <UpdateList>
                    {updates.map((update) => (
                        <UpdateList.Item
                            key={update.date}
                            date={formatShortDate(update.date, tag)}
                            dateTime={update.date}
                            category={t.updateCategories[update.category]}
                            title={update.title[locale]}
                            excerpt={update.excerpt[locale]}
                            href={localeHref(locale, update.href)}
                            linkText={update.linkText[locale]}
                        />
                    ))}
                </UpdateList>
                <FlexGroup justify="center">
                    <Eyebrow>{format(t.home.updates.count, { shown: updates.length, total: totalUpdates })}</Eyebrow>
                </FlexGroup>
            </Container>

            <Container as="section" id="faq" color="sage" maxWidth="alignfull" contentWidth="aligncontent">
                <SectionHeader title={t.home.faq.title} description={t.home.faq.description} />
                {faq.map((group, groupIndex) => (
                    <Accordion key={group.label.en} label={group.label[locale]}>
                        {group.items.map((item, itemIndex) => (
                            <Accordion.Item
                                key={item.question.en}
                                question={item.question[locale]}
                                defaultOpen={groupIndex === 0 && itemIndex === 0}
                            >
                                <p>{item.answer[locale]}</p>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                ))}
            </Container>
        </Main>
    );
}
