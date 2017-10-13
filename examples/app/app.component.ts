import { Component } from '@angular/core';
import { PipMediaService, PipSidenavService, PipAuxPanelService } from './pip-webui2-layouts';
import { ObservableMedia } from "@angular/flex-layout";

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
  }
  
  public list: any[] = [];

  private _list: any[] = [
    {
      name: 'Main', id: 'main', route: 'main'
    },
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
    for (let i = 0; i < 8; i++) {
      _.each(this._list, (item) => {
        let copy = _.clone(item);
        copy.name += ' ' + i;
        this.list.push(copy);
      });
    }
  }

  
}
