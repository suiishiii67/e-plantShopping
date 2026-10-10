import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
        description: 'Produces oxygen at night, improving air quality.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
        description: 'Filters formaldehyde and xylene from the air.',
        cost: '$12',
      },
      {
        name: 'Peace Lily',
        image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
        description: 'Removes mold spores and purifies the air.',
        cost: '$18',
      },
      {
        name: 'Boston Fern',
        image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
        description: 'Adds humidity to the air and removes toxins.',
        cost: '$20',
      },
      {
        name: 'Rubber Plant',
        image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
        description: 'Easy to care for and effective at removing toxins.',
        cost: '$17',
      },
      {
        name: 'Aloe Vera',
        image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
        description: 'Purifies the air and has soothing healing properties.',
        cost: '$14',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1974&auto=format&fit=crop',
        description: 'Calming scent, used in aromatherapy.',
        cost: '$20',
      },
      {
        name: 'Jasmine',
        image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop',
        description: 'Sweet fragrance that promotes relaxation.',
        cost: '$18',
      },
      {
        name: 'Rosemary',
        image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
        description: 'Invigorating scent, often used in cooking.',
        cost: '$15',
      },
      {
        name: 'Mint',
        image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
        description: 'Refreshing aroma, used in teas and cooking.',
        cost: '$12',
      },
      {
        name: 'Lemon Balm',
        image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
        description: 'Citrusy scent that relieves stress and promotes sleep.',
        cost: '$14',
      },
      {
        name: 'Hyacinth',
        image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
        description: 'Beautiful flowering plant with a fragrant scent.',
        cost: '$22',
      },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      {
        name: 'ZZ Plant',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop',
        description: 'Thrives in low light and needs minimal watering.',
        cost: '$25',
      },
      {
        name: 'Pothos',
        image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
        description: 'Tolerates neglect and grows in many conditions.',
        cost: '$10',
      },
      {
        name: 'Cast Iron Plant',
        image: 'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg',
        description: 'Hardy plant that tolerates low light and neglect.',
        cost: '$20',
      },
      {
        name: 'Succulents',
        image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
        description: 'Drought-tolerant plants with unique shapes.',
        cost: '$18',
      },
      {
        name: 'Geraniums',
        image: 'https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg',
        description: 'Cheerful blooms that need little attention.',
        cost: '$16',
      },
      {
        name: 'Marigold',
        image: 'https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg',
        description: 'Bright, hardy flowers that also repel pests.',
        cost: '$8',
      },
    ],
  },
  {
    category: 'Medicinal Plants',
    plants: [
      {
        name: 'Echinacea',
        image: 'https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg',
        description: 'Boosts the immune system and helps fight colds.',
        cost: '$16',
      },
      {
        name: 'Peppermint',
        image: 'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg',
        description: 'Relieves digestive issues and headaches.',
        cost: '$13',
      },
      {
        name: 'Chamomile',
        image: 'https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg',
        description: 'Soothes anxiety and promotes restful sleep.',
        cost: '$15',
      },
      {
        name: 'Calendula',
        image: 'https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg',
        description: 'Heals wounds and soothes skin irritations.',
        cost: '$12',
      },
      {
        name: 'Oregano',
        image: 'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg',
        description: 'Antibacterial herb that also flavors your cooking.',
        cost: '$10',
      },
      {
        name: 'Tulsi (Holy Basil)',
        image: 'https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg',
        description: 'Revered herb that supports respiratory health.',
        cost: '$11',
      },
    ],
  },
];

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="cart-svg"
      aria-hidden="true"
    >
      <rect width="256" height="256" fill="none" />
      <circle cx="80" cy="216" r="12" fill="currentColor" />
      <circle cx="184" cy="216" r="12" fill="currentColor" />
      <path
        d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  // Total number of plants in the cart (sum of all quantities)
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Derived from Redux so it stays correct after visiting the cart or deleting items
  const isInCart = (plantName) => cartItems.some((item) => item.name === plantName);

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand" onClick={handleHomeClick}>
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt="Paradise Nursery logo"
            className="navbar-logo"
          />
          <div>
            <h3 className="navbar-title">Paradise Nursery</h3>
            <span className="navbar-tagline">Where Green Meets Serenity</span>
          </div>
        </a>

        <ul className="navbar-links">
          <li>
            <a href="#" onClick={handleHomeClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={handlePlantsClick} className={!showCart ? 'active' : ''}>
              Plants
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={handleCartClick}
              className={`cart-link ${showCart ? 'active' : ''}`}
              aria-label={`Cart with ${totalQuantity} items`}
            >
              <CartIcon />
              <span className="cart-count">{totalQuantity}</span>
            </a>
          </li>
        </ul>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category) => (
            <section key={category.category} className="category-section">
              <h2 className="category-title">{category.category}</h2>
              <div className="product-list">
                {category.plants.map((plant) => {
                  const added = isInCart(plant.name);
                  return (
                    <div className="product-card" key={plant.name}>
                      <img className="product-image" src={plant.image} alt={plant.name} />
                      <div className="product-body">
                        <div className="product-title">{plant.name}</div>
                        <div className="product-description">{plant.description}</div>
                        <div className="product-price">{plant.cost}</div>
                        <button
                          className={`product-button ${added ? 'added-to-cart' : ''}`}
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                        >
                          {added ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
