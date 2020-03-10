import { Component, OnInit, OnDestroy } from '@angular/core';
import { PipSidenavStartService } from 'pip-webui2-layouts';

@Component({
  selector: 'pip-card-layout-example',
  templateUrl: './card-layout-example.component.html',
  styleUrls: ['./card-layout-example.component.scss']
})
export class CardLayoutExampleComponent implements OnInit, OnDestroy {

  private sidenavActive = false;
  public isTransparent = false;
  public text = false;

  constructor(
    public sidenav: PipSidenavStartService
  ) { }

  ngOnInit() {
    this.sidenav.active = this.sidenavActive;
  }

  ngOnDestroy() {
    this.sidenav.active = true;
  }

  public onSidenavClick() {
    this.sidenavActive = !this.sidenavActive;
    this.sidenav.active = this.sidenavActive;
  }

}
