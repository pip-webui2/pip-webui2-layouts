import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { coerceBooleanProperty, BooleanInput } from '@angular/cdk/coercion';

@Component({
    selector: 'pip-card-layout',
    template: '<div class="pip-card-container"><ng-content></ng-content></div>',
    styleUrls: ['./card-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // tslint:disable-next-line:no-host-metadata-property
    host: {
        'class': 'pip-card-layout',
        '[class.pip-transparent-card]': 'transparent'
    }
})
export class PipCardLayoutComponent {
    static ngAcceptInputType_transparent: BooleanInput;

    private _transparent = false;

    @Input()
    get transparent(): boolean { return this._transparent; }
    set transparent(value) {
        this._transparent = coerceBooleanProperty(value);
        this.cd.markForCheck();
    }

    constructor(private cd: ChangeDetectorRef) { }
}
