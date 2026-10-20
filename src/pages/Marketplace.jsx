import React, { useState, useEffect } from 'react';
import './marketplace.css';
import { 
  User, Stethoscope, Menu, LogOut, Search, X, Calendar, Building,
  MessageSquare, ShoppingBag, HeartPulse, Users, UserCheck, Settings,
  ShoppingCart, Flame, ChevronLeft, ChevronRight, Plus, Minus, Trash2, CheckCircle2, Star, Bell
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
// ۱. لیست جامع تمام غذاها برای اسلایدر تعاملی بالای صفحه (Hero Showcase)
const HERO_MEALS = [
  {
    id: 'hero-1',
    name: 'Vegan Avocado & Berry Detox Toast',
    category: 'Breakfast',
    price: 12.99,
    calories: '340 kcal',
    protein: '14g',
    carbs: '38g',
    fat: '18g',
    rating: '4.9',
    description: 'Whole grain sourdough topped with smashed avocado, heirloom cherry tomatoes, chia seeds, microgreens, and a side berry detox antioxidant salad.',
    bgColor: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
    accentColor: '#34d399',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 'hero-2',
    name: 'Keto Atlantic Salmon Bowl',
    category: 'Salads & Bowls',
    price: 18.99,
    calories: '480 kcal',
    protein: '38g',
    carbs: '8g',
    fat: '32g',
    rating: '4.9',
    description: 'Fresh wild-caught Atlantic salmon served on a bed of organic avocado, baby spinach, cucumber slices, toasted sesame seeds, and extra virgin olive oil vinaigrette.',
    bgColor: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    accentColor: '#38bdf8',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 'hero-3',
    name: 'High-Protein Grilled Chicken Quinoa',
    category: 'Main Dishes',
    price: 14.50,
    calories: '520 kcal',
    protein: '46g',
    carbs: '42g',
    fat: '12g',
    rating: '4.8',
    description: 'Herb-marinated chicken breast served with organic tri-color quinoa, steamed broccoli florets, roasted sweet potato cubes, and creamy tahini lemon dressing.',
    bgColor: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)',
    accentColor: '#f87171',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 'hero-4',
    name: 'Mediterranean Tuna & Olive Salad',
    category: 'Salads',
    price: 13.50,
    calories: '310 kcal',
    protein: '28g',
    carbs: '12g',
    fat: '15g',
    rating: '4.7',
    description: 'Flaked albacore tuna mixed with Kalamata olives, cucumbers, cherry tomatoes, red onion, and extra virgin olive oil vinaigrette.',
    bgColor: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
    accentColor: '#818cf8',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 'hero-5',
    name: 'Organic Greek Yogurt & Wild Berries',
    category: 'Breakfast',
    price: 7.99,
    calories: '210 kcal',
    protein: '18g',
    carbs: '22g',
    fat: '4g',
    rating: '4.9',
    description: 'Rich Greek yogurt topped with organic blueberries, raspberries, a drizzle of raw wildflower honey, and toasted almonds.',
    bgColor: 'linear-gradient(135deg, #581c87 0%, #6b21a8 100%)',
    accentColor: '#c084fc',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&auto=format&fit=crop&q=80'
  },
  {
    id: 'hero-6',
    name: 'Green Detox Cold Pressed Juice',
    category: 'Drinks',
    price: 6.50,
    calories: '120 kcal',
    protein: '3g',
    carbs: '26g',
    fat: '0g',
    rating: '4.8',
    description: 'Freshly pressed organic kale, green apples, cucumber, celery, lemon, and ginger for a natural energy boost.',
    bgColor: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
    accentColor: '#4ade80',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=700&auto=format&fit=crop&q=80'
  }
];

