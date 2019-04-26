# Pip.WebUI.Layouts Changelog

## <a name="0.0.0"></a> 0.0.0 (2018-01-09)

Initial release with layouts: appbar, sidenav, rightnav, card, document, tiles.

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
No fixes in this version 

## <a name="0.0.1"></a> 0.0.1 (2018-03-12)

Fix bugs

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
* **build problems** - update @angular/flex-layout version to 5.0.0-beta.13, change media query breakpoints elements stucture (@angular/flex-layouts new version adds strict fields in breakpoint type and removes DEFAULT_BREAKPOINTS constant)


## <a name="1.0.0"></a> 1.0.0 (2018-10-04)

Update to Angular 6

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
No fixes in this version 

## <a name="1.0.1"></a> 1.0.1 (2018-10-09)

Do not hide overflow for vertical scroll

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
* fix overflow


## <a name="1.0.2"></a> ~1.0.2-beta.6 (2018-10-16)

Bug fixes

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
* **main-layout-alt**: new layout type with single sidenav

### Bug Fixes
* relative imports
* directives for flex layout was fixed
* menu-layout mobile click fix (lt-md)
* improved tiles layout component to watch for animation property
* improved tiles layout before mansory displaying of tiles
* fixed appbar height between xs and sm

## <a name="1.1.0"></a> 1.1.0 (2018-11-21)

Update to stable Angular 7 and fix the tests.

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
* Library tests works now. Run `npm run test:lib` to check it out;
* Example tests works now. Run `npm run test` to check it out;
* E2E tests works too. Run `npm run e2e` to check it out.

## <a name="1.1.1"></a> 1.1.1 (2018-12-05)

Angular minor updates; Media, sidenav and rightnav modules updated

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
* **PipMediaModule** should be replaced with **PipMediaModule.forRoot()**
* **PipSidenavModule** should be replaced with **PipSidenavModule.forRoot()**
* **PipRightnavModule** should be replaced with **PipRightnavModule.forRoot()**

### Bug Fixes
No fixes in this version 

## <a name="1.1.2"></a> 1.1.2 (2018-12-13)

Flex-direction fix

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
Flex-direction fix for main layout

## <a name="1.1.3"></a> 1.1.3 (2018-12-17)

Max width fix for main layout

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
Max width fix for main layout

## <a name="1.1.4"></a> 1.1.4 (2018-12-18)

Transparent backdrop for `main-alt-layout` sidenav

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
* Max width fix for main layout

## <a name="1.1.5"></a> 1.1.5 (2018-12-25)

Custom directives for show/hide was added. To use them `PipMediaModule` and `FlexLayoutModule` both should be present at component's module.

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
* Custom breakpoints directives

## <a name="1.1.6"></a> 1.1.6 (2018-12-25)

Breakpoints fixed

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
* Breakpoints fixed

## <a name="1.1.7"></a> 1.1.7 (2018-12-26)

Ability to change mode for fixed rightnav.

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
No fixes in this version 

## <a name="1.1.8"></a> 1.1.8 (2019-01-09)

Package size improvements.

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
No fixes in this version 

## <a name="1.1.9"></a> 1.1.9 (2019-01-15)

ObservableMedia updated to MediaObserver

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
No fixes in this version

## <a name="1.1.10"></a> 1.1.10 (2019-01-22)

Update for new themes

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
No fixes in this version

## <a name="1.1.11"></a> 1.1.11 (2019-04-17)

Appbar now have it's own service and tabs

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
* `PipAppbarModule` now should be imported `.forRoot()`

### Bug Fixes
No fixes in this version

## <a name="1.1.12"></a> 1.1.12 (2019-04-17)

Style fixes

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
* Style fixes for `main-layout` and `main-layout-alt` with tabs on mobile

## <a name="1.1.13"></a> 1.1.13 (2019-04-18)

No more navigations on index change in tabs

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
* No more navigations on index change in tabs

## <a name="1.1.14"></a> 1.1.14 (2019-04-26)

Appbar colors now could be configured through service

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
No fixes in this version

## <a name="1.1.15"></a> 1.1.15 (2019-04-26)

Fixed defining of new tab

### Features
* **appbar**: application bar places on top and shows navigation information
* **side nav**: side nav places on left side and shows navigation information
* **right nav**: side nav places on right side and shows navigation or additional information
* **card**: card layout that shows content in a card in the center of page
* **document**: document layout that show content with fixed width
* **tiles**: tiles layout

### Breaking Changes
No breaking changes in this version

### Bug Fixes
* Fixed defining of new tab