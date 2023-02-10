import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./Card.css";

const retrospectiveListInfo = [
  {
    id: uuid(),
    name: "Contant",
  },
];

export default function Card() {
  const [data, setData] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  const [searchApiData, setSearchApiData] = useState("");

  useEffect(() => {
    const fetchData = () => {
      fetch("https://coralmango.com/api/react-test")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setSearchApiData(json);
          // console.log(json)
        });
    };
    fetchData();
  }, []);
  const handleFilter = (e) => {
    if (e.target.value == "") {
      setData(searchApiData);
    } else {
      const filterResult = searchApiData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (filterResult.length > 0) {
        setData(filterResult);
      } else {
        setData([{ name: "no Data" }]);
      }
    }
    setFilterVal(e.target.value);
  };
  return (
    
<div className="card_page">
<div className="search_card">
      
        <div className="search_box">
          <input
            type="search"
            placeholder="Search"
            value={filterVal}
            onChange={(e) => handleFilter(e)}
          />
        </div>
      
        
          <div className="gallery_wrapper">
        {data.map((item) => {
          return (
            <div className="main_div_createnote">
            <ion-avatar>
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
              </ion-avatar>
              <h2>{item.name}</h2>
              <p>{item.occupation}</p>
              <div className= "year">
              <p>{item.age}</p>
              </div>
            </div>
          );
        })}
        
    </div>
</div>
     </div>
    
  );
}
