import React, { useState } from "react";
import { food_list,menu_list } from "../assets/frontend_assets/assets";
import Food_item from "./Food_item";

const Food_list = () => {
    const [items,setItems]=useState(food_list);
    const filterItems=(category)=>{
        const filteredItems= food_list.filter((item)=>item.category===category);
        setItems(filteredItems);
    }
  return (
    <>
       <div className="container mt-4" id="menu">
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#262626",
              textAlign: "left"
            }}
          >
            Explore our menu
          </h3>
    
          <p
            style={{
              maxWidth: "700px",
              color: "#747474",
              fontSize: "17px",
              lineHeight: "30px",
              marginTop: "1rem",
              textAlign: "left"
            }}
          >
            Choose from a diverse menu featuring a delectable array of dishes.
            Our mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
    
          <div
            className="d-flex justify-content-between mt-5"
            style={{
              overflowX: "auto",
              gap: "30px",
              scrollbarWidth: "none",
            }}
            
          >
            {menu_list.map((item, index) => (
              <div
                key={index}
                className="text-center"
                style={{
                  cursor: "pointer",
                  minWidth: "110px",
                }}
                onClick={()=>filterItems(item.menu_name)}
              >
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    transition: ".3s",
                  }}
                />
    
                <p
                  style={{
                    marginTop: "15px",
                    color: "#555",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                  }}
                >
                  {item.menu_name}
                </p>
              </div>
            ))}
          </div>
    
          <hr
            style={{
              marginTop: "1rem",
              border: "1px solid #e2e2e2",
            }}
          />
        </div>
          <div className="container my-2">

      {/* Heading */}
     <h3
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "#262626",
          textAlign: "left",
          marginBottom: "1rem"
        }}
      >
        Top dishes near you
      </h3>


      {/* Food Cards */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {items.map((item) => (
          <Food_item
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div></>
  
  );
};

export default Food_list;