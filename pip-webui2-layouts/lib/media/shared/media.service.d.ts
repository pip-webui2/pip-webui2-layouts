import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { MediaMainChange } from './media-main-change.model';
export declare class PipMediaService {
    private media;
    constructor(media: MediaObserver);
    private mainLayoutBreakpoints;
    private mainChange$;
    activate(): void;
    private updateBodyLayoutBreakpoints;
    updateMainLayoutBreakpoints(width: number): void;
    private setMainLayoutBreakpoints;
    private _isMainInclude;
    asObservableMain(): Observable<MediaMainChange>;
    isMainActive(alias: any): any;
}
