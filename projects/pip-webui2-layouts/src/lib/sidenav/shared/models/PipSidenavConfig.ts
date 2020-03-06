import { InjectionToken } from '@angular/core';

import { PipSidenavView } from './PipSidenavView';

export class PipSidenavConfig {
    opened?: boolean;
    views?: PipSidenavView[];
}

export const PIP_SIDENAV_START_CONFIG = new InjectionToken<PipSidenavConfig>('PipWebUI2 sidenav start config');
export const PIP_SIDENAV_END_CONFIG = new InjectionToken<PipSidenavConfig>('PipWebUI2 sidenav start config');
