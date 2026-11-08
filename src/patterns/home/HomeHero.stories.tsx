import type { Meta, StoryObj } from '@storybook/react-vite';
import { patternMeta, withPattern } from '../../stories/patternDecorator';
import type { PatternArgs } from '../../stories/patternDecorator';
import { HomeHero as HomeHeroPattern } from './HomeHero';

const meta = {
    ...patternMeta,
    title: 'Patterns/Home/Home Hero',
    tags: ['!autodocs'],
    decorators: [withPattern({ hasPadding: false, directory: true })],
} satisfies Meta<PatternArgs>;

export default meta;
type Story = StoryObj<PatternArgs>;

export const HomeHero: Story = {
    render: () => <HomeHeroPattern />,
};
