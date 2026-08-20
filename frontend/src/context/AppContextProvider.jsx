import React, {
    createContext,
    useEffect,
    useState
} from "react";
import axios from "axios";
import toast from "react-hot-toast";
axios.defaults.baseURL=import.meta.env.VITE_BASE_URL;

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    const [isAdmin, setIsAdmin] = useState(
        localStorage.getItem("isAdmin") === "true"
    );


    // ================= GET FOOD ITEMS =================

    const getProducts = async () => {
        try {
            const response = await axios.get("/api/food/all");

            if (response.data.success) {
                setProducts(response.data.foodItems);
            } else {
                toast.error(response.data.message);
            }

        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                error.message
            );
        }
    };

    const removeProduct=async(id)=>{
        try {
            const response=await axios.post("/api/food/delete", { id });
            await getProducts();
            if(response.data.success){
                toast.success(response.data.message);
                
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message);
        }
    }


    // ================= GET CART =================

    const getCartItems = async () => {

        if (!token) {
            setCartItems([]);
            return;
        }

        try {
            

            const response = await axios.get(
                "/api/cart/",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log("CART DATA:", response.data.cart);
            if (response.data.success) {

                setCartItems(response.data.cart);

            } else {

                toast.error(response.data.message);

            }

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                error.message
            );

        }
    };


    // ================= ADD TO CART =================

    const addToCart = async (foodId) => {

        if (!token) {
            toast.error("Please login first");
            return;
        }

        try {

            const response = await axios.post(
                "/api/cart/add",
                { foodId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.data.success) {

                // Refresh cart immediately
                await getCartItems();

            } else {

                toast.error(response.data.message);

            }

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                error.message
            );

        }
    };


    // ================= REMOVE FROM CART =================

    const removeFromCart = async (foodId) => {

        if (!token) {
            toast.error("Please login first");
            return;
        }

        try {

            const response = await axios.post(
                "/api/cart/remove",
                { foodId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.data.success) {

                // Refresh cart immediately
                await getCartItems();

            } else {

                toast.error(response.data.message);

            }

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                error.message
            );

        }
    };


    // ================= CART COUNT =================

    const cartCount = cartItems.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );


    // ================= LOGOUT =================

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");

        setToken(null);
        setIsAdmin(false);
        setCartItems([]);

        toast.success("Logged out successfully");
    };


    // ================= INITIAL LOAD =================

    useEffect(() => {

        getProducts();

    }, []);


    // ================= GET CART AFTER LOGIN =================

    useEffect(() => {

        if (token) {

            getCartItems();

        } else {

            setCartItems([]);

        }

    }, [token]);


    const value = {
        products,
        removeProduct,
        cartItems,
        cartCount,

        addToCart,
        removeFromCart,
        getCartItems,

        token,
        isAdmin,

        setToken,
        setIsAdmin,

        logout
    };


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;