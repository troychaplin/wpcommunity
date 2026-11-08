import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../Card';
import { Container } from '../Container';
import { FeatureItem } from '../FeatureItem';
import { GroupCard } from '../GroupCard';
import { groups } from '../../stories/fixtures';
import { GridGroup } from './GridGroup';

const names = ['WordPress Toronto', 'WordPress Vancouver', 'WordPress Montréal', 'WordPress Calgary', 'WordPress Halifax', 'WordPress Ottawa'];

const cards = (count: number) =>
    names.slice(0, count).map((name) => (
        <Card key={name}>
            <h4>{name}</h4>
            <p>Monthly presentations, workshops and networking.</p>
        </Card>
    ));

const meta = {
    title: 'Components/Layout/Grid Group',
    component: GridGroup,
    args: { columns: 3, children: cards(3) },
} satisfies Meta<typeof GridGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeColumns: Story = {};

// One column on phones; two above the mobile breakpoint; three or four above tablet (four passes
// through two)
export const ColumnCounts: Story = {
    render: () => (
        <>
            {([1, 2, 3, 4] as const).map((columns) => (
                <GridGroup key={columns} columns={columns} style={{ marginBlockEnd: '2rem' }}>
                    {cards(columns === 1 ? 2 : columns)}
                </GridGroup>
            ))}
        </>
    ),
};

// A list of Cards: each Card renders as an li, and the grid restores list semantics
export const AsList: Story = {
    args: {
        as: 'ul',
        children: names.slice(0, 3).map((name) => (
            <Card key={name} as="li">
                <h4>{name}</h4>
                <p>Monthly presentations, workshops and networking.</p>
            </Card>
        )),
    },
};

// Rules between side-by-side cells, as in the homepage "New here?" row. Below the breakpoints
// the rules turn horizontal and sit between the stacked cells.
export const DividersBetweenColumns: Story = {
    args: {
        columns: 4,
        dividers: 'columns',
        children: [
            <FeatureItem key="find" icon="map-pin" title="Find your meetup" href="#groups" linkText="Browse groups">
                Browse 23 active local groups organized by province.
            </FeatureItem>,
            <FeatureItem key="slack" icon="messages-square" title="Join Slack" href="#slack" linkText="Get an invite">
                Connect with 2,400+ Canadian WordPress people between events.
            </FeatureItem>,
            <FeatureItem key="organize" icon="circle-plus" title="Organize a group" href="#form" linkText="Submit a group">
                Don&apos;t see your city listed? Submit your group.
            </FeatureItem>,
            <FeatureItem key="wordcamp" icon="star" title="Attend a WordCamp" href="#wordcamp" linkText="Find a WordCamp">
                Volunteer-run WordPress conferences held across Canada.
            </FeatureItem>,
        ],
    },
};

// Every row and column with a closing bottom rule, as in the homepage group grid. An incomplete
// last row leaves its empty slots unruled.
export const DividersAll: Story = {
    args: {
        dividers: 'all',
        children: groups.slice(0, 5).map(({ regionKey, ...group }) => (
            <GroupCard key={group.name} href={`#${regionKey}`} {...group} />
        )),
    },
};

// Every row and column inside a frame, like a table
export const DividersFramed: Story = {
    args: {
        dividers: 'framed',
        children: groups.slice(0, 6).map(({ regionKey, ...group }) => (
            <GroupCard key={group.name} href={`#${regionKey}`} {...group} />
        )),
    },
};

// Forest Cards on a forest section. `dividerColor` draws the lines in the forest surface's paired
// border (forest-800), and `cellPadding={false}` sits each Card flush against them, with the
// Card's own padding insetting its content.
export const DividersOnForest: Story = {
    parameters: { layout: 'fullscreen' },
    args: {
        dividers: 'framed',
        dividerColor: 'forest',
        cellPadding: false,
        children: names.slice(0, 6).map((name) => (
            <Card key={name} backgroundColor="forest" border={false} borderRadius="none" paddingInline="medium" paddingBlock="medium">
                <h4>{name}</h4>
                <p>Monthly presentations, workshops and networking.</p>
            </Card>
        )),
    },
    decorators: [
        (Story) => (
            <Container color="forest" maxWidth="alignfull" contentWidth="alignwide">
                <Story />
            </Container>
        ),
    ],
};
