import { ChangeDetectorRef, Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { findIndex } from 'lodash';
import { PipThemesService, Theme } from 'pip-webui2-themes';
import { PipMediaService, PipSidenavService, PipRightnavService } from 'pip-webui2-layouts';
import { Observable, BehaviorSubject } from 'rxjs';

import { ExmapleListItem } from './examples-list/shared/ExampleListItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  private _showIcon$: BehaviorSubject<string> = new BehaviorSubject<string>('menu');

  public themes: Theme[];
  public theme: Theme;
  public languages = ['en', 'ru'];
  public language: string;
  public onBackClick: Function = null;
  public listIndex = 0;

  public list: ExmapleListItem[] = [
    { name: 'Media query', id: 'media', route: 'media', icon: 'visibility' },
    { name: 'Document', id: 'document', route: 'document', icon: 'description' },
    { name: 'FX layout', id: 'fx', route: 'fx', icon: 'feedback' },
    { name: 'Tiles', id: 'tiles', route: 'tiles', icon: 'view_module' },
    { name: 'Menu', id: 'menu', route: 'menu', icon: 'view_quilt' },
    { name: 'Card', id: 'card', route: 'card', icon: 'view_array' },
    { name: 'Scrollable', id: 'scrollable', route: 'scrollable', icon: 'view_day' },
    { name: 'Tabs', id: 'tabs', route: 'tabs', icon: 'view_week' },
    { name: 'Navigation', id: 'navigation', route: 'navigation', icon: 'navigation' },
  ];

  public constructor(
    public media: PipMediaService,
    public sidenav: PipSidenavService,
    private rightnav: PipRightnavService,
    private translate: TranslateService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private themesService: PipThemesService
  ) {
    this.themes = this.themesService.themesArray;
    this.theme = this.themesService.currentTheme;

    // Translations init
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    this.language = this.translate.currentLang;
  }

  public ngOnInit() { }

  public ngAfterViewInit() {
    setTimeout(() => {
      this.setListIndex();
    });
  }

  public changeLanguage(language: string) {
    this.language = language;
    this.translate.use(language);
  }

  public changeTheme(theme: Theme) {
    this.theme = theme;
    this.themesService.selectTheme(theme.name);
  }

  public get showIcon$(): Observable<string> {
    return this._showIcon$;
  }

  public onListItemIndexChanged(index: number) {
    this.listIndex = index;
    this.sidenav.close();
  }

  public set showIcon(icon: string) {
    this._showIcon$.next(icon);
  }

  public get showIcon(): string {
    return this._showIcon$.getValue();
  }

  public onMenuClick() {
    this.sidenav.toggle();
  }

  public onInfoClick() {
    const v = this._showIcon$.value;
    this.rightnav.toggle();
    this._showIcon$.next(v);
  }

  private setListIndex() {
    const url = this.router.url;

    const index = findIndex(this.list, (item) => {
      return url.includes(item.route);
    });

    if (index > -1 && this.list.length > 0) { this.listIndex = index; }
  }
}
