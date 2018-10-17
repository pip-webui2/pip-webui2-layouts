import { Component, OnInit } from '@angular/core';
import { PipMediaService } from 'pip-webui2-layouts';

@Component({
  selector: 'app-fx-layout-example',
  templateUrl: './fx-layout-example.component.html',
  styleUrls: ['./fx-layout-example.component.scss']
})
export class FxLayoutExampleComponent implements OnInit {

  constructor(
    public media: PipMediaService
  ) {
    this.media.activate();
    this.media.asObservableMain().subscribe((change) => {
      console.log(this.media.isMainActive('document-lt-lg'));
    });
  }

  ngOnInit() {
  }

}
