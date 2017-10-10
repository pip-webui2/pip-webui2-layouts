import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { BREAKPOINTS, MediaChange, ObservableMedia } from "@angular/flex-layout";

@Injectable()
export class PipMediaService {
    constructor(
        private media: ObservableMedia
    ) { }

    public activate() {
        this.media.asObservable().subscribe((change: MediaChange) => {
            let body = document.body;
            _.each(this.media['breakpoints'].aliases, (alias: any) => {
                body.classList[this.media.isActive(alias) ? 'add' : 'remove']('pip-' + alias);
            });
        });
    }
}