import { OnInit, ChangeDetectorRef, Renderer, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
export declare class PipSidenavExpanderComponent implements OnInit {
    media: PipMediaService;
    sidenav: PipSidenavService;
    private cd;
    private renderer;
    private elRef;
    private _defaultAliases;
    private _aliases;
    aliases: string[] | string;
    constructor(media: PipMediaService, sidenav: PipSidenavService, cd: ChangeDetectorRef, renderer: Renderer, elRef: ElementRef);
    private _icon$;
    readonly icon$: Observable<string>;
    ngOnInit(): void;
    toggleClick(): void;
}
