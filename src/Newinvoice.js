import React from "react";
import { Component } from "react";
import { Button } from "reactstrap";
import jsPDF from "jspdf";

const data1 = [
  {
    invno: "1",
    date: "17/11/2021",
    name: "Atul Sinha",
    email: "dr.atulsinha96@gmail.com",
    desc: "Continuation of BDSnext app",
    fee: "1271.19",
    cgst: "114.41",
    sgst: "114.41",
    amount: "1500",
    instname: "BDS Next",
    address1: "#3588, 3rd Floor, AASHIRWAD",
    address2: "7th Main road, MCC B Block",
    address3: "Davangere 577 004",
    gstin: "29AAXFB1594P1ZC",
    logoimg: "bdsnext.png",
  },
  {
    invno: "2",
    date: "17/11/2021",
    name: "Dr.Nosheen Riza",
    email: "nosheenriza@yahoo.in",
    desc: "For BDS next App.",
    fee: "2118.64",
    cgst: "190.68",
    sgst: "190.68",
    amount: "2500",
    instname: "BDS Next",
    address1: "#3588, 3rd Floor, AASHIRWAD",
    address2: "7th Main road, MCC B Block",
    address3: "Davangere 577 004",
    gstin: "29AAXFB1594P1ZC",
    logoimg: "cedees.png",
  },
  {
    invno: "3",
    date: "17/11/2021",
    name: "Ambika Verma",
    email: "vermaambika2110@gmail.com",
    desc: "Untill INI-CET in may",
    fee: "2118.64",
    cgst: "190.68",
    sgst: "190.68",
    amount: "2500",
    instname: "BDS Next",
    address1: "#3588, 3rd Floor, AASHIRWAD",
    address2: "7th Main road, MCC B Block",
    address3: "Davangere 577 004",
    gstin: "29AAXFB1594P1ZC",
    logoimg: "bdsnext.png",
  },
  {
    invno: "4",
    date: "17/11/2021",
    name: "Shamsi A Khan",
    email: "shamsiya.khan@gmail.com",
    desc: "NEET MDS 2022",
    fee: "2118.64",
    cgst: "190.68",
    sgst: "190.68",
    amount: "2500",
    instname: "BDS Next",
    address1: "#3588, 3rd Floor, AASHIRWAD",
    address2: "7th Main road, MCC B Block",
    address3: "Davangere 577 004",
    gstin: "29AAXFB1594P1ZC",
    logoimg: "bdsnext.png",
  },
  {
    invno: "5",
    date: "17/11/2021",
    name: "Himani Sarda",
    email: "janvisarda97@gmail.com",
    desc: "mega online course until neet",
    fee: "677.97",
    cgst: "61.02",
    sgst: "61.02",
    amount: "800",
    instname: "BDS Next",
    address1: "#3588, 3rd Floor, AASHIRWAD",
    address2: "7th Main road, MCC B Block",
    address3: "Davangere 577 004",
    gstin: "29AAXFB1594P1ZC",
    logoimg: "bdsnext.png",
  },
  {
    invno: "6",
    date: "17/11/2021",
    name: "Shivani Vyavahare",
    email: "shivanivyavahare07@gmail.com",
    desc: "BDS next app until inicet",
    fee: "2118.64",
    cgst: "190.68",
    sgst: "190.68",
    amount: "2500",
    instname: "BDS Next",
    address1: "#3588, 3rd Floor, AASHIRWAD",
    address2: "7th Main road, MCC B Block",
    address3: "Davangere 577 004",
    gstin: "29AAXFB1594P1ZC",
    logoimg: "bdsnext.png",
  },
  {
    invno: "7",
    date: "17/11/2021",
    name: "Trutiya chandrakant karve",
    email: "chandrakantkarve68@gmail.com",
    desc: "until INI-CET may 2022",
    fee: "1271.19",
    cgst: "114.41",
    sgst: "114.41",
    amount: "1500",
    instname: "BDS Next",
    address1: "#3588, 3rd Floor, AASHIRWAD",
    address2: "7th Main road, MCC B Block",
    address3: "Davangere 577 004",
    gstin: "29AAXFB1594P1ZC",
    logoimg: "bdsnext.png",
  },
  {
    invno: "8",
    date: "17/11/2021",
    name: "Rajkumari Ranjita Devi",
    email: "ranjita.rk29.rrkd@gmail.com",
    desc: "Continuation of app till NEET",
    fee: "677.97",
    cgst: "61.02",
    sgst: "61.02",
    amount: "800",
    instname: "BDS Next",
    address1: "#3588, 3rd Floor, AASHIRWAD",
    address2: "7th Main road, MCC B Block",
    address3: "Davangere 577 004",
    gstin: "29AAXFB1594P1ZC",
    logoimg: "bdsnext.png",
  },
  {
    invno: "9",
    date: "17/11/2021",
    name: "Aakanksha Bhilare",
    email: "nikitabhilarenb@gmail.com",
    desc: "Until neet March 6th",
    fee: "1271.19",
    cgst: "114.41",
    sgst: "114.41",
    amount: "1500",
    instname: "BDS Next",
    address1: "#3588, 3rd Floor, AASHIRWAD",
    address2: "7th Main road, MCC B Block",
    address3: "Davangere 577 004",
    gstin: "29AAXFB1594P1ZC",
    logoimg: "bdsnext.png",
  },
  {
    invno: "10",
    date: "17/11/2021",
    name: "Akhila",
    email: "akhila.inaara@gmail.com",
    desc: "Extension of app",
    fee: "677.97",
    cgst: "61.02",
    sgst: "61.02",
    amount: "800",
    instname: "BDS Next",
    address1: "#3588, 3rd Floor, AASHIRWAD",
    address2: "7th Main road, MCC B Block",
    address3: "Davangere 577 004",
    gstin: "29AAXFB1594P1ZC",
    logoimg: "bdsnext.png",
  },
];
var img = new Image();
//img.src = "/" + val.logoimg;

