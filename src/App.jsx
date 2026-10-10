import { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  // "Get Started" hides the landing page and shows the product listing.
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  // Called from the navbar's "Home" link to return to the landing page.
  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <div className="product-list-container visible">
          <ProductList onHomeClick={handleHomeClick} />
        </div>
      )}
    </div>
  );
}

export default App;
