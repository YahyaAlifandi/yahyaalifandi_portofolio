import React from 'react';

interface SelectionHighlightProps {
  text: string;
}

/**
 * Renders highlighted specialization text with progressive selection
 * animation (1% -> 100% -> 1% ping-pong) + blinking caret.
 *
 * Accessibility:
 * - Base text remains selectable & readable by screen readers.
 * - Overlay is decorative (aria-hidden).
 */
export const SelectionHighlight: React.FC<SelectionHighlightProps> = ({ text }) => {
  return (
    <span
      className="selection-highlight-container text-blue-600 bg-blue-50/90 px-2 py-0.5 rounded border border-blue-200/70 shadow-xs"
      role="mark"
      aria-label={text}
    >
      {/* Base text — defines natural width & is screen-reader readable */}
      <span className="font-bold select-none">{text}</span>

      {/* Decorative progressive selection overlay */}
      <span className="selection-highlight-overlay" aria-hidden="true">
        <span className="font-bold px-2 py-0.5 text-white">{text}</span>
        <span className="selection-cursor-caret" />
      </span>
    </span>
  );
};
