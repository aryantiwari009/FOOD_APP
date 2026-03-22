import { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/mockData/menu.json");
        const data = await response.json();

        console.log("DATA:", data);

        setMenu(data);
      } catch (err) {
        console.log("ERROR:", err);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="menu-page">
      <p className="breadcrumb">Home / Haldwani / Pizza Hut</p>

      <div className="res-container-header">
        <h1>Pizza Hut</h1>
        <div className="res-info-card">
          <div className="res-rating-row">
            <span className="star-icon">⭐</span>
            <span className="rating-text">4.3 (2.5K+ ratings)</span>
            <span className="cost-text">• ₹350 for two</span>
          </div>
          <p className="cuisines-list">Pizzas, Desserts</p>
          <div className="outlet-info">
            <div className="dot-line">
              <span className="dot"></span>
              <span className="line"></span>
              <span className="dot"></span>
            </div>
            <div className="outlet-details">
              <p>
                <span>Outlet</span> Haldwani City
              </p>
              <p>20-25 mins</p>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-items-list">
        <h3>Recommended (20)</h3>
        {/* Single Item Example */}
        <div className="menu-item-card">
          <div className="item-info">
            <div className="veg-icon">
              <span></span>
            </div>
            <h4 className="item-title">Margherita</h4>
            <p className="item-price">₹169</p>
            <p className="item-desc">
              Pizza topped with our herb-infused signature pan sauce and
              mozzarella cheese.
            </p>
          </div>
          <div className="item-image-section">
            <img src="/" alt="pizza" />
            <button className="add-btn">ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
