import { BreakPoint } from '@angular/flex-layout';

export const PIP_BREAKPOINTS: BreakPoint[] = [
    {
        alias: 'xs',
        mediaQuery: '(min-width: 0px) and (max-width: 639px)',
        overlapping: false,
    },
    {
        alias: 'gt-xs',
        mediaQuery: '(min-width: 640px)',
        overlapping: true,
    },
    {
        alias: 'lt-sm',
        mediaQuery: '(max-width: 639px)',
        overlapping: true,
    },
    {
        alias: 'sm',
        mediaQuery: '(min-width: 640px) and (max-width: 715px)',
        overlapping: false,
    },
    {
        alias: 'gt-sm',
        mediaQuery: '(min-width: 716px)',
        overlapping: true,
    },
    {
        alias: 'lt-md',
        mediaQuery: '(max-width: 715px)',
        overlapping: true,
    },
    {
        alias: 'md',
        mediaQuery: '(min-width: 716px) and (max-width: 1024px)',
        overlapping: false,
    },
    {
        alias: 'gt-md',
        mediaQuery: '(min-width: 1025px)',
        overlapping: true,
    },
    {
        alias: 'lt-lg',
        mediaQuery: '(max-width: 1024px)',
        overlapping: true,
    },
    {
        alias: 'lg',
        mediaQuery: '(min-width: 1025px) and (max-width: 1439px)',
        overlapping: false,
    },
    {
        alias: 'gt-lg',
        mediaQuery: '(min-width: 1440px)',
        overlapping: true,
    },
    {
        alias: 'lt-xl',
        mediaQuery: '(max-width: 1439px)',
        overlapping: true,
    },
    {
        alias: 'xl',
        mediaQuery: '(min-width: 1440px) and (max-width: 5000px)',
        overlapping: false,
    },
    {
        alias: 'document-lt-lg',
        mediaQuery: '(max-width: 1250px)',
        overlapping: true,
    },
    {
        alias: 'document-lg',
        mediaQuery: '(min-width: 1250px)',
        overlapping: false,
    }
];
