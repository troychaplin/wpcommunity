import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { Column } from '../Column';
import { Container } from '../Container';
import { FlexGroup } from '../FlexGroup';
import { GridGroup } from '../GridGroup';
import { Heading } from '../Heading';
import { Select } from '../Select';
import { TextArea } from '../TextArea';
import { TextField } from '../TextField';
import { provinces } from '../../stories/fixtures';
import { Fieldset } from './Fieldset';

const meta = {
    title: 'Components/Forms/Fieldset',
    component: Fieldset,
    args: {
        legend: 'Your details',
        children: (
            <GridGroup columns={2}>
                <TextField label="Your name" name="name" placeholder="Jane Smith" autoComplete="name" />
                <TextField label="Email address" name="email" type="email" placeholder="jane@example.ca" autoComplete="email" />
            </GridGroup>
        ),
    },
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// The homepage "Start a group" form on the inverse tone
export const GroupForm: Story = {
    parameters: { layout: 'fullscreen' },
    render: (args) => (
        <Container as="section" color="forest" maxWidth="alignfull" contentWidth="alignwide">
            <Column cols="1/3">
                <Column.Content>
                    <Heading size="heading-medium">Start a group in your city</Heading>
                    <p>
                        We support new organizers with resources, promotion, and a community of experienced peers
                        across Canada.
                    </p>
                </Column.Content>
                <Column.Content>
                    <form action="#" onSubmit={(event) => event.preventDefault()}>
                        <FlexGroup direction="column" gap="large">
                            <Fieldset {...args} />
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
    ),
};
