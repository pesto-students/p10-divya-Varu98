import { useContext, useState } from "react";
import { createContext } from "react";

const UrlContext = createContext(null);

const usePostUrl = () => useContext(UrlContext);

const UrlProvider = ({ children }) => {
  const [data, setData] = useState("Bello");
  return (
    <UrlContext.Provider value={{ data, setData }}>
      {children}
    </UrlContext.Provider>
  );
};

export { usePostUrl, UrlProvider };
