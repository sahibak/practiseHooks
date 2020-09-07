import React, { useRef } from "react";
import axios from "axios";

export function fetchApiData(setData, pageNumber, name, type) {
  /**Function to fetch api data based on search params and setting data in Context
   * @param {function} setData function to set context
   * @param {string} pageNumber data to be retrieved from API for the specified page
   * @param {string} name name of the brewery to search
   * @param {string} type brewery type to search
   */
  if (!!name) {
    /**If name input is provided */
    axios
      .get(
        `https://api.openbrewerydb.org/breweries?page=${pageNumber}&by_name=${name}`
      )
      .then((response) => {
        setData({
          breweryData: response.data,
          page: pageNumber,
          nameSearch: name,
          typeSearch: type,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    axios
      .get(`https://api.openbrewerydb.org/breweries?page=${pageNumber}`)
      .then((response) => {
        setData({
          breweryData: response.data,
          page: pageNumber,
          nameSearch: name,
          typeSearch: type,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export function paramCleanup(param) {
  /**
   * Function to clean up the search params
   * @param {string} param Input provided by the user
   */
  return param.trim().toLowerCase().replace(" ", "_");
}

export function navigatePage(event, setData, pageNumber, name, type) {
  /**
   * Navigate between pages
   * @param {event} event onClick event
   * @param {function} setData function to set context
   * @param {string} pageNumber data to be retrieved from API for the specified page
   * @param {string} name name of the brewery to search
   * @param {string} type brewery type to search
   */
  event.preventDefault();
  fetchApiData(setData, pageNumber, name, type);
}

export function search(event, setData, pageNumber) {
  /**
   * Search based on text provided
   * @param {event} event Click of the search button
   * @param {function} setData Function to set data in Context
   * @param {string} pageNumber # of the page to be loaded for the result. Eg. loading the 2nd page of results.
   */
  event.preventDefault();
  const searchValue = !!event.target.searchbar.value
    ? paramCleanup(event.target.searchbar.value)
    : "";
  fetchApiData(setData, pageNumber, searchValue, "");
}

export function clearSearch(event, setData, textInput) {
  /**
   * Clear the search and show default results
   * @param {event} event Click of the reset button
   * @param {function} setData Function to set data in Context
   * @param {ref} textInput search input field
   */
  event.preventDefault();
  event.target.searchbar.value = "";
  textInput.current.focus();
  fetchApiData(setData, 1, "", "");
}
