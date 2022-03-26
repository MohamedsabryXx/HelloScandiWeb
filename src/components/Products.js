import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Product from "./Product";

export default function Products() {
  const location = useLocation();
  const [deleteSKU, setDeleteSKU] = useState({
    SKU: "",
  });
  const [checked, setChecked] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const handleDelete = () => {
    localStorage.removeItem(deleteSKU.SKU);
    setDeleted(true);
  };

  const { state } = location;

  if (state !== null) {
    localStorage.setItem(`${state.SKU}`, JSON.stringify(state));
    window.history.replaceState({}, undefined);
  }

  return (
    <React.Fragment>
      <div className="product-header">
        <h1 className="product-header__title">Product Header</h1>
        <div className="product-header__buttons">
          <Link to="ProductAdd" className="btn btn-add">
            ADD
          </Link>
          <button
            className="btn btn-delete"
            id="delete-product-btn"
            onClick={() => handleDelete()}
          >
            MASS DELETE
          </button>
        </div>
      </div>
      <div className="product-container">
        {Object.keys(localStorage).map((dataKey, idx) =>
          !deleted ? (
            <Product
              key={idx}
              data={localStorage[dataKey]}
              setDeleteSKU={setDeleteSKU}
              setChecked={setChecked}
              checked={checked}
            />
          ) : null
        )}
      </div>
    </React.Fragment>
  );
}
