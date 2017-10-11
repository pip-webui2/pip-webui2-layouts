import { Component } from '@angular/core';
import { PipMediaService } from './pip-webui2-layouts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    media: PipMediaService
  ) {
    media.activate();
  }

  public list: any[] = [
    {
      name: 'Main', id: 'main', route: 'main'
    },
    {
      name: 'Document', id: 'document', route: 'document'
    },
    {
      name: 'Tiles', id: 'tiles', route: 'tiles'
    }
  ];

  public listIndex: number = 0;

  public onListItemIndexChanged(index: number) {
    this.listIndex - index;
  }
}
