import { PipSidenavPosition } from './PipSidenavPosition';
import { MatDrawerMode } from '@angular/material/sidenav';

export class PipSidenavView {
    name: string;
    position: PipSidenavPosition;
    alias?: string | string[];
    mode?: MatDrawerMode;
    collapseable?: boolean;
    fixedInViewport?: boolean;
    fixedTopGap?: number;
    fixedBottomGap?: number;
    width?: number;
    widthCollapsed?: number;
}
