import React, { useState } from "react";
import "../02-useEffect/effects.css";
import { MultipleCustomHooks } from "../examples/MultipleCustomHooks";

export const RealExampleUseRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real Example useRef</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button className="btn btn-primary mt-4" onClick={() => setShow(!show)}>
        Show/hide
      </button>
    </div>
  );
};
