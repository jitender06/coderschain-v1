import React from 'react';

interface HighlighterProps {
    children: React.ReactNode;
    text?: string;
    className?: string;
    action?: 'underline' | 'highlight' | 'none';
    color?: string;
}

export const Highlighter = ({ children, className, action, color }: HighlighterProps) => {
    const style: React.CSSProperties = {};
    if (action === 'underline' && color) {
        style.textDecoration = 'underline';
        style.textDecorationColor = color;
    } else if (action === 'highlight' && color) {
        style.backgroundColor = color;
    }

    return (
        <span className={className} style={style}>
            {children}
        </span>
    );
};
