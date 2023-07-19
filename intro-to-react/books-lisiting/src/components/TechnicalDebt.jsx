// Component.js

import { useEffect, useState } from "react";

const Component = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(); //! ❗️ Technical Debt: Mixing data fetching and state update in the same function
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result); //! ❗️ Technical Debt: Directly mutating state without immutability
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Component;
