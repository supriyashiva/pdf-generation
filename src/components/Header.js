import React from "react";
import { render } from "react-dom";
import { renderToString } from "react-dom/server";

import jsPDF from "jspdf";

const data = [
  {
    srno: "1",
    item: "Air Terminal Al 1.15 m long Dia 8mm for roof. 1mtr vertical with one side taper and 150mm after bend in 90 degrees",
    cstk: 10,
    rstk: 100,
    spec: "some specs",
    rem: "12",
  },
  {
    srno: "2",
    item: "Conventional Lightning Arrestor/Spike of 1.15 m with C-clamp and 2 nos. clips",
    cstk: 20,
    rstk: 200,
    spec: "some specs",
    rem: "0",
  },
  {
    srno: "3",
    item: "Conventional Lightning Arrestor/Spike of 1.15 m with C-clamp and 2 nos. clips",
    cstk: 30,
    rstk: 300,
    spec: "some specs",
    rem: "0",
  },
  {
    srno: "4",
    item: "Air terminal holder C-clamp for transformer LA",
    cstk: 40,
    rstk: 400,
    spec: "some specs",
    rem: "0",
  },
  {
    srno: "5",
    item: "Hose clip suitable for 80mm dia pipe.(Needed to fix C-clamp)",
    cstk: 50,
    rstk: 500,
    spec: "some specs",
    rem: "0",
  },
  {
    srno: "6",
    item: "Roof conductor of Diameter 0-8mm, Cross Section 50mm2, of material AlMgSi",
    cstk: 60,
    rstk: 600,
    spec: "some specs",
    rem: "0",
  },
  {
    srno: "7",
    item: "GI flat (25×6mm) Strip.Having width-25mm,Thickness-6mm,Material-Hot dipped Galvanized Iron",
    cstk: 70,
    rstk: 700,
    spec: "some specs",
    rem: "0",
  },
  {
    srno: "8",
    item: "Parallel Connectors for connecting two conductors in parallel manner with clamping range-Rd/Rd 7-10mm",
    cstk: 80,
    rstk: 800,
    spec: "some specs",
    rem: "0",
  },
  {
    srno: "9",
    item: "Universal connector with clamping range-8-10mm with truss head screw M10x35 mm.",
    cstk: 90,
    rstk: 900,
    spec: "some specs",
    rem: "0",
  },
  {
    srno: "10",
    item: "Conductor holder for Rd 8-10mm",
    cstk: 100,
    rstk: 1000,
    spec: "some specs",
    rem: "0",
  },
  {
    srno: "11",
    item: "Self threaded screw with rubber gasket.30mm long.suitable for conductor holder clamp hole",
    cstk: 110,
    rstk: 1100,
    spec: "some specs",
    rem: "0",
  },

  {
    srno: "12",
    item: "UNI Disconnecting Clamps with intermediate plate for round and flat conductor with clamping range - Rd / Fl 8-10 / 30  mm",
    cstk: 120,
    rstk: 1200,
    spec: "some specs",
    rem: "0",
  },
];
const len = data.length;
// export default function Header() {
//   return (
const Header = () => {
  <div>
    <h3> This is invoice Table </h3>
    <table
      style={{
        width: "60%",

        marginLeft: "auto",
        marginRight: "auto",
      }}
      // border="1"
      cellspacing="0"
    >
      <thead>
        <tr>
          <td
            rowspan="3"
            style={{
              border: "1px solid black",
              borderLeft: "2px solid black",
              borderTop: "2px solid black",
            }}
          ></td>
          <th
            colspan="4"
            style={{
              border: "1px solid black",
              borderTop: "2px solid black",
            }}
          >
            SGI ENGINEERS PVT LTD
          </th>
          <td
            rowspan="3"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              border: "1px solid black",
              borderRight: "2px solid black",
              borderTop: "2px solid black",
            }}
          >
            SGI FR 47 REV.01 01.04.2019
          </td>
        </tr>

        <tr style={{ height: "100px" }}>
          <td
            style={{
              textAlign: "center",
              border: "1px solid black",
              borderBottom: "none",
            }}
            colspan="4"
          >
            Ground Floor, Indl.Gala No.2, Nidhi Commercial & industrial
            Hub,Tungar Phata, Sativali,Vasai(E), Palghar-401 208, Maharashtra,
            INDIA Ph : 9168492922 / 9607472722 / 9168482822
          </td>
        </tr>

        <tr>
          <td
            colspan="2"
            style={{
              textAlign: "center",
              borderBottom: "1px solid black",
              borderLeft: "1px solid black",
            }}
          >
            Email:stores@sgihouse.in
          </td>

          <td
            colspan="2"
            style={{
              textAlign: "center",
              borderBottom: "1px solid black",
              borderRight: "1px solid black",
            }}
          >
            Web:www.sgihouse.in
          </td>
        </tr>
      </thead>

      <tr>
        <th
          colspan="6"
          style={{ border: "2px solid black", borderTop: "1px solid black" }}
        >
          PURCHASE REQUISITION
        </th>
      </tr>
      <tr>
        <td style={{ borderLeft: "2px solid black" }}>PR.NO: </td>
        <td colspan="2"> sample </td>
        <td> </td>
        <td style={{ textAlign: "right" }}> DATE : </td>
        <td style={{ borderRight: "2px solid black" }}> 13-04-2022</td>
      </tr>
      <tr>
        <td
          style={{
            borderLeft: "2px solid black",
            borderBottom: "none",
          }}
        >
          FROM:{" "}
        </td>
        <td colspan="2" style={{ borderBottom: "1px solid black" }}>
          {" "}
          STORE1{" "}
        </td>
        <td style={{ borderBottom: "1px solid black" }}> </td>
        <td style={{ textAlign: "right", borderBottom: "1px solid black" }}>
          TO :{" "}
        </td>
        <td
          style={{
            borderRight: "2px solid black",
            borderBottom: "1px solid black",
          }}
        >
          STORE2
        </td>
      </tr>
      <tr>
        <th
          style={{
            border: "1px solid black",
            borderLeft: "2px solid black",
            borderTop: "2px solid black",
          }}
        >
          SR.NO
        </th>
        <th style={{ border: "1px solid black" }}>MATERIAL DESCRIPTION</th>
        <th style={{ border: "1px solid black" }}>CURRENT STOCK</th>
        <th style={{ border: "1px solid black" }}>REQUIRED STOCK</th>
        <th style={{ border: "1px solid black" }}>SPECIFICATIONS IF ANY</th>
        <th
          style={{
            border: "1px solid black",
            borderRight: "2px solid black",
          }}
        >
          REMARKS
        </th>
      </tr>
      <tfoot>
        <tr style={{ height: "80px" }}>
          <td colspan="6"></td>
        </tr>
      </tfoot>

      {data.map((val, key) => {
        return (
          <tr key={key}>
            <td style={{ textAlign: "center", border: "1px solid black" }}>
              {val.srno}
            </td>
            <td style={{ textAlign: "center", border: "1px solid black" }}>
              {val.item}
            </td>
            <td style={{ textAlign: "center", border: "1px solid black" }}>
              {val.cstk}
            </td>
            <td style={{ textAlign: "center", border: "1px solid black" }}>
              {val.rstk}
            </td>
            <td style={{ textAlign: "center", border: "1px solid black" }}>
              {val.spec}
            </td>

            <td
              style={{ textAlign: "center", border: "1px solid black" }}
              //  rowspan={len}
            >
              null
            </td>
          </tr>
        );
      })}
    </table>
  </div>;
  // );
};
const Print = () => {
  const string = renderToString(<Header />);
  const pdf = new jsPDF("p", "mm", "a4");
  pdf.fromHTML(string);
  pdf.save("pdf");
};

export default function App5() {
  return (
    <div>
      <button onClick={Print}>print</button>
    </div>
  );
}
