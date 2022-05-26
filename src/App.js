import React from "react";
import { Component } from "react";
import { Button } from "reactstrap";
import jsPDF from "jspdf";
import logo from "../src/image/a.png";
//import Generatepdf from "./Generatepdf";

const data1 = [
  {
    invno: "4",
    date: "5-4-2022",
    stdname: "Girish Gajendran",
    fee: "7627.12",
    cgst: "686.44",
    sgst: "686.44",
    amount: "9000",
    instname: "CEDEES ONLINE - MAHARASHTRA",
    address1: "SECOND FLOOR, No.209, TIME SQUARE,",
    address2: "PUNE SATARA ROAD,BIBAVEWADI,",
    address3: "Pune, Maharashtra, 411037",
    gstnumber: "27BQYPS8411E1Z8",
  },
  {
    invno: "2",
    date: "5-4-2022",
    stdname: "Sudeesh Nair",
    fee: "6779.66",
    cgst: "610.17",
    sgst: "610.17",
    amount: "8000",
    instname: "CEDEES ONLINE - KERALA",
    address1: "FIRST FLOOR, T.C. NO.25/1107-2,",
    address2: "RAMAKRISHNA BUILDING,EAST THAMPANOOR,",
    address3: "THIRUVANANTHAPURAM,Kerala, 695014",
    gstnumber: "32BQYPS8411E1ZH",
  },
  {
    invno: "3",
    date: "28-4-2022",
    stdname: "Girish Gajendran",
    fee: "847.46",
    cgst: "76.27",
    sgst: "76.27",
    amount: "1000",
    instname: "CEDEES ONLINE - MAHARASHTRA",
    address1: "SECOND FLOOR, No.209, TIME SQUARE,",
    address2: "PUNE SATARA ROAD,BIBAVEWADI,",
    address3: "Pune, Maharashtra, 411037",
    gstnumber: "27BQYPS8411E1Z8",
  },
  {
    invno: "1",
    date: "28-4-2022",
    stdname: "Sudeesh Nair",
    fee: "1694.92",
    cgst: "152.54",
    sgst: "152.54",
    amount: "2000",
    instname: "CEDEES ONLINE - KERALA",
    address1: "FIRST FLOOR, T.C. NO.25/1107-2,",
    address2: "RAMAKRISHNA BUILDING,EAST THAMPANOOR,",
    address3: "THIRUVANANTHAPURAM,Kerala, 695014",
    gstnumber: "32BQYPS8411E1ZH",
  },
];

