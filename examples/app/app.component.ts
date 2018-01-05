import { Component, ChangeDetectorRef, OnInit, AfterViewInit } from '@angular/core';
import { PipMediaService, PipSidenavService, PipRightnavService, MediaMainChange } from './pip-webui2-layouts';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ActivatedRoute, Router } from '@angular/router';

import { PipThemesService, Theme } from 'pip-webui2-themes';

import * as _ from 'lodash';

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
    private themesService: PipThemesService
  ) {
    media.activate();
    this.generateList();

    this.themes = this.themesService.themes;
    this.selectTheme(this.themesService.themes[0]);
  }

  private selectTheme(selectedTheme) {

    this.themesService.selectedTheme = selectedTheme;
    this.selectedTheme = selectedTheme;
  }

  public ngOnInit() {
    this.media.asObservableMain().subscribe((change: MediaMainChange) => {
      let isMenu = change.aliases.includes('xs') || change.aliases.includes('sm');
      this._showIcon$.next(isMenu ? 'menu' : 'app');
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
  public themes: Theme[];
  public selectedTheme: Theme;
  public onBackClick: Function = null;

  private _list: any[] = [
    {name: 'Media query', id: 'media', route: 'media', icon: 'visibility'},
    {name: 'Document', id: 'document', route: 'document', icon: 'description'},
    {name: 'Tiles', id: 'tiles', route: 'tiles', icon: 'view_module'},
    {name: 'Menu', id: 'menu', route: 'menu', icon: 'view_quilt'},
    {name: 'Card', id: 'card', route: 'card', icon: 'view_array'},
    {name: 'Scrollable', id: 'scrollable', route: 'scrollable', icon: 'view_day'}
  ];

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

  public onThemeClick(theme) {
      this.selectTheme(theme);
  }

  private generateList() {
    this.list = this._list;
  }

  private setListIndex() {
    let url = this.router.url;

    let index = _.findIndex(this.list, (item) => {
      return url.includes(item.route);
    });

    if (index > -1 && this.list.length > 0) this.listIndex = index;
  }
}
