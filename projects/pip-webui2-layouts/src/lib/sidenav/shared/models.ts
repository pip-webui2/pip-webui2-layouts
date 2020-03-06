import { InjectionToken } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

export enum PipSidenavPlacement {
    Root = 'root',
    Main = 'main'
}

export class PipSidenavView {
    name: string;
    placement: PipSidenavPlacement;
    alias?: string;
    mode?: MatDrawerMode;
    collapseable?: boolean;
    fixedInViewport?: boolean;
    fixedTopGap?: number;
    fixedBottomGap?: number;
    width?: number;
    widthCollapsed?: number;
}

export class PipSidenavConfig {
    opened?: boolean;
    views?: PipSidenavView[];
}

export const PIP_SIDENAV_CONFIG = new InjectionToken<PipSidenavConfig>('PipWebUI2 sidenav config');
