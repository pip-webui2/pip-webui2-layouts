import { OnInit, Renderer, ElementRef, ChangeDetectorRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { PipSidenavService } from '../sidenav/shared/sidenav.service';
import { PipRightnavService } from '../rightnav/shared/rightnav.service';
import { MediaObserver } from '@angular/flex-layout';
export declare class PipRootLayoutComponent implements OnInit, AfterViewInit {
    private sidenavService;
    private rightnavService;
    private renderer;
    private elRef;
    private media;
    private cd;
    sidenav: MatSidenav;
    rightnav: MatSidenav;
    mode$: BehaviorSubject<string>;
    constructor(sidenavService: PipSidenavService, rightnavService: PipRightnavService, renderer: Renderer, elRef: ElementRef, media: MediaObserver, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private initMode;
}
