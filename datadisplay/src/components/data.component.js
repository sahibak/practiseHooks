import React, { useEffect, useContext, useState } from "react";
import { fetchApiData, loadData } from "../utils/utils";
import { DataContext } from "../context/context";
import { Collapse } from "react-collapse";
import Update from "./update.component";

export default function DataComponent() {
  const dataSetup = useContext(DataContext);
  const [status, setStatus] = useState({});

  useEffect(() => {
    fetchApiData(
      dataSetup.setData,
      dataSetup.data.page,
      dataSetup.data.nameSearch,
      dataSetup.data.typeSeatch
    );
  }, []);

  let updateView = (event, i) => {
    /**
     * Sets the accordian status (open=true/close=false)
     * @param event onClick event
     * @param {string} i index of the item clicked
     */
    event.preventDefault();
    let lastStatus = { ...status };
    lastStatus[i] = i in lastStatus ? !lastStatus[i] : true;
    setStatus(lastStatus);
  };

  let loadData = (breweryData, updateView, status) => {
    /**
     * Function to load data on the page
     * @param {object} breweryData data to be loaded
     * @param {function} updateView function to be called when a brewery name is clicked
     * @param {object} status status of the accordian for each brewery
     */
    let listOfBrewries = [];
    for (let i = 0; i < breweryData.length; i++) {
      let collapseStatus = i in status ? status[i] : false;
      listOfBrewries.push(
        <div key={i}>
          <button
            onClick={(event) => {
              updateView(event, i);
            }}
          >
            {breweryData[i].name}
          </button>
          <Collapse isOpened={collapseStatus}>
            <div>{breweryData[i].brewery_type}</div>
            {collapseStatus ? (
              <Update breweryToUpdate={breweryData[i].name}></Update>
            ) : null}
          </Collapse>
        </div>
      );
    }
    return listOfBrewries;
  };

  if (dataSetup.data.breweryData.length === 0 && !dataSetup.data.nameSearch) {
    return "Loading...";
  } else if (
    dataSetup.data.breweryData.length === 0 &&
    !!dataSetup.data.nameSearch
  ) {
    return "No more matching results";
  }
  return (
    <>
      <ul>{loadData(dataSetup.data.breweryData, updateView, status)}</ul>
    </>
  );
}
