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