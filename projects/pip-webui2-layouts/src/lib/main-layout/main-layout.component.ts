import { Component, Renderer, ElementRef, Input, OnInit, AfterViewInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Observable, BehaviorSubject } from 'rxjs';

import { MatSidenav } from '@angular/material';
import { addResizeListener } from '../media/resize-layout.function';
import { PipMediaService } from '../media/shared/media.service';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';

@Component({
    selector: 'pip-main-layout',
    templateUrl: 'main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class PipMainLayoutComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() public pipContainer;
    @ViewChild('fixedSidenav') sidenav: MatSidenav;
    @ViewChild('fixedRightnav') rightnav: MatSidenav;

    private listener: any;
    private element: any;

    private _opened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public small$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private renderer: Renderer,
        private elRef: ElementRef,
        private cd: ChangeDetectorRef,
        private mainMedia: PipMediaService,
        private sidenavService: PipSidenavService,
        private rightnavService: PipRightnavService,
        private media: ObservableMedia
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-main-layout', true);
        this.listener = () => { this.onResize(); };
    }

    public get opened$(): Observable<boolean> {
        return this._opened$;
    }

    public get active$(): Observable<boolean> {
        return this.sidenavService.active$;
    }

    public ngOnInit() {
        if (this.pipContainer != null) {
            const firstSym = this.pipContainer.substr(0, 1);

            const element: any = firstSym === '#'
                ? document.getElementById(this.pipContainer.substring(1, this.pipContainer.length))
                : firstSym === '.'
                    ? document.getElementsByClassName(this.pipContainer.substring(1, this.pipContainer.length))
                    : document.getElementsByTagName(this.pipContainer);
            this.element = firstSym === '#' ? element : element.length > 0 ? element[0] : this.elRef.nativeElement;
        } else {
            this.element = this.elRef.nativeElement;
        }

        addResizeListener(this.element, this.listener);
        setTimeout(() => {
            this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth);
        });
        this.rightnavService.opened$.subscribe((opened: boolean) => {
            if (this.rightnavService._fixedRightnav) { this.onResize(); }
            this.cd.detectChanges();
        });

        this.media.asObservable().subscribe((change: MediaChange) => {
            if (this.rightnavService.onlyFloating === true) { return; }

            if (this.sidenavService.floatingSidenavAliases.includes(change.mqAlias)) {
                if (this.rightnavService.fixedRightnav
                    && this.rightnavService.fixedRightnav.opened
                    && this.rightnavService.floatingRightnav) {
                    this.rightnavService.closeFixedRightnav();
                    this.rightnavService.floatingRightnav.open();
                }
            } else {
                if (this.rightnavService.floatingRightnav && this.rightnavService.floatingRightnav.opened) {
                    if (this.rightnavService.fixedRightnav) { this.rightnavService.fixedRightnav.open(); }
                    this.rightnavService.floatingRightnav.close();
                }
            }
        });

        this.sidenavService.small$.subscribe((small) => {
            this.small$.next(small);
            this.cd.detectChanges();
        });
    }

    public ngOnDestroy() {
        removeEventListener(this.element, this.listener);
    }

    ngAfterViewInit() {
        this.sidenavService.fixedSidenav = this.sidenav;
        this.rightnavService.fixedRightnav = this.rightnav;
        this.onResize();
    }

    private onResize() {
        const rightnavWidth = this.rightnavService._fixedRightnav && this.rightnavService._fixedRightnav.opened
            ? this.rightnavService._fixedRightnav['_elementRef'].nativeElement.offsetWidth
            : 0;
        this.mainMedia.updateMainLayoutBreakpoints(this.element.offsetWidth - rightnavWidth);
    }
}
