import { Component } from '@angular/core';
import { PipMediaService, PipSidenavService, PipAuxPanelService, MediaMainChange } from './pip-webui2-layouts';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare var _;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public media: PipMediaService,
    public globalMedia: ObservableMedia,
    public sidenav: PipSidenavService,
    private auxPanel: PipAuxPanelService
  ) {
    media.activate();
    this.generateList();
    this.media.asObservableMain().subscribe((change: MediaMainChange) => {
        console.log('update main aliases', change);
        this._showIcon$.next(change.aliases.includes('xs') || change.aliases.includes('md'));
        console.log('this._showIcon$', this._showIcon$.value);
        this._icon$.next(change.aliases.includes('xs') ? 'menu' : this.sidenav.small ? 'chevron_right' : 'chevron_left');
    });

    this.sidenav.small$.subscribe((small) => {
       this._icon$.next(small ? 'chevron_right' : 'chevron_left');
    });
  }
  
  public list: any[] = [];

  private _list: any[] = [
    // {
    //   name: 'Main', id: 'main', route: 'main'
    // },
    {
      name: 'Document', id: 'document', route: 'document'
    },
    {
      name: 'Tiles', id: 'tiles', route: 'tiles'
    },
    {
      name: 'Menu', id: 'menu', route: 'menu'
    }
  ];
  private _showIcon$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _icon$: BehaviorSubject<string> = new BehaviorSubject<string>('menu')
  
  public get icon$(): Observable<string> {
    return this._icon$;
  }

  public get showIcon$(): Observable<boolean> {
    console.log('this._showIcon$', this._showIcon$.value);
    return this._showIcon$;
  }

// media.isMainActive('xs') ? 'menu' : sidenav.small ? 'chevron_right' : 'chevron_left'
  public listIndex: number = 0;

  public onListItemIndexChanged(index: number) {
    this.listIndex - index;
    this.sidenav.closeMobileNav();
  }

  public onMenuClick() {
    this.sidenav.toggleNav();
  }

  public onInfoClick() {
    this.auxPanel.toggleAux();
  }

  private generateList() {
    for (let i = 0; i < 9; i++) {
      _.each(this._list, (item) => {
        let copy = _.clone(item);
        copy.name += ' ' + i;
        this.list.push(copy);
      });
    }
  }

  
}
