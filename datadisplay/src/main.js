import React from "react";
import DataComponent from "./components/data.component";
import Pagination from "./components/pagination.component";
import SearchBar from "./components/search.component";
import { DataProvider } from "./context/context";

export function MainPage() {
  return (
    <>
      <DataProvider>
        <SearchBar />
        <DataComponent></DataComponent>
        <Pagination></Pagination>
      </DataProvider>
    </>
  );
}
