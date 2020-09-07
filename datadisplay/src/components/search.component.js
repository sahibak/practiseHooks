import React, { useContext, useRef, useEffect } from "react";
import { search, clearSearch } from "../utils/utils";
import { DataContext } from "../context/context";

export default function SearchBar() {
  const dataSetup = useContext(DataContext);
  const textInput = useRef();

  useEffect(() => {
    /**Using effect to focus on search bar on page load */
    textInput.current.focus();
  }, []);

  return (
    <>
      <form
        onSubmit={(event) => search(event, dataSetup.setData)}
        onReset={(event) => clearSearch(event, dataSetup.setData, textInput)}
      >
        <input
          type="text"
          name="searchbar"
          placeholder="Enter name of brewery"
          ref={textInput}
        ></input>
        <button type="submit">Enter</button>
        <button type="reset">Clear Search</button>
      </form>
    </>
  );
}
