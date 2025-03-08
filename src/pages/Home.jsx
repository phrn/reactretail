import React from "react";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import axios from "axios";
import Skeleton from "../components/ItemsBlock/Skeleton";
import ItemsBlock from "../components/ItemsBlock/ItemsBlock";
import Pagination from "../components/Pagination/Pagination";
import { SearchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/filter/filterSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  console.log("redux:", categoryId);

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "popular",
    sortProperty: "rating",
  });
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [open, setOpen] = React.useState(true);
  const sortBy = sortType.sortProperty.replace("-", "");
  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  const products = items.map((obj) => <ItemsBlock {...obj} key={obj.id} />);
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://67b24836bc0165def8cd2f01.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
    setActiveIndex(id);
    setOpen(false);
  };
  return (
    <>
      <div className="container">
        <div className="content__top"></div>
        <div className="content__title">
          <Categories
            value={categoryId}
            onChangeCategory={onChangeCategory}
            open={open}
            setOpen={setOpen}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <h2>All our items</h2>
          <Sort sortValue={sortType} onChangeSort={(i) => setSortType(i)} />
        </div>
        <div className="content__items">{isLoading ? skeletons : products}</div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  );
};
