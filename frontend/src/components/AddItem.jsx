import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { assets } from "../assets/admin_assets/assets";

const AddItem = () => {
    const [thumbnail, setThumbnail] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Select category");
    const [price, setPrice] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!thumbnail) {
            toast.error("Please upload an image");
            return;
        }

        if (!name || !description || !price) {
            toast.error("Please fill all fields");
            return;
        }

        if (category === "Select category") {
            toast.error("Please select a category");
            return;
        }

        try {
            setIsLoading(true);

            const foodItem = {
                name,
                description,
                price,
                category,
            };

            const formData = new FormData();

            formData.append(
                "foodItem",
                JSON.stringify(foodItem)
            );

            formData.append("image", thumbnail);

            const response = await axios.post(
                "/api/food/add",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );

            if (response.data.success) {
                toast.success(response.data.message);

                // Clear form
                setName("");
                setDescription("");
                setPrice("");
                setCategory("Select category");
                setThumbnail(null);

                // Reset file input
                document.getElementById("image").value = "";
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                    error.message ||
                    "Something went wrong"
            );
        } finally {
            setIsLoading(false);
        }
    };

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
            {/* Upload Image */}
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
                        overflow: "hidden",
                    }}
                >
                    {thumbnail ? (
                        <img
                            src={URL.createObjectURL(thumbnail)}
                            alt="preview"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    ) : (
                        <img
                            src={assets.upload_area}
                            alt="Upload"
                            width="130"
                        />
                    )}
                </label>

                <input
                    type="file"
                    hidden
                    id="image"
                    accept="image/*"
                    onChange={(e) => {
                        if (e.target.files[0]) {
                            setThumbnail(e.target.files[0]);
                        }
                    }}
                />
            </div>

            {/* Food Name */}
            <div className="mb-4">
                <label
                    className="form-label fw-medium"
                    style={{
                        fontSize: "1.1rem",
                        color: "#374151",
                    }}
                >
                    Food Name
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
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />
            </div>

            {/* Food Description */}
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

                <textarea
                    className="form-control shadow-none text-secondary"
                    placeholder="Type here"
                    style={{
                        height: "100px",
                        borderRadius: "8px",
                        border: "1px solid #D8DEE8",
                        fontSize: "1rem",
                        resize: "none",
                    }}
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                />
            </div>

            {/* Category and Price */}
            <div className="row">
                {/* Category */}
                <div className="col-md-6 mb-4">
                    <label
                        className="form-label d-block fw-medium"
                        style={{
                            fontSize: "1.1rem",
                            color: "#374151",
                        }}
                    >
                        Food Category
                    </label>

                    <select
                        className="form-select shadow-none"
                        style={{
                            width: "100%",
                            height: "47px",
                            borderRadius: "8px",
                            border: "1px solid #D8DEE8",
                            fontSize: "1rem",
                        }}
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
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

                {/* Price */}
                <div className="col-md-6 mb-4">
                    <label
                        className="form-label d-block fw-medium"
                        style={{
                            fontSize: "1.1rem",
                            color: "#374151",
                        }}
                    >
                        Price
                    </label>

                    <input
                        type="number"
                        className="form-control shadow-none text-secondary"
                        placeholder="Type here"
                        min="0"
                        style={{
                            width: "100%",
                            height: "47px",
                            borderRadius: "8px",
                            border: "1px solid #D8DEE8",
                            fontSize: "1rem",
                        }}
                        value={price}
                        onChange={(e) =>
                            setPrice(e.target.value)
                        }
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="button"
                className="btn text-white"
                style={{
                    width: "180px",
                    height: "44px",
                    background: "#02ab95",
                    borderRadius: "4px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    border: "none",
                }}
                onClick={handleSubmit}
                disabled={isLoading}
            >
                {isLoading
                    ? "Adding..."
                    : "Add Food Item"}
            </button>
        </div>
    );
};

export default AddItem;