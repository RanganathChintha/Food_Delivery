import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Experience a diverse menu crafted to satisfy every craving, bringing
          together rich flavors, global inspirations, and mouthwatering
          delights. From comfort classics to bold new tastes, our selection
          caters to every palate, ensuring a delicious journey with every
          bite—delivered fresh, fast, and just the way you love it!
        </p>
        <button> View Menu</button>
      </div>
    </div>
  );
};

export default Header;
