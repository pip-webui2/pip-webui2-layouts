import { Component, ElementRef, OnInit } from '@angular/core';
import { addResizeListener } from '../pip-webui2-layouts';
import { ObservableMedia } from "@angular/flex-layout";

@Component({
	selector: 'tiles-layout-example',
    templateUrl: 'tiles-layout-example.component.html',
    styleUrls: ['./tiles-layout-example.component.scss']
})
export class TilesLayoutExampleComponent implements OnInit {
    public tiles = [];

    constructor(
        public media: ObservableMedia
    ) { 

    }

    ngOnInit() { 
        this.createTiles();

        // setTimeout(() => {
        //     //this.tiles = [];

        //     this.createTiles();
        // }, 2000);

        // setTimeout(() => {
        //     //this.tiles = [];

        //     this.createTiles();
        // }, 4000);

        // setTimeout(() => {
        //     //this.tiles = [];

        //     this.createTiles();
        // }, 6000);
    }

    private createTiles() {
        for (let i = 0; i < 6; i++) {
            this.tiles.push({ title: 'Tile number ' + i });
        }
    }
}