// ۲. لیست منوی جامع تمام غذاها در ۵ دسته‌بندی مختلف
const MARKET_PRODUCTS = [
  // سالادها (Salads)
  { id: 's1', name: 'Mediterranean Tuna & Olive Salad', price: 13.50, calories: '310 kcal', category: 'Salads', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400' },
  { id: 's2', name: 'Keto Avocado Caesar Salad', price: 11.99, calories: '380 kcal', category: 'Salads', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
  { id: 's3', name: 'Greek Feta & Cucumber Bowl', price: 10.50, calories: '290 kcal', category: 'Salads', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400' },
  { id: 's4', name: 'Roasted Beetroot & Goat Cheese', price: 12.00, calories: '330 kcal', category: 'Salads', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
  { id: 's5', name: 'Detox Green Kale & Apple Salad', price: 9.99, calories: '240 kcal', category: 'Salads', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400' },

  // صبحانه (Breakfast)
  { id: 'b1', name: 'Organic Greek Yogurt & Wild Berries', price: 7.99, calories: '210 kcal', category: 'Breakfast', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400' },
  { id: 'b2', name: 'Poached Eggs & Spinach Toast', price: 9.50, calories: '320 kcal', category: 'Breakfast', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400' },
  { id: 'b3', name: 'Chia Seed Pudding with Mango', price: 6.99, calories: '180 kcal', category: 'Breakfast', img: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400' },
  { id: 'b4', name: 'Keto Omelette with Mushrooms', price: 10.99, calories: '410 kcal', category: 'Breakfast', img: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400' },
  { id: 'b5', name: 'Oatmeal with Honey & Almonds', price: 6.50, calories: '260 kcal', category: 'Breakfast', img: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400' },

  // وعده‌های اصلی (Main Dishes)
  { id: 'm1', name: 'Low-Carb Beef Zucchini Noodles', price: 16.00, calories: '410 kcal', category: 'Main Dishes', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400' },
  { id: 'm2', name: 'Baked Lemon Herb Cod Fillet', price: 17.50, calories: '360 kcal', category: 'Main Dishes', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400' },
  { id: 'm3', name: 'Grilled Turkey & Brown Rice', price: 14.99, calories: '450 kcal', category: 'Main Dishes', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400' },
  { id: 'm4', name: 'Tofu & Mixed Veggies Stir-Fry', price: 12.50, calories: '310 kcal', category: 'Main Dishes', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },

  // نوشیدنی‌ها (Drinks)
  { id: 'd1', name: 'Green Detox Cold Pressed Juice', price: 6.50, calories: '120 kcal', category: 'Drinks', img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400' },
  { id: 'd2', name: 'Organic Matcha Green Tea Latte', price: 5.99, calories: '90 kcal', category: 'Drinks', img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400' },
  { id: 'd3', name: 'Protein Berry Smoothie', price: 7.50, calories: '220 kcal', category: 'Drinks', img: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400' },

  // دسرها (Desserts)
  { id: 'sw1', name: 'Sugar-Free Dark Chocolate Mousse', price: 5.50, calories: '150 kcal', category: 'Desserts', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400' },
  { id: 'sw2', name: 'Keto Protein Energy Balls (3pcs)', price: 4.99, calories: '190 kcal', category: 'Desserts', img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400' }
];

const Marketplace = ({ onNavigate, onLogout }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const [activeMealIndex, setActiveMealIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentMeal = HERO_MEALS[activeMealIndex];

  const handleMealChange = (newIndex) => {
    if (newIndex === activeMealIndex || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveMealIndex(newIndex);
      setAnimating(false);
    }, 250);
  };

  const handleNextMeal = () => {
    handleMealChange((activeMealIndex + 1) % HERO_MEALS.length);
  };

  const handlePrevMeal = () => {
    handleMealChange((activeMealIndex - 1 + HERO_MEALS.length) % HERO_MEALS.length);
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((c) => c.id === item.id);
      if (existing) {
        return prevCart.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      }
      return [...prevCart, { ...item, qty: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setOrderSuccess(true);
    setTimeout(() => {
      setCart([]);
      setOrderSuccess(false);
      setIsCartOpen(false);
    }, 2500);
  };

  const filteredProducts = MARKET_PRODUCTS.filter((prod) => {
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || prod.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
  <div className="dashboard-container">
    {/* اینجا سایدبار را اضافه کن */}
    <Sidebar 
      currentPage="Marketplace" 
      onNavigate={onNavigate} 
      isOpen={isOpen} 
      setIsOpen={setIsOpen} 
    /> 


      {/* محتوای اصلی */}
      <main className="main-content">
        <header className="top-header">
          <div className="header-left">
            <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
              <Menu size={22} />
            </button>
            <div className="breadcrumb">
              <span>🏠 / Marketplace</span>
              <h3>Healthy Diet Marketplace</h3>
            </div>
          </div>
          
          <div className="header-actions">
          <div className="header-actions">
  {/* ۱. باکس جستجو */}
  <div className="top-search-bar">
    <Search size={16} color="#94a3b8" />
    <input type="text" placeholder="Type here..." />
  </div>

  {/* ۲. دکمه خروج */}
  <button className="logout-btn" onClick={onLogout}>
    <LogOut size={16} /> Log out
  </button>

  {/* ۳. دکمه سبد خرید */}
  <button className="cart-badge-btn" onClick={() => setIsCartOpen(true)}>
    <ShoppingCart size={18} />
   
  </button>

  {/* ۴. آیکون تنظیمات */}
  <button className="header-icon-btn" onClick={() => onNavigate && onNavigate('Settings')}>
    <Settings size={18} />
  </button>

  {/* ۵. آیکون زنگوله */}
  <button className="header-icon-btn">
    <Bell size={18} />
  </button>
</div>
</div>  
        </header>

        <div className="dashboard-content">
          {/* کارت تعاملی بزرگ بالای صفحه (Hero Showcase) */}
          <section 
            className="interactive-hero-card" 
            style={{ background: currentMeal.bgColor }}
          >
            <div className="hero-nav-arrow left" onClick={handlePrevMeal}>
              <ChevronLeft size={24} />
            </div>
            <div className="hero-nav-arrow right" onClick={handleNextMeal}>
              <ChevronRight size={24} />
            </div>

            <div className="hero-grid-layout">
              <div className={`meal-image-wrapper ${animating ? 'slide-down-exit' : 'slide-down-enter'}`}>
                <div className="rating-badge"><Star size={12} fill="#f59e0b" color="#f59e0b"/> {currentMeal.rating}</div>
                <img src={currentMeal.image} alt={currentMeal.name} className="featured-meal-img" />
              </div>

              <div className="meal-details-wrapper">
                <span className="meal-category-tag" style={{ color: currentMeal.accentColor }}>
                  {currentMeal.category}
                </span>
                <h1 className="meal-title">{currentMeal.name}</h1>
                <p className="meal-desc">{currentMeal.description}</p>

                <div className="nutrition-pills">
                  <div className="nutri-pill"><Flame size={14} color="#f97316" /> {currentMeal.calories}</div>
                  <div className="nutri-pill">Protein: <strong>{currentMeal.protein}</strong></div>
                  <div className="nutri-pill">Carbs: <strong>{currentMeal.carbs}</strong></div>
                  <div className="nutri-pill">Fat: <strong>{currentMeal.fat}</strong></div>
                </div>

                <div className="meal-price-action">
                  <span className="meal-price">${currentMeal.price.toFixed(2)}</span>

                  <div className="meal-dots-selector">
                    {HERO_MEALS.map((meal, idx) => (
                      <span
                        key={meal.id}
                        className={`meal-dot ${idx === activeMealIndex ? 'active' : ''}`}
                        onClick={() => handleMealChange(idx)}
                      />
                    ))}
                  </div>

                  <div className="action-buttons-group">
                    <button 
                      className="btn-add-cart" 
                      onClick={() => addToCart(currentMeal)}
                    >
                      Add to Cart
                    </button>
                    <button 
                      className="btn-buy-now" 
                      style={{ backgroundColor: currentMeal.accentColor }}
                      onClick={() => {
                        addToCart(currentMeal);
                        setIsCartOpen(true);
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* بخش سرچ و فیلترهای دسته‌بندی */}
          <div className="market-search-section">
            <div className="market-search-box">
              <Search size={18} color="#94a3b8" />
              <input 
                type="text" 
                placeholder="Search salads, breakfast, juices, keto..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="category-chips">
              {['All', 'Salads', 'Breakfast', 'Main Dishes', 'Drinks', 'Desserts'].map((cat) => (
                <button 
                  key={cat} 
                  className={`chip-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* شبکه لیست غذاها */}
          <div className="products-grid">
            {filteredProducts.map((prod) => (
              <div key={prod.id} className="product-card">
                <div className="product-img-box">
                  <img src={prod.img} alt={prod.name} />
                  <span className="cal-badge">{prod.calories}</span>
                </div>
                <div className="product-info">
                  <h4>{prod.name}</h4>
                  <p className="prod-cat">{prod.category}</p>
                  <div className="prod-bottom">
                    <span className="prod-price">${prod.price.toFixed(2)}</span>
                    <button className="btn-small-add" onClick={() => addToCart(prod)}>
                      <Plus size={16} /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* کشوی سبد خرید */}
      {isCartOpen && (
        <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3><ShoppingCart size={20} /> Your Cart ({cartItemCount})</h3>
              <button className="close-cart-btn" onClick={() => setIsCartOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {orderSuccess ? (
              <div className="order-success-msg">
                <CheckCircle2 size={50} color="#22c55e" />
                <h2>Order Placed Successfully!</h2>
                <p>Your healthy meal is being prepared and will be delivered shortly.</p>
              </div>
            ) : cart.length === 0 ? (
              <div className="empty-cart-view">
                <ShoppingBag size={48} color="#cbd5e1" />
                <p>Your cart is empty.</p>
              </div>
            ) : (
              <>
                <div className="cart-items-list">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p>${item.price.toFixed(2)} × {item.qty}</p>
                      </div>
                      <div className="cart-item-controls">
                        <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                        <button className="btn-remove" onClick={() => updateQuantity(item.id, -item.qty)}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-total-row">
                    <span>Total Amount:</span>
                    <strong>${cartTotal.toFixed(2)}</strong>
                  </div>
                  <button className="checkout-btn" onClick={handleCheckout}>
                    Proceed to Checkout (${cartTotal.toFixed(2)})
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;