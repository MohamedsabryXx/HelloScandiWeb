import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

export default function Product(props) {
  const data = JSON.parse(props.data);

  const getDeleteInfo = () => {
    if (!props.checked) {
      props.setChecked(true);
      props.setDeleteSKU({ SKU: data.SKU });
    } else {
      props.setChecked(false);
    }
  };

  return (
    <div className="product-container__product">
      <button className="btn-delete" onClick={getDeleteInfo}>
        {props.checked ? (
          <FontAwesomeIcon className="delete-checkbox" icon={faSquareCheck} />
        ) : (
          <FontAwesomeIcon className="delete-checkbox" icon={faSquare} />
        )}
      </button>
      <div className="product-container__product--items">
        <p>{data.SKU}</p>
        <p>{data.name}</p>
        <p>{data.price}</p>
        {Object.keys(data).map((rest, idx) => {
          if (
            rest !== "SKU" &&
            rest !== "name" &&
            rest !== "price" &&
            data[rest]
          ) {
            return <p key={idx}>{data[rest]}</p>;
          }
        })}
      </div>
    </div>
  );
}
