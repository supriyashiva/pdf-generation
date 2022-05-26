import React from "react";
//import "./styles.css";
import { Table } from "reactstrap";
//import Pdf from "react-to-pdf";

const options = {
  orientation: "portait",
  unit: "mm",
  format: [210, 297],
};

//const ref = React.createRef();

//This program ran on codesandbox then it works good
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
    item: "GI flat (25×6mm) Strip. Having width - 25mm, Thickness - 6mm, Material-Hot dipped Galvanized Iron",
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

export default function App() {
  return (
    <div className="App">
      {/* <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf> */}
      {/* <div
        style={{ marginRight: "50px", marginBottom: "50px", width: "10px" }}
      ></div> */}
      <div
        // ref={ref}
        style={{ marginRight: "100px", width: "750px", height: "2097px" }}
      >
        <Table
          style={{
            marginInlineEnd: "30px",
            marginInlineStart: "30px",
            marginBlockStart: "30px",
            marginTop: "20px",
            padding: "0px",
            marginBottom: "10px",
            width: "95%",
          }}
          cellspacing="0"
        >
          <thead>
            <tr
              style={{
                height: "20px",
                fontSize: "12px",
                fontWeight: "bold",
                marginTop: "200px",
              }}
            >
              <td
                rowspan="3"
                style={{
                  border: "1px solid black",
                  borderLeft: "2px solid black",
                  marginTop: "200px",
                  padding: "0px",
                  borderTop: "2px solid black",
                  width: "500px",
                }}
              >
                {" "}
              </td>
              <td
                colspan="4"
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  padding: "0px",
                  borderTop: "2px solid black",
                }}
              >
                SGI ENGINEERS PVT LTD
              </td>
              <td
                rowspan="3"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  border: "1px solid black",
                  padding: "0px",
                  borderRight: "2px solid black",
                  borderTop: "2px solid black",
                }}
              >
                SGI FR 47 REV.01 01.04.2019
              </td>
            </tr>

            <tr style={{ height: "30px", padding: "0px", fontSize: "12px" }}>
              <td
                style={{
                  textAlign: "center",
                  border: "1px solid black",
                  padding: "0px",
                  borderBottom: "none",
                }}
                colspan="4"
              >
                Ground Floor, Indl.Gala No.2, Nidhi Commercial & industrial
                Hub,Tungar Phata, Sativali,Vasai(E), Palghar-401 208,
                Maharashtra, INDIA Ph : 9168492922 / 9607472722 / 9168482822
              </td>
            </tr>

            <tr style={{ height: "20px", fontSize: "12px" }}>
              <td
                colspan="2"
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid black",
                  cellspacing: "20px",
                  padding: "0px",

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
                  padding: "0px",
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
              style={{
                border: "2px solid black",
                borderTop: "1px solid black",
                fontSize: "12px",
                padding: "0px",
                textAlign: "center",
                height: "5px",
              }}
            >
              PURCHASE REQUISITION
            </th>
          </tr>
          <tr>
            <td
              style={{
                borderLeft: "2px solid black",
                fontSize: "12px",
                padding: "0px",
                height: "5px",
              }}
            >
              PR.NO:{" "}
            </td>
            <td
              style={{ textAlign: "left", fontSize: "12px", height: "5px" }}
              colspan="2"
            >
              AR/123/1234/1234{" "}
            </td>
            <td style={{ textAlign: "right", fontSize: "12px" }}> DATE : </td>
            <td style={{ borderRight: "none", fontSize: "12px" }}>
              {" "}
              13-04-2022
            </td>
            <td style={{ borderRight: "2px solid black", fontSize: "12px" }}>
              {" "}
            </td>
          </tr>
          <tr>
            <td
              style={{
                borderLeft: "2px solid black",
                fontSize: "12px",
                textAlign: "right",
                height: "10",
                borderBottom: "none",
              }}
            >
              FROM:
            </td>
            <td
              colspan="2"
              style={{
                borderBottom: "1px solid black",
                textAlign: "left",
                height: "10",
                fontSize: "12px",
              }}
            >
              STORE1{" "}
            </td>
            <td
              style={{
                textAlign: "right",
                borderBottom: "1px solid black",
                height: "10",
                fontSize: "12px",
              }}
            >
              TO :
            </td>
            <td
              style={{
                borderBottom: "1px solid black",
                height: "10",
                fontSize: "12px",
                textAlign: "left",
              }}
            >
              STORE2
            </td>
            <td
              style={{
                borderBottom: "1px solid black",
                borderRight: "2px solid black",
              }}
            >
              {" "}
            </td>
          </tr>
          <tr>
            <th
              style={{
                border: "1px solid black",
                fontSize: "12px",
                borderLeft: "2px solid black",
                width: "50px",
                borderTop: "2px solid black",
              }}
            >
              SR.NO
            </th>
            <th
              style={{
                border: "1px solid black",
                fontSize: "12px",
                textAlign: "center",
                padding: "0px",
                width: "5000px",
              }}
            >
              MATERIAL DESCRIPTION
            </th>
            <th style={{ border: "1px solid black", fontSize: "12px" }}>
              CURRENT STOCK
            </th>
            <th style={{ border: "1px solid black", fontSize: "12px" }}>
              REQUIRED STOCK
            </th>
            <th style={{ border: "1px solid black", fontSize: "12px" }}>
              SPECIFICATIONS IF ANY
            </th>
            <th
              style={{
                border: "1px solid black",
                borderRight: "2px solid black",
                fontSize: "12px",
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
                <td
                  style={{
                    textAlign: "center",
                    padding: "0px",
                    border: "1px solid black",
                    fontSize: "14px",
                  }}
                >
                  {val.srno}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "0px",
                    border: "1px solid black",
                    fontSize: "14px",
                  }}
                >
                  {val.item}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "0px",
                    border: "1px solid black",
                    fontSize: "14px",
                  }}
                >
                  {val.cstk}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "0px",
                    border: "1px solid black",
                    fontSize: "14px",
                  }}
                >
                  {val.rstk}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid black",
                    padding: "0px",
                    cellspacing: "5px",
                    fontSize: "14px",
                  }}
                >
                  {val.spec}
                </td>

                <td
                  style={{
                    textAlign: "center",
                    padding: "0px",
                    border: "1px solid black",
                    fontSize: "14px",
                  }}
                  //  rowspan={len}
                >
                  null
                </td>
              </tr>
            );
          })}
          <tr>
            <td
              style={{
                fontSize: "14px",
                textAlign: "center",
                height: "125px",
                borderLeft: "2px solid black",
                borderBottom: "2px solid black",
              }}
            >
              {" "}
              Prepared By{" "}
            </td>
            <td
              style={{
                fontSize: "14px",
                textAlign: "right",
                height: "125px",
                borderBottom: "2px solid black",
              }}
            >
              {" "}
              Checked By{" "}
            </td>
            <td style={{ borderBottom: "2px solid black" }}></td>
            <td
              style={{
                fontSize: "14px",
                height: "125px",
                borderBottom: "2px solid black",
              }}
            >
              {" "}
              Authorised By{" "}
            </td>
            <td
              style={{
                fontSize: "14px",
                textAlign: "right",
                height: "125px",
                borderBottom: "2px solid black",
              }}
            >
              {" "}
              Received By (Purchase Dept.){" "}
            </td>
            <td
              style={{
                borderBottom: "2px solid black",
                borderRight: "2px solid black",
              }}
            ></td>
          </tr>
        </Table>
      </div>
      //{" "}
    </div>
  );
}
