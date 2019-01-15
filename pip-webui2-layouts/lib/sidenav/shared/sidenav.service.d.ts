import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material';
import { PipMediaService } from '../../media/shared/media.service';
export declare class PipSidenavService {
    private media;
    _floatingSidenav: MatSidenav;
    _fixedSidenav: MatSidenav;
    _universalSidenav: MatSidenav;
    private _mode$;
    private _opened$;
    private _floatingSidenavAliases;
    private _universalSidenavAliases;
    private _small;
    private _small$;
    private _active$;
    private _isUniversal$;
    constructor(media: PipMediaService);
    floatingSidenavAliases: string[];
    small: boolean;
    readonly small$: Observable<boolean>;
    universalSidenav: MatSidenav;
    universalSidenavAliases: string[];
    isUniversal: boolean;
    floatingSidenav: MatSidenav;
    fixedSidenav: MatSidenav;
    mode: string;
    readonly mode$: Observable<string>;
    opened: boolean;
    readonly opened$: Observable<boolean>;
    readonly active$: Observable<boolean>;
    active: boolean;
    isActive(): boolean;
    private toggleSmall;
    toggleNav(sidenav?: MatSidenav): void;
    toggleOpened(): void;
    openNav(sidenav?: MatSidenav): void;
    closeNav(sidenav?: MatSidenav): void;
    toggleFloatingNav(): void;
    openFloatingNav(): void;
    closeFloatingNav(): void;
    toggleFixedNav(): void;
    openFixedNav(): void;
    closeFixedNav(): void;
    toggleUniversavNav(): void;
    openUniversavNav(): void;
    closeUniversavNav(): void;
    changeStateNav(sidenav?: MatSidenav): void;
    isUniversalFloating(): boolean;
    isFloating(): boolean;
}
