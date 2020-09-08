import React, { useContext, useRef, useEffect } from "react";
import { DataContext } from "../context/context";
import _, { initial } from "lodash";

export default function Update(props) {
  const dataSetup = useContext(DataContext);
  console.log("printing props", props.breweryToUpdate);
  return (
    <>
      <form
        onSubmit={(event) => {
          let newType = "macro";
          event.preventDefault();
          let intialData = _.cloneDeep(dataSetup.data);
          console.log("iiiii", intialData.breweryData[0]);
          for (let i = 0; i < intialData.breweryData.length; i++) {
            if (intialData.breweryData[i].name === props.breweryToUpdate) {
              intialData.breweryData[i].brewery_type = newType;
              break;
            }
          }
          console.log("$$$$", intialData.breweryData[0]);
          console.log("####", dataSetup.data.breweryData[0]);
          dataSetup.setData(intialData);
        }}
      >
        <label>New Brewery Type</label>
        <input placeholder="Enter new type"></input>
        <button type="submit">Enter</button>
      </form>
    </>
  );
}
