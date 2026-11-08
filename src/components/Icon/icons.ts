import {
    ArrowRight,
    ChevronDown,
    CirclePlus,
    MapPin,
    Menu,
    MessageCircleMore,
    MessagesSquare,
    Minus,
    Plus,
    Search,
    Star,
    X,
} from 'lucide-react';

// Only the icons the designs use. Swapping icon libraries means changing this file alone.
export const icons = {
    'arrow-right': ArrowRight,
    'chevron-down': ChevronDown,
    'circle-plus': CirclePlus,
    'map-pin': MapPin,
    menu: Menu,
    'message-circle-more': MessageCircleMore,
    'messages-square': MessagesSquare,
    minus: Minus,
    plus: Plus,
    search: Search,
    star: Star,
    x: X,
};

export type IconName = keyof typeof icons;
