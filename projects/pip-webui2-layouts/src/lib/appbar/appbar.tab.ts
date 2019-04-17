import { NavigationExtras } from '@angular/router';

export class PipAppbarTab {
    name: string;
    route: {
        path: string | string[],
        extras?: NavigationExtras
    };
    isDefault?: boolean;
}
