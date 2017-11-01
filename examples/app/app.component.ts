import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { PipMediaService, PipSidenavService, PipRightnavService, MediaMainChange } from './pip-webui2-layouts';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare var _;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public media: PipMediaService,
    public globalMedia: ObservableMedia,
    public sidenav: PipSidenavService,
    private rightnav: PipRightnavService,
    private cd: ChangeDetectorRef
  ) {
    media.activate();
    this.generateList();
  }

  public ngOnInit() {
    this.media.asObservableMain().subscribe((change: MediaMainChange) => {
      this._showIcon$.next(change.aliases.includes('xs'));
      this.cd.detectChanges();
    });

    this.sidenav.small$.subscribe((small) => {
      this.cd.detectChanges();
    });
  }

  public list: any[] = [];

  private _list: any[] = [
    {
      name: 'Media query', id: 'media', route: 'media', icon: 'visibility'
    },
    {
      name: 'Document', id: 'document', route: 'document', icon: 'description'
    },
    {
      name: 'Tiles', id: 'tiles', route: 'tiles', icon: 'view_module'
    },
    {
      name: 'Menu', id: 'menu', route: 'menu', icon: 'view_quilt'
    },
    {
      name: 'Card', id: 'card', route: 'card', icon: 'view_array'
    },
    {
      name: 'Scrollable', id: 'scrollable', route: 'scrollable', icon: 'view_day'
    }
  ];
  private _showIcon$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public get showIcon$(): Observable<boolean> {
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
    this.rightnav.toggleRightnav();
  }

  private generateList() {
    this.list = this._list;
  }


}
