import React, { useState, useEffect } from "react";
import "./Search.css";

export default function Search() {
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
    <div style={{ margin: "20px 20%" }}>
      <div className="p-input-icon-right"></div>
      <div>
        <div className="App">
          <input
            type="search"
            placeholder="Search"
            value={filterVal}
            onChange={(e) => handleFilter(e)}
          />
        </div>
        <div className="table_box">
          <table>
            <th>Name</th>
            <th>age</th>
            <th>occupation</th>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.occupation}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
