import { useState, createContext } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState({});
  const [inputDetails, setInputDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const getShop = async () => {
    setLoading(true);
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/shop/details`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Secret-Key": `${process.env.REACT_APP_SECRET_KEY}`,
        },
      }
    );
    setLoading(false);
    const data = await res.json();
    if (data.error) {
      console.log(data.error);
    }
    // console.log("Charges -->",data.msg);
    setShop(data.msg);
    setInputDetails(data.msg);
  };

  return (
    <ShopContext.Provider
      value={{ getShop, shop, setShop, inputDetails, setInputDetails, loading }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopProvider };
