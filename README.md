# <img src="https://github.com/pip-webui/pip-webui/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> Responsive content layouts

![](https://img.shields.io/badge/license-MIT-blue.svg)

Development responsible applications requires to organization content the way that can fit available screen from small phones to large desktops. In Line-of-Business applications with tens screens and dialogs implementaing responsive layouts can be time consuming and error prone task. To make it more productive Pip.WebUI.Layouts module provides a set of universal responsible layouts that can help to organize content in number of different ways: as full-screen content, documents, tiles, dialogs and more.

### The structural parts of the application page

**App bar** is a special kind of toolbar that’s used for branding, navigation, search, and actions.

**Side nav** is left side panel that shows ideally navigation- or identity-based content. 

**Right nav** is right side panel that should show secondary content to the main content on a page.

**Main layout** is structural part that contains only **content canvas** or **side nav and content canvas** and serves to determine the width of the responsive content of the application page.

### Layouts

**Card layout** places small content at the center of the screen in a card. On phones the content is extended to the whole screen.

**Document layout** places content as a document with fixed width and full height centered on the screen. On tables and phones the content occupies the whole screen.

**Tiles layout** is used to present multiple items in tiles that arranged on the screen in one or several columns.

**Menu layout** combines menu that adds on the left hand side to switch between documents and **Document layout**, **Tile layout**. On phones the menu occupies the entire screen and user switches between menu and document back and forth. 

**Scrollable layout** provides container for elements and makes inclusions scrollable or not scrollable.

### Services

**Media** is used to evaluate whether a given media query is true or false given the current device's screen / window size. It has media queries for full device's screen / window and for **main layout**.

**Layouts** serves to control **app bar**, **side nav**, **right nav**.
