import { useContext, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { SHORT_API_URL } from "../constants/urls";
import { toast } from "react-toastify";
const UrlContext = createContext(null);

const usePostUrl = () => useContext(UrlContext);

const UrlProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [displayOutput, setDisplayOutput] = useState(false);
  async function shortenUrl(url) {
    setLoading(true);
    try {
      const {
        data: { ok, result },
      } = await axios.post(SHORT_API_URL + "/shorten?url=" + url);
      if (ok) {
        toast.success("Link shortened, minds blown! 🎉");
        setData(result.short_link);
        setDisplayOutput(true);
      }
    } catch (err) {
      const {
        response: {
          data: { error },
        },
      } = err;
      toast.error(error);
    }
    setLoading(false);
  }
  return (
    <UrlContext.Provider
      value={{ data, setData, shortenUrl, loading, setLoading, displayOutput }}
    >
      {children}
    </UrlContext.Provider>
  );
};

export { usePostUrl, UrlProvider };
