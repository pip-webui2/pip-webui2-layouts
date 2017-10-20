import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from "@angular/flex-layout";

@Component({
	selector: 'main-menu-layout-example',
	templateUrl: 'main-menu-layout-example.component.html',
	styleUrls: ['../tiles-layout-example/tiles-layout-example.component.scss']
})
export class MainMenuLayoutExampleComponent implements OnInit {
	public isSingle: boolean = false;
	public list: any[] = [];
	public selectedIndex: number = 0;
	public tiles = [];

	constructor(
		public media: ObservableMedia
	) { }

	public navLinks: any[] = [
		{ label: 'Document' },
		{ label: 'Tiles' }
	];

	public onLinkClick(index) {
		this.selectedIndex = index;
	}

	ngOnInit() {
		this.generateList();
		this.createTiles();
	}

	private generateList() {
		for (let i = 0; i < 50; i++) {
			this.list.push({ title: 'Item ' + i });
		}
	}

	private createTiles() {
        for (let i = 0; i < 6; i++) {
            this.tiles.push({ title: 'Tile number ' + i });
        }
    }
}