export default function App() {
  const Generatepdf = () => {
    //console.log("button clicked");
    // let users = JSON.parse(data1);
    // console.log(users[1]);
    var doc = new jsPDF("p", "mm", "a4", "false");

    doc.line(20, 28, 190, 28);

    doc.line(20, 85, 190, 85);
    doc.line(20, 93, 190, 93); //3rd horizontal line (y value changes)
    doc.line(82, 115, 190, 115); //new total horizontal line
    doc.line(20, 120, 190, 120); //4th line 107,120 y changed
    doc.line(20, 140, 190, 140); //5th line horizontal 112instaed 140

    doc.line(20, 28, 20, 140); //changed 112 t0 130
    doc.line(190, 28, 190, 140); //chnaged 112 to 130 y axis

    doc.line(37, 85, 37, 120); //1st vertical line changed y2 107 to 120
    doc.line(82, 85, 82, 120); //77 t0 80 after particular line
    //doc.line(120, 85, 120, 107);
    doc.line(105, 85, 105, 120); //100 to 115 3rd vertical line
    doc.line(130, 85, 130, 120); //4th vertical line  120 to 125
    doc.line(160, 85, 160, 120); //5th 150 to 160

    doc.setFontSize(10);
    doc.text("Sl No", 25, 90);
    const sno = "1";
    doc.text(sno, 25, 98);

    doc.text("Particulars", 42, 90);

    doc.text("Amount", 85, 90); //80 t0 84
    const amount = "10,000";
    doc.text(amount, 89, 100);

    doc.text("CGST 9%", 107, 90); //100 to 105
    const cgst = "900";
    doc.text(cgst, 110, 100);

    doc.text("SGST 9%", 135, 90);
    const sgst = "900";
    doc.text(sgst, 140, 100);

    doc.text("Total", 168, 90); //160 to 162
    const total = "11800";
    doc.text(total, 170, 100);

    doc.text("Shivakumaraswamy Layout,", 21, 50);
    doc.text("Hadadi Road, Davangere,", 21, 54);
    doc.text("Karnataka - 577 005", 21, 58);
    doc.text("GSTN :", 21, 62);

    doc.text("Name of Student:", 21, 76);
    doc.text("Invoice No :", 140, 45);
    const invoice = "1";
    doc.text(invoice, 162, 45);
    doc.text("Date :", 150, 49);
    const date = "05/04/2022";
    doc.text(date, 162, 49);

    doc.text("coaching fee towards", 38, 98);
    doc.text("Total", 70, 118);
    doc.text("NEET", 38, 104);
    //doc.text("10,000", 89, 100); //taking based on vertical line
    //doc.text("900", 110, 100);
    //doc.text("900", 140, 100);
    //doc.text("11,800", 170, 100);

    //doc.text("10,000", 89, 119);
    const a1 = "10,000";
    doc.text(a1, 89, 119);

    //doc.text("900", 110, 119);
    const a2 = "900";
    doc.text(a2, 110, 119);

    //doc.text("900", 140, 119);
    const a3 = "900";
    doc.text(a3, 140, 119);

    //doc.text("11,800", 170, 119);
    const a4 = "11800";
    doc.text(a4, 170, 119);

    doc.text("For sharada coaching center", 140, 130);
    doc.setFont("Helvertica-Bold", "bold");
    doc.text("TAX INVOICE", 190 / 2, 34);
    doc.text("SHARDA COACHING CENTER", 21, 45);
    var c1 = "BILL TO";
    doc.text(c1, 21, 72);

    //////////////////Below is the second table
    doc.line(20, 168, 190, 168);
    doc.line(20, 227, 190, 227);
    doc.line(20, 235, 190, 235);
    doc.line(82, 257, 190, 257);
    doc.line(20, 262, 190, 262);
    doc.line(20, 282, 190, 282);

    doc.line(20, 168, 20, 282);
    doc.line(190, 168, 190, 282);

    doc.line(37, 227, 37, 262);
    doc.line(82, 227, 82, 262);
    doc.line(105, 227, 105, 262);
    doc.line(130, 227, 130, 262);
    doc.line(160, 227, 160, 262);

    doc.setFontSize(10);
    doc.text("Sl No", 25, 232);
    const sno1 = "1";
    doc.text(sno1, 25, 240);

    doc.text("Particulars", 42, 232);

    doc.text("Amount", 85, 232); //80 t0 84
    const amount1 = "10,000";
    doc.text(amount1, 89, 242);

    doc.text("CGST 9%", 107, 232); //100 to 105
    const cgst1 = "900";
    doc.text(cgst1, 110, 242);

    doc.text("SGST 9%", 135, 232);
    const sgst1 = "900";
    doc.text(sgst1, 140, 242);

    doc.text("Total", 168, 232); //160 to 162
    const total1 = "11800";
    doc.text(total1, 170, 242);

    doc.text("Shivakumaraswamy Layout,", 21, 192);
    doc.text("Hadadi Road, Davangere,", 21, 196);
    doc.text("Karnataka - 577 005", 21, 200);
    doc.text("GSTN :", 21, 204);

    doc.text("Name of Student:", 21, 218);
    doc.text("Invoice No :", 140, 187);
    const invoice1 = "1";
    doc.text(invoice1, 162, 187);
    doc.text("Date :", 150, 191);
    const date1 = "05/04/2022";
    doc.text(date1, 162, 191);

    doc.text("coaching fee towards", 38, 240);
    doc.text("Total", 70, 260);
    doc.text("NEET", 38, 246);

    const b1 = "10,000";
    doc.text(b1, 89, 261);

    //doc.text("900", 110, 119);
    const b2 = "900";
    doc.text(b2, 110, 261);

    //doc.text("900", 140, 119);
    const b3 = "900";
    doc.text(b3, 140, 261);

    //doc.text("11,800", 170, 119);
    const b4 = "11800";
    doc.text(b4, 170, 261);

    doc.text("For sharada coaching center", 140, 272);
    doc.setFont("Helvertica-Bold", "bold");
    doc.text("TAX INVOICE", 190 / 2, 176);
    doc.text("SHARDA COACHING CENTER", 21, 187);
    doc.text("BILL TO", 21, 214);

    doc.addPage();

    doc.save("invoice.pdf");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={Generatepdf}>Download pdf</Button>
    </div>
  );
}
