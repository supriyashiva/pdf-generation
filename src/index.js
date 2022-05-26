import React from "react";
import ReactDOM from "react-dom";
//import InvoiceMultiple from "./components/InvoiceMultiple";
import TableHtml from "./components/TableHtml";
//import Newinvoice from "./Newinvoice";

// import "./index.css";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <TableHtml />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
