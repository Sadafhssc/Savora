import React, { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContextProvider";
import { assets } from "../assets/admin_assets/assets";

const AddItem = () => {
    const { addProduct } = useContext(AppContext);
    const [thumbnail, setThumbnail] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Select category");
    const [price, setPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const foodItem = {
            title,
            description,
            price,
            category
        }
        const formData = new FormData();
        formData.append("foodItem", JSON.stringify(foodItem));
        formData.append("image", thumbnail);
        addProduct(formData);
        toast.success("Food item uploaded successfully");
        setTitle("");
        setDescription("");
        setPrice("");
        setThumbnail(false);
        setCategory("Select category")
        setIsLoading(false);
    }


    return (
        <div
            className="bg-white"
            style={{
                maxWidth: "770px",
                borderRadius: "7px",
                border: "1px solid #E7EAF3",
                padding: "40px 50px",
            }}
        >
            {/* Upload Thumbnail */}

            <div className="mb-4">
                <label
                    className="d-block mb-3"
                    style={{
                        fontSize: "1.1rem",
                        color: "#374151",
                        fontWeight: "500",
                    }}
                >
                    Upload Image
                </label>

                <label
                    htmlFor="image"
                    className="d-flex flex-column justify-content-center align-items-center"
                    style={{
                        width: "130px",
                        height: "67px",
                        border: "1px dashed #C9CED6",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                >
                    <img
                        src={assets.upload_area}
                        alt=""
                        width="130"
                        className="mb-2"
                    />
                </label>

                <input
                    type="file"
                    hidden
                    id="image"
                    accept="image/*"
                    onChange={(e) => setThumbnail(e.target.files[0])}
                />
            </div>

            {/* Blog Title */}

            <div className="mb-4">
                <label
                    className="form-label fw-medium"
                    style={{
                        fontSize: "1.1rem",
                        color: "#374151",
                    }}
                >
                    Food title
                </label>

                <input
                    type="text"
                    className="form-control shadow-none text-secondary"
                    placeholder="Type here"
                    style={{
                        height: "47px",
                        borderRadius: "8px",
                        border: "1px solid #D8DEE8",
                        fontSize: "1rem",
                    }}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>



            {/* Description */}

            <div className="mb-4">
                <label
                    className="form-label fw-medium"
                    style={{
                        fontSize: "1.1rem",
                        color: "#374151",
                    }}
                >
                    Food Description
                </label>
                 
                <input
                    type="text"
                    className="form-control shadow-none text-secondary"
                    placeholder="Type here"
                    style={{
                        height: "47px",
                        borderRadius: "8px",
                        border: "1px solid #D8DEE8",
                        fontSize: "1rem",
                    }}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <div style={{ position: "relative" }}>
                </div>
            </div>

            {/* Category */}
               <div className="d-flex justify-content-between align-items-center">
            <div className="mb-4">
                <label
                    className="form-label d-block fw-medium"
                    style={{
                        fontSize: "1.1rem",
                        color: "#374151",
                    }}
                >
                    Food category
                </label>

                <select
                    className="form-select shadow-none"
                    style={{
                        width: "230px",
                        height: "47px",
                        borderRadius: "8px",
                        border: "1px solid #D8DEE8",
                        fontSize: "1.1rem",
                    }}
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                    <option>Select category</option>
                    <option>Salad</option>
                    <option>Rolls</option>
                    <option>Deserts</option>
                    <option>Sandwich</option>
                    <option>Cake</option>
                    <option>Pasta</option>
                    <option>Noodles</option>
                </select>
            </div>

            <div className="mb-4">
                <label
                    className="form-label fw-medium"
                    style={{
                        fontSize: "1.1rem",
                        color: "#374151",
                    }}
                >
                    Price
                </label>

                <input
                    type="text"
                    className="form-control shadow-none text-secondary"
                    placeholder="Type here"
                    style={{
                        width: "230px",
                        height: "47px",
                        borderRadius: "8px",
                        border: "1px solid #D8DEE8",
                        fontSize: "1rem",
                    }}
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
            </div>
</div>

            {/* Button */}

            <button
                className="btn text-white"
                style={{
                    width: "180px",
                    height: "44px",
                    background: "#02ab95",
                    borderRadius: "4px",
                    fontSize: "1rem",
                    fontWeight: "500",
                }}
                onClick={handleSubmit}
                disabled={isLoading}
            >
                {isLoading ? "Adding..." : "Add Food Item"}
            </button>
        </div>
    );
};


export default AddItem
