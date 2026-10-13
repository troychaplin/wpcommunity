import type { Metadata } from "next";
import Image from "next/image";
import { Accordion } from "@/components/Accordion";
import { Article } from "@/components/Article";
import { Aside } from "@/components/Aside";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Card } from "@/components/Card";
import { Column } from "@/components/Column";
import { CTABand } from "@/components/CTABand";
import { ChatPreview } from "@/components/ChatPreview";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { FeatureItem } from "@/components/FeatureItem";
import { Fieldset } from "@/components/Fieldset";
import { Figure } from "@/components/Figure";
import { FilterPill } from "@/components/FilterPill";
import { FlexGroup } from "@/components/FlexGroup";
import { GridGroup } from "@/components/GridGroup";
import { GroupHeader } from "@/components/GroupHeader";
import { Heading } from "@/components/Heading";
import { Hero } from "@/components/Hero";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import { icons } from "@/components/Icon/icons";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Main } from "@/components/Main";
import { MeetupIndex } from "@/components/MeetupIndex";
import { PersonCard } from "@/components/PersonCard";
import { Pill } from "@/components/Pill";
import { ResourceCard } from "@/components/ResourceCard";
import { SearchField } from "@/components/SearchField";
import { SectionHeader } from "@/components/SectionHeader";
import { Select } from "@/components/Select";
import { StatGroup } from "@/components/StatGroup";
import { TextArea } from "@/components/TextArea";
import { TextField } from "@/components/TextField";
import { TextLink } from "@/components/TextLink";
import { UpdateList } from "@/components/UpdateList";
import { FilterDemo } from "./FilterDemo";

export const metadata: Metadata = {
  title: "Kitchen sink",
  robots: { index: false, follow: false },
};

const tones = ["canvas", "tint", "blush", "inverse", "white"] as const;

const languages = [
  { code: "en", label: "English", shortLabel: "En", href: "#en", isCurrent: true },
  { code: "fr", label: "Français", shortLabel: "Fr", href: "#fr" },
];

const meetupRegions = [
  { label: "British Columbia", count: 4, href: "#bc" },
  { label: "Prairies & North", count: 3, href: "#prairies" },
  { label: "Ontario", count: 9, href: "#on" },
  { label: "Québec", count: 5, href: "#qc" },
  { label: "Atlantic Canada", count: 2, href: "#atlantic" },
];

const headingSizes = [
  "heading-large",
  "heading-medium",
  "heading-small",
  "2x-large",
  "x-large",
  "large",
] as const;

const regions = ["All Regions", "British Columbia", "Prairies", "Ontario", "Québec", "Atlantic"];

const iconNames = Object.keys(icons) as IconName[];

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Québec",
  "Saskatchewan",
  "Yukon",
].map((name) => ({ value: name, label: name }));

const volunteers = [
  { name: "Marcus Chen", role: "Speaker Curator", handle: "@marcus_c" },
  { name: "Amira Said", role: "Workshop Lead", handle: "@amira_dev" },
  { name: "Jean-Luc Tremblay", role: "Welcome Ambassador", handle: "@jltremblay" },
];

const resources = [
  {
    label: "External Platform",
    title: "Meetup.com Page",
    description: "Official RSVP portal, upcoming event dates, and community discussions.",
    linkText: "Visit Group Page",
  },
  {
    label: "WP Canada Slack",
    title: "#wp-toronto Channel",
    description: "Real-time local chat, job postings, emergency help, and coffee meetups.",
    linkText: "Join Channel",
  },
  {
    label: "Code & Slides",
    title: "Slide Decks & Repo",
    description: "Presentation slides, code examples, and workshop starter files from past sessions.",
    linkText: "Browse Repository",
  },
  {
    label: "Accessibility Info",
    title: "Venue & Arrival Guide",
    description: "Transit directions, wheelchair access notes, parking details, and building codes.",
    linkText: "Read Venue Guide",
  },
];

