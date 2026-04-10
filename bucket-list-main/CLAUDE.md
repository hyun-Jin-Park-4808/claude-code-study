# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Bucket List**: A lightweight, single-page web application for managing personal life goals. Built with vanilla JavaScript, HTML5, CSS3, and Tailwind CSS—no build tools, no dependencies, no frameworks.

## Running the App

No build process or dev server required:

1. **Direct browser**: Open `index.html` in any modern browser
2. **Live Server**: Use VS Code extension on `index.html`
3. **Simple HTTP server**: `python -m http.server 8000` then visit `http://localhost:8000`

The app works immediately as-is; any changes to `.js`, `.css`, or `.html` files are live upon refresh.

## Architecture

The app follows a **two-layer modular structure**:

### Data Layer: `js/storage.js`
- **Singleton pattern** (object literal): `BucketStorage`
- Manages all LocalStorage operations
- **Key methods**: `load()`, `save()`, `addItem()`, `updateItem()`, `deleteItem()`, `toggleComplete()`, `getStats()`, `getFilteredList()`
- **Storage key**: `'bucketList'` in LocalStorage
- **Data format**: Array of items with structure `{ id, title, completed, createdAt, completedAt }`
- All state changes must go through Storage to persist to LocalStorage

### UI Layer: `js/app.js`
- **Class-based pattern**: `BucketListApp`
- Manages DOM state and user interactions
- `cacheElements()`: Stores DOM references once at init
- `bindEvents()`: Attaches event listeners
- `render()`: Re-renders the entire list (called after every state change)
- `handleXxx()`: Event handlers that call Storage methods then trigger re-render
- **Key pattern**: User action → call Storage method → call `render()` → screen updates

### Styling: `css/styles.css`
- Complements Tailwind CSS (loaded from CDN in `index.html`)
- Provides animations, filter button states, responsive adjustments, dark mode support
- Tailwind classes in HTML; custom CSS in stylesheet for complex states

## Adding Features

When extending the app:

1. **Add a new data field**: 
   - Add property to the item object in `storage.js` `addItem()` method
   - Add getter/setter/filter logic if needed in `storage.js`
   
2. **Add a new action** (CRUD, toggle, filter):
   - Implement method in `BucketStorage` (storage.js)
   - Add handler in `BucketListApp` (app.js)
   - Call Storage method, then `this.render()`
   - Hook up HTML element in `index.html` and bind event in `bindEvents()`

3. **Modify the UI**:
   - Edit HTML in `index.html`
   - Add Tailwind classes or custom CSS
   - Cache new DOM elements in `cacheElements()`
   - Add event listeners in `bindEvents()`

## Key Patterns

- **Data flow**: User action → Storage mutation → `render()` → screen update
- **No two-way binding**: App explicitly calls `render()` after state changes; use re-render-on-change pattern, not reactive properties
- **HTML escaping**: Use `this.escapeHtml()` in `app.js` when inserting user text into HTML to prevent XSS
- **Inline event handlers**: Buttons use `onclick="app.methodName(args)"` to call app methods
- **Filter state**: Stored in `this.currentFilter` (string: 'all', 'active', 'completed')

## File Organization

```
bucket-list-main/
├── index.html              # Single HTML file; all UI structure
├── js/
│   ├── storage.js          # Data persistence (LocalStorage)
│   └── app.js              # UI state and interactions
├── css/
│   └── styles.css          # Custom styles + animations
├── README.md               # User-facing documentation
└── CLAUDE.md               # This file
```

## Important Notes

- **LocalStorage**: Data persists across browser sessions but is browser/domain-specific. Useful for learning/demos; not suitable for sensitive data.
- **No node_modules, no build**: This is intentional for simplicity. Avoid adding package dependencies.
- **Dark mode**: Supported via CSS `prefers-color-scheme` media query; no toggle button in current implementation.
- **Responsive design**: Tailwind handles most breakpoints; mobile overrides in `css/styles.css` adjust layout for screens < 640px.
- **Animations**: CSS keyframes in `styles.css` (slideIn, fadeIn, scaleIn) add visual polish on state changes.

## Testing

No test framework or test runner is set up. Manual testing in browser is the current approach. If tests are added later, consider a lightweight option like Vitest or Jest.

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge) that support:
- ES6 JavaScript
- LocalStorage API
- CSS Grid/Flexbox
