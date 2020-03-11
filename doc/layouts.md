[↑ Main contents](contents.md)

## Contents
* [Root layout](#root-layout)
* [Card layout](#card-layout)
* [Document layout](#document-layout)
* [Menu layout](#menu-layout)
* [Scrollable layout](#scrollable-layout)
* [Tiles layout](#tiles-layout)

## <a id="root-layout"></a>Root layout (`pip-root-layout`)

This layout is basic and should be used at the bootstrap of application. To use this layout you should include `PipRootLayoutModule` into your dependencies and provide html like this:

```html
<pip-root-layout>
  <pip-sidenav-start>
    <!-- Side nav content of application is here -->
  </pip-sidenav-start>
  <pip-sidenav-end>
    <!-- Right nav content of application is here -->
  </pip-sidenav-end>
  <pip-root-header>
    <!-- Header of application is here. It's fixed -->
  </pip-root-header>
  <ng-container>
    <!-- Main content of application is here -->
    <!-- Shadows -->
    <pip-shadow visible="true" attachmentSide="left"></pip-shadow>
    <pip-shadow visible="true" attachmentSide="right"></pip-shadow>
    <!-- For example using document layout -->
    <pip-document-layout toolbar="true">
       <pip-document-content>
           <!-- Document content here -->
       </pip-document-content>
       <pip-document-footer >
           <!-- Document footer here -->
       </pip-document-footer>
    </pip-document-layout>
  </ng-container>
  <pip-root-footer>
      <!-- Applications's footer. It's fixed -->
  </pip-root-footer>
</pip-root-layout>
```

All content is optional and any part could be ignored. List of possible content:
* `pip-sidenav-start` - content for left sidenav;
* `pip-sidenav-end` - content for right sidenav;
* `pip-root-header` - content for header;
* `pip-root-footer` - content for footer;
* Application content should be placed inside `ng-container` or without container at all.

## <a id="card-layout"></a>Card layout (`pip-card-layout`)

This layout is a single card in the center. To use this layout you should include `PipCardLayoutModule`.

Inputs:
* `transparent` - set transparency for card.

Example:
```html
<pip-card-layout [transparent]="transparent">
    <!-- Card content -->
</pip-card-layout>
```

## <a id="document-layout"></a>Document layout (`pip-document-layout`)

This layout restricts content size in large screens. To use this layout you should include `PipDocumentLayoutModule`.

Inputs:
* `toolbar` - set additional margin if there's some kind of toolbar in parent layouts.

Possible content:
* `pip-document-content` - content;
* `pip-document-footer` - footer content, fixed.

Example:
```html
<pip-document-layout [toolbar]="toolbar">
    <pip-document-content>
        <!-- Content -->
    </pip-document-content>
    <pip-document-footer>
        <!-- Fixed footer -->
    </pip-document-footer>
</pip-document-layout>
```

## <a id="menu-layout"></a>Menu layout (`pip-menu-layout`)

This layout provides area for menu and content. It will collapse to menu view on small screens (`lt-md`) and could be switched between menu view and content view by property. To use this layout you should include `PipMenuLayoutModule`.

Inputs:
* `single` - set view for card, `true` will show content and `false` - menu.

Possible content:
* `.pip-menu` - content of the HTML element with class `.pip-menu` will be placed in menu section;
* `.pip-menu-container` - content of the HTML element with class `.pip-menu-container` will be placed in content section.

Example:
```html
<pip-menu-layout [single]="single">
    <div class="pip-menu">
        <!-- Menu items -->
    </div>
    <div class="pip-menu-container">
        <!-- Content -->
    </div>
</pip-menu-layout>
```

## <a id="scrollable-layout"></a>Scrollable layout (`pip-scrollable`)

This layout let you ability to set scroll behavior for content which should be restricted in height.

Example:
```html
<pip-scrollable>
    <pip-scrollable-content>
        <!-- Content -->
    </pip-scrollable-content>
</pip-scrollable>
```

## <a id="tiles-layout"></a>Tiles layout (`pip-tiles-layout`)

This layout using [masonry-layout](https://www.npmjs.com/package/masonry-layout) to create masonry grid for tiles. To use this layout you should include `PipTilesLayoutModule`.

Inputs:
* `columnWidth` - width of column for layout;
* `stretch` - stretch tiles;
* `animation` - should resizing be animated or not;

Outputs:
* `resized` - emits new actual size of layout.

Possible content:
* should be populated with list of `.pip-tile` items.

Example:
```html
<pip-tiles-layout [columnWidth]="columnWidth" [stretch]="stretch" [animation]="animation">
  <div class="pip-tile" *ngFor="let tile of tiles">
    <h3>{{ tile.title }}</h3>
    <div>{{ tile.content }}</div>
  </div>
</pip-tiles-layout>
```