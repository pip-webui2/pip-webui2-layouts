# <img src="https://github.com/pip-webui/pip-webui/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> Responsive content layouts

![](https://img.shields.io/badge/license-MIT-blue.svg)

Development responsible applications requires to organization content the way that can fit available screen from small phones to large desktops. In Line-of-Business applications with tens screens and dialogs implementaing responsive layouts can be time consuming and error prone task. To make it more productive Pip.WebUI.Layouts module provides a set of universal responsible layouts that can help to organize content in number of different ways: as full-screen content, documents, tiles, dialogs and more.

## Contents
* [Installation](#installation)
* [The structural parts of the application page](#sp)
* [Layouts](#layouts)
* [Services](#services)
* [Usage](#usage)
* [Links](#links)
* [License](#license)

## Installation

To install this module using npm:

```bash
npm install pip-webui2-layouts --save
```

### <a id="sp"></a>The structural parts of the application page

**App bar** is a special kind of toolbar that’s used for branding, navigation, search, and actions.

**Side nav start** is left side panel that shows ideally navigation- or identity-based content. 

**Side nav end** is right side panel that should show secondary content to the main content on a page.

Structures could be pre-configured. Check [documentation](doc/contents.md) for details.

### Layouts

**Root layout** is root component that contains side navs and content, header and footer.

**Card layout** places small content at the center of the screen in a card. On phones the content is extended to the whole screen.

**Document layout** places content as a document with fixed width and full height centered on the screen. On tables and phones the content occupies the whole screen.

**Tiles layout** is used to present multiple items in tiles that arranged on the screen in one or several columns.

**Menu layout** combines 2 areas - left one for menu and right one for content. On phones the menu occupies the entire screen and user switches between menu and document back and forth. 

**Scrollable layout** provides container for elements and makes inclusions scrollable or not scrollable.

### Services

**Media** is used to evaluate whether a given media query is true or false given the current size of layout internal part. 
Internal part consist of **main layout** and its width calculated without including side navs.

**Layouts** serves to control **app bar**, **side nav start**, **side nav end**.

## Usage

##### Structure of application using layouts:

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

##### Media service (subscribe on main part width changing)

```typescript
constructor(private media: PipMediaService)
...
this.media.asObservableMain().subscribe((change: MediaMainChange) => {
      // Do anything...
      // MediaMainChange contains aliases - string array of active at this moment media query aliases
});
```

##### Media service in template (add media service to component before)

```html
<div *ngIf="media.isMainActive('lt-sm')">
    <!-- Show current div only for phablet and mobile -->
</div>
```

##### Media queries in styles

In component's styles:
```scss
:host-context(.pip-xs) {
  // background is black if screen size is 'xs'
  background: black;
}
```

## Links
* [PipWebUI2 Layouts Documentation](doc/contents.md)
* [PipWebUI2 Workspace](https://github.com/pip-webui2/pip-webui2-ws)

## License

This module is released under [MIT license](License) and totally free for commercial and non-commercial use.
