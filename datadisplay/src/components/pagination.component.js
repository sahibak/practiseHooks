import React, { useContext } from "react";
import { navigatePage } from "../utils/utils";
import { DataContext } from "../context/context";

export default function Pagination() {
  const dataSetup = useContext(DataContext);
  return (
    <ul>
      <li
        onClick={(event) =>
          navigatePage(
            event,
            dataSetup.setData,
            1,
            dataSetup.data.nameSearch,
            dataSetup.data.typeSeatch
          )
        }
      >
        Back
      </li>
      <li
        onClick={(event) =>
          navigatePage(
            event,
            dataSetup.setData,
            2,
            dataSetup.data.nameSearch,
            dataSetup.data.typeSeatch
          )
        }
      >
        Next
      </li>
    </ul>
  );
}
