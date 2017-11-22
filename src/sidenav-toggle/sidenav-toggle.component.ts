import * as _ from 'lodash';
import { Component, OnInit, Input, Output, ChangeDetectorRef, Renderer, ElementRef } from '@angular/core';
import { PipMediaService } from '../media/shared/media.service';
import { MediaMainChange } from '../media/shared/media-main-change.model';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'pip-sidenav-toggle',
    templateUrl: 'sidenav-toggle.component.html',
    styleUrls: ['./sidenav-toggle.component.scss']
})
export class PipSidenavToggleComponent implements OnInit {
    private _defaultAliases: string[] = ['lg'];
    private _aliases: string[] = this._defaultAliases;

    @Input() set aliases(aliases: string[] | string) {
        if (typeof aliases === 'string') {
            this._aliases = [aliases];
        } else {
            this._aliases = aliases;
        }
    }

    constructor(
        public media: PipMediaService,
        public sidenav: PipSidenavService,
        private cd: ChangeDetectorRef,
        private renderer: Renderer,
        private elRef: ElementRef
    ) { }

    private _icon$: BehaviorSubject<string> = new BehaviorSubject<string>('chevron_left')

    public get icon$(): Observable<string> {
        return this._icon$;
    }

    ngOnInit() {
        this.media.asObservableMain().subscribe((change: MediaMainChange) => {
            let isIntersection = _.intersection(change.aliases, this._aliases).length > 0;

            this.elRef.nativeElement.classList[isIntersection ? 'add' : 'remove']('show');
        });

        this.sidenav.small$.subscribe((small) => {
            this._icon$.next(small ? 'chevron_right' : 'chevron_left');
            this.cd.detectChanges();
        });
    }

    public toggleClick() {
        this.sidenav.toggleFixedNav();
    }
}