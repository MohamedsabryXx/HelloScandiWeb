import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductAdd() {
  const [value, setValue] = useState({
    switcher: "DVD",
  });

  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [SKU, setSKU] = useState("");
  const [size, setSize] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setValue({
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const handleClickSave = (e) => {
    e.preventDefault();
    const data = {
      price,
      name,
      SKU,
      weight,
      height,
      length,
      width,
      size,
    };
    try {
      navigate("/", { state: data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    try {
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="product-header">
        <h1 className="product-header__title">Product Add</h1>
        <div className="product-header__buttons">
          <button
            form="poduct_form"
            className="btn btn-add"
            onSubmit={handleClickSave}
          >
            Save
          </button>
          <button
            className="btn btn-delete"
            id="delete-product-btn"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="product-form">
        <form id="poduct_form" onSubmit={handleClickSave}>
          <div className="product-form__element">
            <p className="product-form__element--title">SKU</p>
            <input
              className="product-form__element--input"
              value={SKU}
              onChange={(e) => setSKU(e.target.value)}
              required
            />
          </div>
          <div className="product-form__element">
            <p className="product-form__element--title">Name</p>
            <input
              className="product-form__element--input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="product-form__element">
            <p className="product-form__element--title">Price ($)</p>
            <input
              className="product-form__element--input"
              value={price}
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </form>

        <div className="product-form__element">
          <label className="product-form__element--title" htmlFor="switcher">
            Type Switcher
          </label>
          <select name="switcher" id="productType" onChange={handleChange}>
            <option value="DVD">DVD</option>
            <option value="Furniture">Furniture</option>
            <option value="Book">Book</option>
          </select>
        </div>

        {value.switcher === "DVD" && (
          <form
            className="product-form__element--form"
            id="DVD"
            onSubmit={handleClickSave}
          >
            <div className="product-form__element">
              <p className="product-form__element--title">Size (MB)</p>
              <input
                className="product-form__element--input"
                value={size}
                type="number"
                onChange={(e) => setSize(e.target.value)}
                required
              />
            </div>
            <p className="product-form__element--desc">Please, provide size</p>
          </form>
        )}

        {value.switcher === "Furniture" && (
          <form
            className="product-form__element--form"
            id="Furniture"
            onSubmit={handleClickSave}
          >
            <div className="product-form__element">
              <p className="product-form__element--title">Height (CM)</p>
              <input
                className="product-form__element--input"
                value={height}
                type="number"
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div className="product-form__element">
              <p className="product-form__element--title">Width (CM)</p>
              <input
                className="product-form__element--input"
                value={width}
                type="number"
                onChange={(e) => setWidth(e.target.value)}
                required
              />
            </div>
            <div className="product-form__element">
              <p className="product-form__element--title">Length (CM)</p>
              <input
                className="product-form__element--input"
                value={length}
                type="number"
                onChange={(e) => setLength(e.target.value)}
                required
              />
            </div>
            <p className="product-form__element--desc">
              Please, provide dimensions
            </p>
          </form>
        )}
        {value.switcher === "Book" && (
          <form
            className="product-form__element--form"
            id="Book"
            onSubmit={handleClickSave}
          >
            <div className="product-form__element">
              <p className="product-form__element--title">Weight (KG)</p>
              <input
                className="product-form__element--input"
                value={weight}
                type="number"
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <p className="product-form__element--desc">
              Please, provide weight
            </p>
          </form>
        )}
      </div>
    </React.Fragment>
  );
}
