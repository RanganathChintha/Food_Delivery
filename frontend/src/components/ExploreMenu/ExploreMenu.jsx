import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Experience a diverse menu crafted to satisfy every craving, bringing
        together rich flavors, global inspirations, and mouthwatering delights.
        From comfort classics to bold new tastes, our selection caters to every
        palate, ensuring a delicious journey with every bite—delivered fresh,
        fast, and just the way you love it!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
            return (
                <div onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}  className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