console.log("/" + "bdsnext.png");

export default function App() {
  const Generatepdf = () => {
    var doc = new jsPDF("p", "mm", "a4", "false");

    data1.map((val, key) => {
      if (key % 2 == 0) {
        doc.line(20, 28, 190, 28);

        doc.line(20, 85, 190, 85);
        doc.line(20, 93, 190, 93); //3rd horizontal line (y value changes)
        doc.line(95, 115, 190, 115); //new total horizontal line
        doc.line(20, 120, 190, 120); //4th line 107,120 y changed
        doc.line(20, 140, 190, 140); //5th line horizontal 112instaed 140

        doc.line(20, 28, 20, 140); //side vertical lines
        doc.line(190, 28, 190, 140);

        doc.line(37, 85, 37, 120); //1st vertical line changed y2 107 to 120
        doc.line(95, 85, 95, 120); //77 t0 80 after particular line
        doc.line(122, 85, 122, 120); //100 to 115 3rd vertical line
        doc.line(142, 85, 142, 120); //4th vertical line  120 to 125
        doc.line(162, 85, 162, 120); //5th 150 to 160

        doc.setFontSize(10);
        doc.setFont("Lato-Regular", "normal");

        doc.text("Sl No", 25, 90);
        const sno = "1";
        doc.text(sno, 25, 98);
        doc.text("Particulars", 42, 90);
        doc.text("Amount", 100, 90);
        doc.text(val.fee, 102, 100);
        doc.text("CGST 9%", 124, 90);
        doc.text(val.cgst, 126, 100);
        doc.text("SGST 9%", 144, 90);
        doc.text(val.sgst, 146, 100);
        doc.text("Total", 168, 90);
        doc.text(val.amount, 170, 100);
        // doc.text("" + val.instname, 85, 40);
        doc.text(val.address1, 85, 45);
        doc.text(val.address2, 85, 50);
        doc.text(val.address3, 85, 55);
        //var img = new Image();
        img.src = "/" + val.logoimg;

        doc.addImage(img, "png", 24, 32, 28, 35);

        doc.text("GSTN :", 85, 60);
        doc.text(val.gstin, 100, 60);
        doc.text("Name of Student:", 21, 78);
        doc.text(val.name, 50, 78);
        doc.text("Email                 :", 21, 82);
        doc.text("" + val.email, 50, 82);
        doc.text("Invoice No. :", 140, 78);
        const invoice = "1";
        doc.text(val.invno, 162, 78);
        doc.text("Date           :", 140, 82);
        doc.text(val.date, 162, 82);
        doc.text("Coaching Fee Towards NEET ", 38, 98);
        doc.text("Total", 75, 118);
        doc.text(val.fee, 102, 119);
        doc.text(val.cgst, 126, 119);
        doc.text(val.sgst, 146, 119);
        doc.text(val.amount, 170, 119);
        doc.text("For " + val.instname, 100, 135);
      } else {
        //Below is the second table
        doc.line(20, 168, 190, 168);
        doc.line(20, 227, 190, 227);
        doc.line(20, 235, 190, 235);
        doc.line(95, 257, 190, 257);
        doc.line(20, 262, 190, 262);
        doc.line(20, 282, 190, 282);

        doc.line(20, 168, 20, 282);
        doc.line(190, 168, 190, 282);

        doc.line(37, 227, 37, 262);
        doc.line(95, 227, 95, 262);
        doc.line(122, 227, 122, 262);
        doc.line(142, 227, 142, 262);
        doc.line(162, 227, 162, 262);

        doc.setFontSize(10);
        doc.text("Sl No", 25, 232);
        const sno1 = "1";
        doc.text(sno1, 25, 240);
        doc.text("Particulars", 42, 232);
        doc.text("Amount", 100, 232);
        doc.text(val.fee, 102, 242);
        doc.text("CGST 9%", 124, 232);
        doc.text(val.cgst, 126, 242);
        doc.text("SGST 9%", 144, 232);
        doc.text(val.sgst, 146, 242);
        doc.text("Total", 168, 232);
        doc.text(val.amount, 170, 242);
        // doc.text("" + val.instname, 85, 182);
        doc.text(val.address1, 85, 187);
        doc.text(val.address2, 85, 192);
        doc.text(val.address3, 85, 197);

        // var img = new Image();
        // img.src = "/" + val.logoimg;
        doc.addImage(img, "png", 24, 174, 28, 35);

        doc.text("GSTN :", 85, 202);
        doc.text(val.gstin, 100, 202);
        doc.text("Name of Student:", 21, 220);
        doc.text(val.name, 50, 220);
        doc.text("Email                 :", 21, 224);
        doc.text("" + val.email, 50, 224);
        doc.text("Invoice No :", 140, 220);
        const invoice1 = "1";
        doc.text(val.invno, 162, 220);
        doc.text("Date           :", 140, 224);
        const date1 = "05/04/2022";
        doc.text(val.date, 162, 224);
        doc.text("Coaching Fee Towards NEET", 38, 240);
        doc.text("Total", 70, 260);
        doc.text(val.fee, 102, 261);
        doc.text(val.cgst, 126, 261);
        doc.text(val.sgst, 146, 261);
        doc.text(val.amount, 170, 261);
        doc.text("For " + val.instname, 100, 277);

        doc.setFont("Helvertica-Bold", "bold");
        doc.setFontSize(12);
        doc.text("BILL TO", 21, 72);
        //doc.setFont("Helvertica-Bold", "bold");
        doc.text("Tax Invoice", 190 / 2, 32);
        doc.text("Tax Invoice", 190 / 2, 172);
        doc.text("BILL TO", 21, 214);
        doc.text("" + val.instname, 85, 40);
        doc.text("" + val.instname, 85, 182);
        doc.setFontSize(8);
        doc.text("" + "(" + val.desc + ")", 38, 247);
        doc.text("" + "(" + val.desc + ")", 38, 105);

        doc.addPage();
        doc.setFont("Lato-Regular", "normal");
      }
    });

    doc.save("invoice.pdf");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={Generatepdf}>Download pdf</Button>
    </div>
  );
}
