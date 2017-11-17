import { Component, OnInit, Host } from '@angular/core';
import { ObservableMedia } from "@angular/flex-layout";
import { PipMediaService } from '../pip-webui2-layouts';
import { AppComponent } from '../app.component';

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
	public itemIndex: number = 0;
	private _prevIcon: string;

	constructor(
		public media: PipMediaService,
		@Host() private parent: AppComponent
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
	
	public onItemClick(index) {
		this.itemIndex = index;
		if (this.media.isMainActive('xs')) {
			this.isSingle = true;
			this._prevIcon = this.parent.showIcon;
			this.parent.showIcon = 'back';
			this.parent.onBackClick = () => {
				this.isSingle = false;
				this.parent.onBackClick = null;
				this.parent.showIcon = this._prevIcon;
			}
		}
	}
}