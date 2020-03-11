import { Component } from '@angular/core';
import { PipSidenavStartService } from 'pip-webui2-layouts';

@Component({
  selector: 'pip-card-layout-example',
  templateUrl: './card-layout-example.component.html',
  styleUrls: ['./card-layout-example.component.scss']
})
export class CardLayoutExampleComponent {

  private sidenavActive = true;
  public isTransparent = false;
  public text = false;

  constructor(
    public sidenav: PipSidenavStartService
  ) { }

  public onSidenavClick() {
    this.sidenavActive = !this.sidenavActive;
    this.sidenav.active = this.sidenavActive;
  }

}
