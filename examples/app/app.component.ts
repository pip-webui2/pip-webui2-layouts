import { Component, ChangeDetectorRef, OnInit, AfterViewInit } from '@angular/core';
import { PipMediaService, PipSidenavService, PipRightnavService, MediaMainChange } from './pip-webui2-layouts';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ActivatedRoute, Router } from '@angular/router';

import { PipNavService } from 'pip-webui2-nav';

declare var _;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    public media: PipMediaService,
    public globalMedia: ObservableMedia,
    public sidenav: PipSidenavService,
    private rightnav: PipRightnavService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private navService: PipNavService
  ) {
    media.activate();
    this.generateList();

    this.navService.showTitle('Layouts');
    this.navService.showNavIcon({ icon: 'view_carousel' });
    this.navService.showPrimaryActions({ actions: [{ icon: 'info', click: () => {
      this.onInfoClick();
    } }] });
    this.navService.showNavMenu(this._navMenuConfig);

  }

  public ngOnInit() {
    this.media.asObservableMain().subscribe((change: MediaMainChange) => {
      let isMenu = change.aliases.includes('xs') || change.aliases.includes('sm');
      this.navService.showNavIcon({ 
        icon: isMenu ? 'menu' : 'view_carousel',
        action: isMenu ? () => { this.onMenuClick(); } : null
      });
    });

    this.sidenav.small$.subscribe((small) => {
      this.cd.detectChanges();
    });
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      this.setListIndex();
    });
  }

  public list: any[] = [];
  public onBackClick: Function = null;

  private _navMenuConfig: any = {
    sections: [
      {
        name: 'services',
        title: 'Services',
        links: [
          { name: 'Media query', title: 'Media query', icon: 'visibility', url: 'media' },
        ]
      },
      {
        name: 'layouts',
        title: 'Layouts',
        links: [
          { name: 'Documnet', title: 'Document', icon: 'description', url: 'document' },
          { name: 'Tiles', title: 'Tiles', icon: 'view_module', url: 'tiles' },
          { name: 'Menu', title: 'Menu', icon: 'view_quilt', url: 'menu' },
          { name: 'Card', title: 'Card', icon: 'view_array', url: 'card' },
          { name: 'Scrollable', title: 'Scrollable', icon: 'view_day', url: 'scrollable' }
        ]
      }
    ]
  };

  private _showIcon$: BehaviorSubject<string> = new BehaviorSubject<string>('app');

  public get showIcon$(): Observable<string> {
    return this._showIcon$;
  }

  public listIndex: number = 0;

  public onListItemIndexChanged(index: number) {
    this.listIndex = index;
    this.sidenav.closeFloatingNav();
  }

  public set showIcon(icon: string) {
    this._showIcon$.next(icon);
  }

  public get showIcon(): string {
    return this._showIcon$.getValue();
  }

  public onMenuClick() {
    this.sidenav.toggleNav();
  }

  public onInfoClick() {
    let v = this._showIcon$.value;
    this.rightnav.toggleRightnav();
    this._showIcon$.next(v);
  }

  private generateList() {
    //this.list = this._list;
  }

  private setListIndex() {
    let url = this.router.url;

    let index = _.findIndex(this.list, (item) => {
      return url.includes(item.route);
    });

    if (index > -1 && this.list.length > 0) this.listIndex = index;
  }
}
