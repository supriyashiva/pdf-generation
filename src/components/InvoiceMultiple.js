import React from "react";
//import "./styles.css";
import { Table } from "reactstrap";
//import Pdf from "react-to-pdf";

const options = {
  orientation: "portait",
  unit: "mm",
  format: [210, 297],
};

const ref = React.createRef();

const data1 = [
  {
    invno: 1,
    date: "1-4-2022",
    stdname: "rrr",
    fee: "847.46",
    cgst: "76.27",
    sgst: "76.27",
    amount: "1000",
    instname: "CEDEES ONLINE - MAHARASHTRA",
    instaddress:
      "SECOND FLOOR, No.209, TIME SQUARE, PUNE SATARA ROAD,BIBAVEWADI, Pune, Maharashtra, 411037",
    gstnumber: "27BQYPS8411E1Z8",
    // image:
    //   "blob:https://web.whatsapp.com/5f503f95-0fd8-4756-8e40-cdf4acdc587f.jpg ",
  },
  {
    invno: 6,
    date: "1-4-2022",
    stdname: "Tejas",
    fee: "1694.92",
    cgst: "152.54",
    sgst: "152.54",
    amount: "2000",
    instname: "CEDEES INSTITUTE",
    instaddress:
      "1st Floor, 2861, MGM Square, 4th main,3rd cross, MCC B Block,Davangere, Karnataka, 577004",
    gstnumber: "29AFMPT3622A1ZG",
  },
  {
    invno: 2,
    date: "15-4-2022",
    stdname: "rrr",
    fee: "3389.83",
    cgst: "305.08",
    sgst: "305.08",
    amount: "4000",
    instname: "CEDEES ONLINE - MAHARASHTRA",
    instaddress:
      "SECOND FLOOR, No.209, TIME SQUARE, PUNE SATARA ROAD,BIBAVEWADI, Pune, Maharashtra, 411037",
    gstnumber: "27BQYPS8411E1Z8",
  },
  {
    invno: 7,
    date: "15-4-2022",
    stdname: "Tejas",
    fee: "6779.66",
    cgst: "610.17",
    sgst: "610.17",
    amount: "8000",
    instname: "CEDEES INSTITUTE",
    instaddress:
      "1st Floor, 2861, MGM Square, 4th main,3rd cross, MCC B Block,Davangere, Karnataka, 577004",
    gstnumber: "29AFMPT3622A1ZG",
  },
];

export default function InvoiceMultiple() {
  return (
    <div className="App">
      {/* <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf> */}
      {/* <div
        style={{ marginRight: "50px", marginBottom: "50px", width: "10px" }}
      ></div> */}
      <div
        ref={ref}
        style={{ marginRight: "100px", width: "750px", height: "2097px" }}
      >
        {data1.map((val, key) => {
          return (
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
                    <img
                      style={{ height: "60px", width: "60px" }}
                      src="https://www.cedees.in/images/cedees-maharastra.jpg"
                    />
                  </td>
                  <td
                    colspan="6"
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                      padding: "0px",
                      borderTop: "2px solid black",
                      borderRight: "2px solid black",
                    }}
                  >
                    {val.instname}
                  </td>
                  {/* <td
                    rowspan="3"
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      msTextAutospace: "1",
                      border: "1px solid black",
                      padding: "0px",
                      borderRight: "2px solid black",
                      borderTop: "2px solid black",
                    }}
                  >
                    Date :{val.date}
                  </td> */}
                </tr>

                <tr
                  style={{ height: "30px", padding: "0px", fontSize: "12px" }}
                >
                  <td
                    style={{
                      textAlign: "center",
                      border: "1px solid black",
                      padding: "0px",
                      borderBottom: "none",
                      borderRight: "2px solid black",
                    }}
                    colspan="6"
                  >
                    {val.instaddress}
                  </td>
                </tr>

                <tr style={{ height: "20px", fontSize: "12px" }}>
                  <td
                    colspan="6"
                    style={{
                      textAlign: "center",
                      borderBottom: "1px solid black",
                      cellspacing: "20px",
                      padding: "0px",

                      borderLeft: "1px solid black",
                      borderRight: "2px solid black",
                    }}
                  >
                    GSTN : {val.gstnumber}
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
                  TAX INVOICE
                </th>
              </tr>
              <tr style={{ height: "20px", fontSize: "12px" }}>
                <td
                  style={{
                    borderLeft: "2px solid black",
                    fontSize: "12px",
                    padding: "0px",
                    height: "5px",
                  }}
                >
                  Bill To
                </td>
                <td
                  style={{ textAlign: "left", fontSize: "12px", height: "5px" }}
                  colspan="2"
                >
                  {/* AR/123/1234/1234{" "} */}
                </td>
                <td style={{ textAlign: "left", fontSize: "12px" }}> DATE :</td>
                <td style={{ borderRight: "none", fontSize: "12px" }}>
                  {" "}
                  {val.date}
                </td>
                <td
                  style={{ borderRight: "2px solid black", fontSize: "12px" }}
                >
                  {" "}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderLeft: "2px solid black",
                    fontSize: "12px",
                    textAlign: "left",
                    height: "10",
                    borderBottom: "none",
                  }}
                >
                  Student Name:
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
                  {val.stdname}
                  {/* STORE1{" "} */}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    borderBottom: "1px solid black",
                    height: "10",
                    fontSize: "12px",
                  }}
                >
                  Invoice#:
                </td>
                <td
                  style={{
                    borderBottom: "1px solid black",
                    height: "10",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  {val.invno}
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
                  PARTICULARS
                </th>
                <th style={{ border: "1px solid black", fontSize: "12px" }}>
                  AMOUNT
                </th>
                <th style={{ border: "1px solid black", fontSize: "12px" }}>
                  CGST 9%
                </th>
                <th style={{ border: "1px solid black", fontSize: "12px" }}>
                  SGST 9%
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    borderRight: "2px solid black",
                    fontSize: "12px",
                  }}
                >
                  TOTAl
                </th>
              </tr>
              <tfoot>
                <tr style={{ height: "80px" }}>
                  <td colspan="6"></td>
                </tr>
              </tfoot>

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
                  {val.fee}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "0px",
                    border: "1px solid black",
                    fontSize: "14px",
                  }}
                >
                  {val.cgst}
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
                  {val.sgst}
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
                  {val.amount}
                </td>
              </tr>

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
                  {/* Prepared By{" "} */}
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
                  {val.instname}
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
                  {/* Authorised By{" "} */}
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
                  {/* Received By (Purchase Dept.){" "} */}
                </td>
                <td
                  style={{
                    borderBottom: "2px solid black",
                    borderRight: "2px solid black",
                  }}
                ></td>
              </tr>
            </Table>
          );
        })}
      </div>
    </div>
  );
}
