# Order Dashboard SPA

A lightweight, responsive **Mini Dashboard Single Page Application (SPA)** built with **pure HTML, Bootstrap 5, Vanilla JavaScript**, and static JSON data — **no frameworks**.

This project showcases essential front-end development skills including SPA navigation, dynamic data rendering, live filtering, responsive design, and a seamless dark/light mode experience.

## Live Demo

🔗 **[View Live Demo](https://mini-dashboard-mythili.netlify.app/)**  
*(Replace the link above with your actual Netlify or GitHub Pages URL after deployment)*

## Features

### Responsive Design
- **Desktop**: Fixed left sidebar for navigation
- **Mobile**: Clean hamburger menu with offcanvas sidebar
- Fully responsive single-column layout on smaller screens using Bootstrap grid

### Single Page Application (SPA)
- Smooth navigation between **Home**, **Orders**, and **Settings** without page reloads
- Active navigation link highlighting

### Dynamic Overview Dashboard
- Real-time statistics:
  - Total Orders
  - Pending Orders
  - Total Revenue
- Recent Activity feed with:
  - Status-based icons
  - Relative time display (e.g., "Today", "2 days ago")

### Orders Management
- Orders table loaded dynamically from local `orders.data.json`
- **Live Search** by customer name
- **Status Filter** (All, Pending, Processing, Shipped, Delivered, Cancelled)
- Instant table updates on search/filter

### Settings Panel
- Organized accordion sections:
  - Privacy Settings
  - Password Change
  - Two-Factor Authentication
  - Account & Notification Options
  - Language Selection

### Dark / Light Mode
- Toggle via **sun/moon icon** in the header (click to switch)
- Smooth icon transition
- Theme preference saved in `localStorage` — persists across sessions

### Custom Styling
- Consistent professional color theme
- Hover effects on table rows and navigation items
- Smooth CSS transitions for enhanced UX

## Technologies Used

- **HTML5**
- **CSS3** (Bootstrap 5 + Custom Styles)
- **Vanilla JavaScript** (ES6+)
- **Bootstrap Icons**
- **Static JSON** for data

## Project Structure
order-dashboard-spa/                                                                                                                                                                                                              
├── index.html                                                                                                                                                                                                              
├── assets/                                                                                                                                                                                                              
│   ├── styles/                                                                                                                                                                                                              
│   │   └── main.css                                                                                                                                                                                                              
│   ├── scripts/                                                                                                                                                                                                              
│   │   └── dashboard.js                                                                                                                                                                                                              
│   └── data/                                                                                                                                                                                                              
│       └── orders.data.json                                                                                                                                                                                                              
└── README.md                                                                                                                                                                                                              



## How to Run Locally

1. Clone or download this repository
2. Open `index.html` directly in your browser
   - Recommended: Use **VSCode Live Server** extension for automatic reloading

No server or build tools required!

## Deployment Options

- **[Netlify](https://netlify.com)**   (connect directly to GitHub)


## Credits

Built as a front-end assessment project to demonstrate clean, modern, and performant web development using only vanilla technologies.

**General Logic** – Order Management Dashboard  
*Responsive • Performant • Framework-Free*

---

Built as a front-end assessment project demonstrating clean, modern web development practices with vanilla technologies.

---
**General Logic** – Order Management Dashboard  
Responsive | Performant | No Frameworks
