import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PipThemesService, Theme } from 'pip-webui2-themes';
import { PipMediaService, PipSidenavStartService, PipSidenavEndService } from 'pip-webui2-layouts';
import { Observable, BehaviorSubject } from 'rxjs';

class NavigationListItem {
  public name: string;
  public route: string;
  public icon: string;
}

class NavigationListGroup {
  public name: string;
  public items: NavigationListItem[];
}

@Component({
  selector: 'pip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _showIcon$: BehaviorSubject<string> = new BehaviorSubject<string>('menu');

  public themes: Theme[];
  public theme: Theme;
  public languages = ['en', 'ru'];
  public language: string;
  public onBackClick: Function = null;
  public listIndex = 0;

  public groups: NavigationListGroup[] = [
    {
      name: 'MENU.BEHAVIORS.TITLE',
      items: [
        { name: 'MENU.BEHAVIORS.MEDIA', route: 'media', icon: 'visibility' },
        { name: 'MENU.BEHAVIORS.FX', route: 'fx', icon: 'feedback' },
        { name: 'MENU.BEHAVIORS.NAVIGATION', route: 'navigation', icon: 'navigation' },
        { name: 'MENU.BEHAVIORS.TABS', route: 'tabs', icon: 'view_week' }
      ]
    },
    {
      name: 'MENU.LAYOUTS.TITLE',
      items: [
        { name: 'MENU.LAYOUTS.CARD', route: 'card', icon: 'view_array' },
        { name: 'MENU.LAYOUTS.DOCUMENT', route: 'document', icon: 'description' },
        { name: 'MENU.LAYOUTS.MENU', route: 'menu', icon: 'view_quilt' },
        { name: 'MENU.LAYOUTS.SCROLLABLE', route: 'scrollable', icon: 'view_day' },
        { name: 'MENU.LAYOUTS.TILES', route: 'tiles', icon: 'view_module' }
      ]
    }
  ];

  public constructor(
    public media: PipMediaService,
    public sidenav: PipSidenavStartService,
    private rightnav: PipSidenavEndService,
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
}