const updates = [
  {
    date: "Sept 12",
    dateTime: "2026-09-12",
    category: "Event",
    title: "WordPress Toronto hosts Full Site Editing workshop",
    excerpt:
      "Last week's hands-on session walked members through block themes, template editing, and the style engine. Slides and recording now available on the meetup page.",
    linkText: "Read recap",
  },
  {
    date: "Sept 5",
    dateTime: "2026-09-05",
    category: "Announcement",
    title: "WordCamp Canada 2027 organizer applications now open",
    excerpt:
      "Want to bring WordCamp to your city? The organizing team is actively looking for volunteers across three potential host cities.",
    linkText: "Learn more",
  },
  {
    date: "Aug 28",
    dateTime: "2026-08-28",
    category: "Resource",
    title: "New bilingual welcome guide added to community resources",
    excerpt:
      "We've published a revised getting-started guide in both English and French. It covers finding local meetups, joining Slack, and attending your first WordCamp.",
    linkText: "Download guide",
  },
];

const cards = [
  { backgroundColor: "white", label: "White, with shadow", shadow: true },
  { backgroundColor: "canvas", label: "Canvas", shadow: false },
  { backgroundColor: "tint", label: "Tint", shadow: false },
  { backgroundColor: "inverse", label: "Inverse", shadow: false },
] as const;

