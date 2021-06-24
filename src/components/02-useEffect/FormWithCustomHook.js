import React, { useEffect } from "react";
import "./effects.css";
import { useForm } from "./../../hooks/useForm";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    options: null,
    options2: null,
  });

  const { name, email, password, options, options2 } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  useEffect(() => {
    console.log("Email cambio");
  }, [email]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Tu pass"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <select
          name="options"
          id="options"
          onChange={handleInputChange}
          value={options}
        >
          <option value="">Seleccione uno</option>
          <option value="1">Uno</option>
          <option value="2">Dos</option>
          <option value="3">Tres</option>
        </select>
      </div>
      <div className="form-group" onChange={handleInputChange}>
        <input type="radio" name="options2" id="" value="1" />
        <label htmlFor="">Uno</label>
        <input type="radio" name="options2" id="" value="2" />
        <label htmlFor="">Dos</label>
        <input type="radio" name="options2" id="" value="3" />
        <label htmlFor="">Tres</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
