import { InjectionToken } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

export enum PipRightnavPlacement {
    Root = 'root',
    Main = 'main'
}

export class PipRightnavView {
    name: string;
    placement: PipRightnavPlacement;
    alias?: string;
    mode?: MatDrawerMode;
    collapseable?: boolean;
    fixedInViewport?: boolean;
    fixedTopGap?: number;
    fixedBottomGap?: number;
    width?: number;
    widthCollapsed?: number;
}

export class PipRightnavConfig {
    opened?: boolean;
    views?: PipRightnavView[];
}

export const PIP_RIGHTNAV_CONFIG = new InjectionToken<PipRightnavConfig>('PipWebUI2 rightnav config');
