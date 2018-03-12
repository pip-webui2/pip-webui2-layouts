import { BreakPoint } from "@angular/flex-layout";

export const PIP_BREAKPOINTS: BreakPoint[] = [
    {
        alias: "xs",
        mediaQuery: "(max-width: 639px)",
        overlapping: false,
        suffix: ""
    },
    {
        alias: "gt-xs",
        mediaQuery: "(min-width: 640px)",
        overlapping: true,
        suffix: ""
    },
    {
        alias: "lt-sm",
        mediaQuery: "(max-width: 639px)",
        overlapping: true,
        suffix: ""
    },
    {
        alias: "sm",
        mediaQuery: "(min-width: 640px) and (max-width: 715px)",
        overlapping: false,
        suffix: ""
    },
    {
        alias: "gt-sm",
        mediaQuery: "(min-width: 716px)",
        overlapping: true,
        suffix: ""
    },
    {
        alias: "lt-md",
        mediaQuery: "(max-width: 715px)",
        overlapping: true,
        suffix: ""
    },
    {
        alias: "md",
        mediaQuery: "(min-width: 716px) and (max-width: 1024px)",
        overlapping: false,
        suffix: ""
    },
    {
        alias: "gt-md",
        mediaQuery: "(min-width: 1025px)",
        overlapping: true,
        suffix: ""
    },
    {
        alias: "lt-lg",
        mediaQuery: "(max-width: 1024px)",
        overlapping: true,
        suffix: ""
    },
    {
        alias: "lg",
        mediaQuery: "(min-width: 1025px) and (max-width: 1439px)",
        overlapping: false,
        suffix: ""
    },
    {
        alias: "gt-lg",
        mediaQuery: "(min-width: 1440px)",
        overlapping: true,
        suffix: ""
    },
    {
        alias: "lt-xl",
        mediaQuery: "(max-width: 1439px)",
        overlapping: true,
        suffix: ""
    },
    {
        alias: "xl",
        mediaQuery: "(min-width: 1440px) and (max-width: 5000px)",
        overlapping: false,
        suffix: ""
    },
    {
        alias: "document-lt-lg",
        mediaQuery: "(max-width: 1250px)",
        overlapping: true,
        suffix: ""
    }
];