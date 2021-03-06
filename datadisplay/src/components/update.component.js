import React, { useContext } from "react";
import { DataContext } from "../context/context";
import _, { initial } from "lodash";

export default function Update(props) {
  const dataSetup = useContext(DataContext);

  let updateType = (event) => {
    /**
     * To update brewery type and then reset the update field to blank
     * @param event onSubmit event
     */
    event.preventDefault();
    let newType = event.target.newType.value;
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
    /*Clear the type entered */
    event.target.newType.value = "";
  };

  return (
    <>
      <form onSubmit={(event) => updateType(event)}>
        <label>New Brewery Type</label>
        <input name="newType" placeholder="Enter new type"></input>
        <button type="submit">Enter</button>
      </form>
    </>
  );
}
