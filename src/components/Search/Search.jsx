import React from "react";
import s from "./Search.module.scss";
import { SearchContext } from "../../App";
const Search = () => {
  const {searchValue, setSearchValue} = React.useContext(SearchContext)
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
      <svg
        className={s.icon}
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        height="600px"
        width="600px"
        version="1.1"
        id="Capa_1"
        viewBox="0 0 488.4 488.4"
      >
        <g>
          <g>
            <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6    s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2    S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7    S381.9,104.65,381.9,203.25z" />
          </g>
        </g>
      </svg>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={s.input}
        type="text"
        placeholder="Search..."
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue("")}
          className={s.clearIcon}
          xmlns="http://www.w3.org/2000/svg"
          fill=""
          version="1.1"
          id="Capa_1"
          viewBox="0 0 490 490"
        >
          <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 " />
        </svg>
      )}
      </div>
    </div>
  );
};
export default Search;
