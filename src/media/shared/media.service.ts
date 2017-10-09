import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {MediaChange, ObservableMedia} from "@angular/flex-layout";

@Injectable()
export class PipMediaService {
    constructor(
        private media: ObservableMedia
    ) { }

    private classes: any = {
        xs: ['pip-global-xs'],
        sm: ['pip-global-gt-xs', 'pip-global-sm'],
        md: ['pip-global-gt-xs', 'pip-global-gt-sm', 'pip-global-md'],
        lg: ['pip-global-gt-xs', 'pip-global-gt-sm', 'pip-global-gt-md', 'pip-global-lg'],
        xl: ['pip-global-gt-xs', 'pip-global-gt-sm', 'pip-global-gt-md', 'pip-global-gt-lg', 'pip-global-xl'],
        all: [
            'pip-global-xs', 
            'pip-global-gt-xs', 
            'pip-global-sm', 
            'pip-global-gt-sm', 
            'pip-global-md',
            'pip-global-gt-md', 
            'pip-global-lg',
            'pip-global-lg', 
            'pip-global-gt-lg', 
            'pip-global-xl'
        ]
    };

    public activate() {
        this.media.asObservable().subscribe((change: MediaChange) => {
            let body = document.body;
            let currentClasses: string[] = this.classes[change.mqAlias];
            _.each(this.classes.all, (name: any) => {
                body.classList[currentClasses.includes(name) ? 'add' : 'remove'](name);
            });
        });
    }
}