export default function KitchenSink() {
  return (
    <Main>
        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader
            prefix="Kitchen sink"
            title="Component review"
            meta="16 components"
            description="Every aligned component in its variants, for review against the designs."
            hasDivider
          />
          <SectionHeader
            prefix="Section header"
            title="Centred, with a description"
            description="Used for Community updates and Common questions."
            align="center"
            level={3}
          />
        </Container>

        <Hero
          title="Gather under the canopy"
          accent="canopy"
          lead="A welcoming, bilingual space for Canada's WordPress developers, designers, writers, and organizers. Find your local meetup, share knowledge, and build together."
          actions={
            <ButtonGroup>
              <Button text="Find Local Meetups" icon="map-pin" href="#groups" isLarge />
              <Button
                text="Join Canadian Slack"
                icon="message-circle-more"
                color="secondary"
                href="#slack"
                isLarge
              />
            </ButtonGroup>
          }
          aside={
            <MeetupIndex
              version="v1.4"
              search={<SearchField label="Search groups by city" placeholder="Search your city..." />}
              regions={meetupRegions}
              meta={[
                { label: "Status", value: "Active Community Hub" },
                { label: "Connect", value: "2,400+ Members" },
              ]}
            />
          }
        />

        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader prefix="Page sections" title="GroupHeader and CTABand" hasDivider />
          <GroupHeader
            region="Ontario / Great Lakes Region"
            status="Active Chapter"
            channel={{ label: "#wp-ottawa", href: "#slack" }}
            title="WordPress Ottawa"
            description="Connecting Ottawa developers, designers, site owners, and beginners since 2011. We host monthly workshops, presentation evenings, and informal coffee hours to learn, troubleshoot, and build better web experiences together."
            stats={[
              { value: "1,200+", label: "Local Members" },
              { value: "Monthly", label: "Meeting Cadence" },
              { value: "Hybrid", label: "In-Person & Online" },
              { value: "Est. 2011", label: "Community History" },
            ]}
          />
          <CTABand
            eyebrow="Upcoming Gathering"
            title="Fall Site Editing & Block Themes Clinic"
            details={["Thursday, November 14", "6:30 PM EST"]}
            location="George Brown College (Waterfront Campus) & Online Zoom"
            actions={
              <ButtonGroup>
                <Button text="RSVP on Meetup.com" href="#rsvp" />
                <Button text="Propose a Talk" color="inverse" href="#talk" />
              </ButtonGroup>
            }
          />
        </Container>

        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader title="Buttons" meta="primary · secondary · inverse" level={3} />
          <ButtonGroup>
            <Button text="Find Local Meetups" />
            <Button text="Join Canadian Slack" color="secondary" />
            <Button text="Read the guide" href="#story" color="secondary" />
            <Button text="Small" isSmall />
            <Button text="Disabled" disabled />
          </ButtonGroup>
          <Button text="Full width" isFull />
        </Container>

        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader
            title="Foundations"
            meta="Heading · Eyebrow · TextLink · Pill · FilterPill · Avatar · Icon"
            level={3}
            hasDivider
          />
          <Heading as="p" size="display" accent="canopy">
            Gather under the canopy
          </Heading>
          <FlexGroup gap="large" align="end">
            {headingSizes.map((size) => (
              <Heading key={size} as="p" size={size}>
                {size}
              </Heading>
            ))}
          </FlexGroup>
          <FlexGroup gap="large" align="center">
            <Eyebrow tone="accent">Ontario</Eyebrow>
            <Eyebrow>primary group contact</Eyebrow>
            <Eyebrow as="time" dateTime="2026-09-12">
              Sept 12
            </Eyebrow>
          </FlexGroup>
          <FlexGroup gap="large" align="center">
            <TextLink href="#groups">View group details</TextLink>
            <TextLink href="#resources" size="small" hasArrow>
              Visit Group Page
            </TextLink>
            <TextLink href="#slack" font="mono" size="small">
              #wp-toronto
            </TextLink>
          </FlexGroup>
          <FlexGroup gap="small" align="center">
            <Pill variant="region">Ontario / Great Lakes Region</Pill>
            <Pill variant="status">Active Chapter</Pill>
            <Pill>Event</Pill>
            <Pill>Announcement</Pill>
          </FlexGroup>
          <FlexGroup gap="x-small" align="center">
            <Eyebrow as="span">Region</Eyebrow>
            {regions.map((label, index) => (
              <FilterPill key={label} pressed={index === 0}>
                {label}
              </FilterPill>
            ))}
          </FlexGroup>
          <FlexGroup gap="medium" align="center">
            <Avatar name="Elena Rostova" src="/globe.svg" size="large" />
            <Avatar name="Marcus Chen" src="/globe.svg" />
            <Avatar name="Sophie L." size="small" shape="square" />
            <Avatar name="Marie-Ange" size="small" shape="square" />
          </FlexGroup>
          <FlexGroup gap="medium" align="center">
            {iconNames.map((name) => (
              <Icon key={name} name={name} size="heading-small" label={name} />
            ))}
          </FlexGroup>
          <FlexGroup gap="large" align="center">
            <LanguageToggle languages={languages} />
            <LanguageToggle languages={languages} variant="list" />
          </FlexGroup>
          <ButtonGroup>
            <Button text="Find Local Meetups" icon="map-pin" isLarge />
            <Button text="Join Canadian Slack" icon="message-circle-more" color="secondary" isLarge />
          </ButtonGroup>
        </Container>

        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader title="Cards" meta="GridGroup · 4 columns" level={3} hasDivider />
          <GridGroup as="ul" columns={4}>
            {cards.map(({ backgroundColor, label, shadow }) => (
              <Card key={label} as="li" backgroundColor={backgroundColor} shadow={shadow}>
                <h3>{label}</h3>
                <p>
                  Card text with an <a href="#cards">inline link</a>.
                </p>
              </Card>
            ))}
          </GridGroup>
          <GridGroup columns={2}>
            <Card href="#cards" shadow>
              <h3>Linked card</h3>
              <p>The whole card follows the link.</p>
            </Card>
            <Card backgroundColor="tint" border={false} borderRadius="md">
              <h3>Borderless tint</h3>
              <p>Like the stats panel on the group page.</p>
            </Card>
          </GridGroup>
        </Container>

        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader title="GridGroup" meta="3 columns" level={3} />
          <GridGroup columns={3}>
            {["WordPress Toronto", "WordPress Vancouver", "WordPress Montréal"].map((name) => (
              <Card key={name}>
                <h4>{name}</h4>
                <p>Monthly presentations, workshops and networking.</p>
              </Card>
            ))}
          </GridGroup>
        </Container>

        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader title="Column" meta="two · one-third · two-thirds" level={3} />
          <Column cols="2" maxWidth="alignwide">
            <Column.Content>
              <p>Half</p>
            </Column.Content>
            <Column.Content>
              <p>Half</p>
            </Column.Content>
          </Column>
          <Column cols="1/3" maxWidth="alignwide">
            <Column.Content>
              <Card>
                <p>One third: primary contact</p>
              </Card>
            </Column.Content>
            <Column.Content>
              <Card>
                <p>Two thirds: organizing team</p>
              </Card>
            </Column.Content>
          </Column>
        </Container>

        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader title="FlexGroup" meta="space-between · gap small" level={3} />
          <FlexGroup justify="space-between" align="center" gap="small">
            <Eyebrow>Showing 6 of 23 groups</Eyebrow>
            <TextLink href="#flex">View all groups</TextLink>
          </FlexGroup>
        </Container>


        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader
            prefix="Content components"
            title="Local Meetup Groups"
            meta="23 active groups across Canada"
            hasDivider
          />
          <FilterDemo />
        </Container>

        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader
            title="New here? Start with these."
            description="Whether you're new to WordPress or a seasoned developer, there's a place for you in the Canadian community."
          />
          <GridGroup columns={4} dividers="columns">
            <FeatureItem icon="map-pin" title="Find your meetup" href="#groups" linkText="Browse groups">
              Browse 23 active local groups organized by province. Most groups welcome all skill levels.
            </FeatureItem>
            <FeatureItem icon="messages-square" title="Join Slack" href="#slack" linkText="Get an invite">
              Connect with 2,400+ Canadian WordPress people between events.
            </FeatureItem>
            <FeatureItem icon="circle-plus" title="Organize a group" href="#form" linkText="Submit a group">
              Don&apos;t see your city listed? Submit your group and we&apos;ll help you get set up.
            </FeatureItem>
            <FeatureItem icon="star" title="Attend a WordCamp" href="#wordcamp" linkText="Find a WordCamp">
              WordCamps are official, volunteer-run WordPress conferences held across Canada.
            </FeatureItem>
          </GridGroup>
        </Container>

        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader title="StatGroup" meta="serif · in a tint card" level={3} />
          <Card backgroundColor="tint" borderRadius="md">
            <StatGroup>
              <StatGroup.Item value="1,200+" label="Local Members" />
              <StatGroup.Item value="Monthly" label="Meeting Cadence" />
              <StatGroup.Item value="Hybrid" label="In-Person & Online" />
              <StatGroup.Item value="Est. 2011" label="Community History" />
            </StatGroup>
          </Card>
        </Container>

        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <Column cols="1/3" maxWidth="alignwide">
            <Column.Content>
              <PersonCard
                label="primary group contact"
                name="Elena Rostova"
                role="Lead Organizer & Liaison"
                handle="@elena on Slack"
                bio={
                  <p>
                    Co-leading Toronto meetups since 2018. Focused on web accessibility, custom block
                    development, and making every newcomer feel welcome.
                  </p>
                }
                actions={
                  <>
                    <Button text="Contact Organizer" href="#contact" />
                    <Button text="Find on Slack" color="secondary" href="#slack" />
                  </>
                }
              />
            </Column.Content>
            <Column.Content>
              <Card shadow paddingInline="medium" paddingBlock="medium">
                <FlexGroup direction="column" gap="medium">
                  <Heading size="heading-medium">Organizing Team &amp; Volunteers</Heading>
                  <GridGroup as="ul" columns={3} gap="small">
                    {volunteers.map((person) => (
                      <li key={person.name}>
                        <PersonCard variant="compact" {...person} />
                      </li>
                    ))}
                  </GridGroup>
                </FlexGroup>
              </Card>
            </Column.Content>
          </Column>
        </Container>

        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader title="Local Resources & Chapter Links" meta="04 Essential Touchpoints" hasDivider />
          <GridGroup columns={4} gap="small">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} href="#resources" {...resource} />
            ))}
          </GridGroup>
        </Container>

        <Container as="section" maxWidth="alignwide" contentWidth="aligncontent">
          <SectionHeader title="Community updates" align="center" />
          <UpdateList>
            {updates.map((update) => (
              <UpdateList.Item key={update.title} href="#updates" {...update} />
            ))}
          </UpdateList>
          <FlexGroup justify="center">
            <Eyebrow>3 of 38 updates</Eyebrow>
          </FlexGroup>
        </Container>

        <Container as="section" color="tint" maxWidth="alignfull" contentWidth="aligncontent">
          <SectionHeader
            title="Common questions"
            description="Everything you need to know about joining the Canadian WordPress community."
          />
          <Accordion label="Getting started">
            <Accordion.Item question="Do I need to be a developer to attend meetups?" defaultOpen>
              <p>
                Not at all. Meetups welcome designers, writers, site owners, marketers and people who
                are simply curious about WordPress.
              </p>
            </Accordion.Item>
            <Accordion.Item question="Are meetups free to attend?">
              <p>Almost always. Some workshops ask for a small fee to cover the venue.</p>
            </Accordion.Item>
            <Accordion.Item question="How do I find out when the next event is?">
              <p>Each group lists its events on its Meetup.com page and in its Slack channel.</p>
            </Accordion.Item>
          </Accordion>
          <Accordion label="Slack and online community">
            <Accordion.Item question="How do I join the WP Canada Slack?">
              <p>Request an invite from the Slack section on the homepage.</p>
            </Accordion.Item>
            <Accordion.Item question="Is the Slack group bilingual?">
              <p>Yes. Channels run in English and French, and many members speak both.</p>
            </Accordion.Item>
          </Accordion>
        </Container>

        <Container as="section" color="tint" maxWidth="alignfull" contentWidth="alignwide">
          <Column cols="2" maxWidth="alignwide">
            <Column.Content>
              <SectionHeader prefix="Community channel" title="Join the WP Canada Slack" />
              <p>
                Our national Slack workspace is the heartbeat of the community. Ask questions, share
                resources, find collaborators, and stay connected between meetups.
              </p>
              <Button text="Get your invite" href="#slack" />
            </Column.Content>
            <Column.Content>
              <ChatPreview
                channel="wp-canada-general"
                messages={[
                  {
                    author: "Sophie L.",
                    time: "Today, 9:14 AM",
                    text: "Anyone heading to WordCamp Canada this year? Looking for a Montréal carpool from Ottawa.",
                  },
                  {
                    author: "Raj K.",
                    time: "Today, 9:31 AM",
                    text: "Great FSE talk last night in Toronto. Slides are on the meetup page now if you missed it!",
                  },
                  {
                    author: "Marie-Ange",
                    time: "Today, 10:02 AM",
                    text: "Notre groupe Montréal cherche un animateur bénévole pour novembre. Faites-moi signe!",
                  },
                ]}
                stats={[
                  { value: "2,400+", label: "members" },
                  { value: "18", label: "channels" },
                  { value: "bilingual", label: "en & fr" },
                ]}
              />
            </Column.Content>
          </Column>
          <Card backgroundColor="tint" border={false} paddingInline="none" paddingBlock="none">
            <SearchField label="Search groups by city" placeholder="Search your city..." />
          </Card>
        </Container>

        <Container as="section" color="inverse" maxWidth="alignfull" contentWidth="alignwide">
          <Column cols="1/3" maxWidth="alignwide">
            <Column.Content>
              <Heading size="heading-medium">Start a group in your city</Heading>
              <p>
                We support new organizers with resources, promotion, and a community of experienced
                peers across Canada.
              </p>
            </Column.Content>
            <Column.Content>
              <form action="#">
                <FlexGroup direction="column" gap="large">
                  <Fieldset legend="Your details">
                    <GridGroup columns={2}>
                      <TextField label="Your name" name="name" placeholder="Jane Smith" autoComplete="name" />
                      <TextField
                        label="Email address"
                        name="email"
                        type="email"
                        placeholder="jane@example.ca"
                        autoComplete="email"
                      />
                    </GridGroup>
                  </Fieldset>
                  <Fieldset legend="Group details">
                    <GridGroup columns={2}>
                      <TextField label="City" name="city" placeholder="Winnipeg" />
                      <Select
                        label="Province or territory"
                        name="province"
                        options={provinces}
                        placeholder="Choose one"
                        defaultValue=""
                      />
                    </GridGroup>
                    <TextArea
                      label="Tell us about your group"
                      name="about"
                      placeholder="Who is the group for? What kind of events do you plan?"
                    />
                  </Fieldset>
                  <FlexGroup justify="space-between" align="center" gap="small">
                    <p>We&apos;ll review your submission and reach out within a few days.</p>
                    <Button text="Submit my group" type="submit" />
                  </FlexGroup>
                </FlexGroup>
              </form>
            </Column.Content>
          </Column>
        </Container>

        {tones.map((tone) => (
          <Container
            key={tone}
            as="section"
            color={tone}
            maxWidth="alignfull"
            contentWidth="alignwide"
          >
            <SectionHeader
              prefix="Container"
              title={`The ${tone} tone`}
              meta={`color="${tone}"`}
              description="Body text, headings, borders and eyebrows follow the tone's role colours."
            />
            <p>
              A paragraph with an <a href="#tones">inline link</a>.
            </p>
            <Heading as="p" size="heading-small" accent="canopy">
              Accent words follow the canopy tone
            </Heading>
            <FlexGroup gap="large" align="center">
              <Eyebrow tone="accent">Upcoming Gathering</Eyebrow>
              <Eyebrow>Thursday, November 14</Eyebrow>
              <TextLink href="#tones" hasArrow>
                Read recap
              </TextLink>
            </FlexGroup>
            <ButtonGroup>
              <Button text="RSVP on Meetup.com" />
              {tone === "inverse" ? (
                <Button text="Propose a Talk" color="inverse" />
              ) : (
                <Button text="Find on Slack" color="secondary" />
              )}
            </ButtonGroup>
            <GridGroup columns={2}>
              <Card>
                <p>A white card keeps dark text in any tone.</p>
              </Card>
              <Card backgroundColor="inverse">
                <p>An inverse card switches to light text.</p>
              </Card>
            </GridGroup>
          </Container>
        ))}

        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader title="Article, Aside and Figure" level={3} />
          <Column cols="2/3" maxWidth="alignwide">
            <Column.Content>
              <Article>
                <h2>Fall Site Editing &amp; Block Themes Clinic</h2>
                <p>
                  Bring your questions about block themes, patterns and the Site Editor. We&apos;ll
                  work through real problems together.
                </p>
                <Figure caption="A figure with a caption" size="md">
                  <Image src="/globe.svg" alt="Globe illustration" width={480} height={480} />
                </Figure>
                <p>
                  Prose links in Main are <a href="#article">semibold</a> and underline on hover.
                </p>
              </Article>
            </Column.Content>
            <Column.Content>
              <Aside isSticky topSpace={24}>
                <Card backgroundColor="tint" border={false}>
                  <p>A sticky aside</p>
                </Card>
              </Aside>
            </Column.Content>
          </Column>
        </Container>
      </Main>
  );
}
