import { NavigationExtras } from '@angular/router';

export class PipAppbarTab {
    name: string | (() => string);
    route: {
        path: string[],
        extras?: NavigationExtras
    };
    isDefault?: boolean;
}
