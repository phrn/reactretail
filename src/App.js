import "./App.css";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import ItemsBlock from "./components/ItemsBlock/ItemsBlock";
import Sort from "./components/Sort/Sort";
import React from "react";
import axios from "axios";
import Skeleton from "./components/ItemsBlock/Skeleton";
function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("https://67b24836bc0165def8cd2f01.mockapi.io/items")
      .then((response) => response.data)
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">All our items</h2>
            <div className="content__items">
              { isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : items.map((obj) => <ItemsBlock {...obj} key={obj.id}/>) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
