import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'main-menu-layout-example',
	templateUrl: 'main-menu-layout-example.component.html'
})
export class MainMenuLayoutExampleComponent implements OnInit {
	public isSingle: boolean = false;
	public list: any[] = [];

	ngOnInit() {
		this.generateList();
	 }

	private generateList() {
		for(let i = 0; i < 50; i++) {
			this.list.push({ title: 'Item ' + i });
		}
	}
}