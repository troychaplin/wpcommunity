import type { Metadata } from "next";
import Image from "next/image";
import { Article } from "@/components/Article";
import { Aside } from "@/components/Aside";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Card } from "@/components/Card";
import { Column } from "@/components/Column";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Figure } from "@/components/Figure";
import { FilterPill } from "@/components/FilterPill";
import { FlexGroup } from "@/components/FlexGroup";
import { GridGroup } from "@/components/GridGroup";
import { Heading } from "@/components/Heading";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import { icons } from "@/components/Icon/icons";
import { Main } from "@/components/Main";
import { Pill } from "@/components/Pill";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TextLink } from "@/components/TextLink";

export const metadata: Metadata = {
  title: "Kitchen sink",
  robots: { index: false, follow: false },
};

const navItems = [
  { href: "/", label: "Meetups" },
  { href: "/kitchen-sink#submit", label: "Submit a Group" },
  { href: "/kitchen-sink#story", label: "Our Story" },
];

const tones = ["canvas", "tint", "blush", "inverse", "white"] as const;

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

const cards = [
  { backgroundColor: "white", label: "White, with shadow", shadow: true },
  { backgroundColor: "canvas", label: "Canvas", shadow: false },
  { backgroundColor: "tint", label: "Tint", shadow: false },
  { backgroundColor: "inverse", label: "Inverse", shadow: false },
] as const;

export default function KitchenSink() {
  return (
    <>
      <SiteHeader navItems={navItems} />
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

        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
          <SectionHeader title="Buttons" meta="primary · secondary · inverse" level={3} />
          <ButtonGroup>
            <Button text="Find Local Meetups" />
            <Button text="Join Canadian Slack" color="secondary" />
            <Button text="Read the guide" href="/kitchen-sink#story" color="secondary" />
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
            <TextLink href="/kitchen-sink#groups">View group details</TextLink>
            <TextLink href="/kitchen-sink#resources" size="small" hasArrow>
              Visit Group Page
            </TextLink>
            <TextLink href="/kitchen-sink#slack" font="mono" size="small">
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
            <Card href="/kitchen-sink#cards" shadow>
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
            <TextLink href="/kitchen-sink#flex">View all groups</TextLink>
          </FlexGroup>
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
              <TextLink href="/kitchen-sink#tones" hasArrow>
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
      <SiteFooter
        name="WP Canada"
        nameHref="/"
        description="A bilingual community for Canada's WordPress people."
        navItems={[
          { href: "/", label: "Meetup Groups" },
          { href: "/kitchen-sink#slack", label: "Join Slack" },
          { href: "/kitchen-sink#submit", label: "Submit a Group" },
          { href: "/kitchen-sink#start", label: "Getting Started" },
          { href: "/kitchen-sink#faq", label: "FAQ" },
        ]}
        legal="WP Canada Community. Built with WordPress and community care."
        meta={
          <>
            Part of the global <a href="https://wordpress.org">WordPress</a> ecosystem.
          </>
        }
      >
        <p>English · Français</p>
      </SiteFooter>
    </>
  );
}
