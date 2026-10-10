# Paradise Nursery

**Paradise Nursery** is an online plant shop built with React and Redux Toolkit. Shoppers can browse a curated collection of houseplants, add them to a shopping cart, adjust quantities, and see their totals update in real time.

## Features

- **Landing page** with the company name, tagline, an About Us section, and a background image
- **Get Started** button that takes you to the plant catalog
- **Product listing** with 4 categories (Air Purifying, Aromatic Fragrant, Low Maintenance, Medicinal) and 6 unique plants each, every plant showing a thumbnail, name, description, and price
- **Add to Cart** buttons that disable themselves once a plant is in the cart
- **Sticky navbar** on the product and cart pages with links to Home, Plants, and Cart
- **Cart icon** with a live badge showing the total number of items
- **Shopping cart page** showing each plant's thumbnail, name, unit price, quantity, and subtotal, plus the total cart amount
- **Increase / decrease / delete** controls for every cart item
- **Checkout** (Coming Soon) and **Continue Shopping** buttons

## Tech Stack

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) and React Redux for cart state
- [Vite](https://vite.dev/) for development and builds
- Plain CSS for styling

## Project Structure

```
src/
├── App.jsx           # Landing page and switch to the product list
├── App.css           # Landing page styles and background image
├── AboutUs.jsx       # About Paradise Nursery
├── ProductList.jsx   # Navbar, cart icon, and plant catalog
├── CartItem.jsx      # Shopping cart page
├── CartSlice.jsx     # Redux slice: addItem, removeItem, updateQuantity
├── store.js          # Redux store
└── main.jsx          # App entry, wrapped in the Redux Provider
```

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

Then open the URL that Vite prints (usually http://localhost:5173).
