import React, { useContext, useRef, useEffect } from "react";
import { DataContext } from "../context/context";

export default function Update(props) {
  const dataSetup = useContext(DataContext);
  console.log("printing props", props.breweryToUpdate);
  return (
    <>
      <form
        onSubmit={(event) => {
          let newType = "macro";
          event.preventDefault();
          let intialData = [...dataSetup.data.breweryData];
          console.log("iiiii", intialData[0]);
          intialData[0].brewery_type = "new";
          //   testing
          //   for (let i = 0; i < intialData.length; i++) {
          //     if (intialData[i].name === props.breweryToUpdate) {
          //       console.log(
          //         "enter if",
          //         intialData[i].name,
          //         intialData[i].brewery_type
          //       );
          //       intialData[i].brewery_type = newType;
          //       break;
          //     }
          //   }
          console.log("####", dataSetup.data);
          //   dataSetup.setData({
          //     breweryData: breweryData,
          //     page: 1,
          //     nameSearch: "",
          //     typeSearch: "",
          //   });
        }}
      >
        <label>New Brewery Type</label>
        <input placeholder="Enter new type"></input>
        <button type="submit">Enter</button>
      </form>
    </>
  );
}
