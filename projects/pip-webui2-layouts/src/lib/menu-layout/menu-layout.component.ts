import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'pip-menu-layout',
    styleUrls: ['./menu-layout.component.scss'],
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    // tslint:disable-next-line:no-host-metadata-property
    host: {
        'class': 'pip-menu-layout',
        '[class.pip-single-content]': 'single'
    }
})
export class PipMenuLayoutComponent {
    static ngAcceptInputType_single: BooleanInput;

    private _single = false;

    @Input()
    get single(): boolean { return this._single; }
    set single(value) {
        this._single = coerceBooleanProperty(value);
        this.cd.markForCheck();
    }

    constructor(private cd: ChangeDetectorRef) { }
}
