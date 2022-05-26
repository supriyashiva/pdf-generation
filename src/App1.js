import React from "react";
import { Component } from "react";
import { Button } from "reactstrap";
import jsPDF from "jspdf";

//i just saw whether map() works or not ...
const arr1 = [
  {
    instname: "SGI ENGINEERS PVT.LTD",
  },
];

export default function App1() {
  const Generatepdf = () => {
    //console.log("button clicked");

    var doc = new jsPDF("p", "mm", "a4", "false");
    arr1.map((val, key) => {
      doc.line(20, 30, 280, 30); //1st horizontal line
      doc.line(42, 38, 240, 38);
      doc.line(20, 65, 280, 65);
      doc.line(20, 73, 280, 73);
      doc.line(20, 100, 280, 100); //......5th line
      doc.line(20, 114, 280, 114);
      doc.line(20, 122, 240, 122); //7th line changed 280 to 240
      doc.line(20, 136, 240, 136);
      doc.line(20, 150, 240, 150);
      doc.line(20, 164, 240, 164);
      doc.line(20, 172, 280, 172);
      doc.line(20, 186, 280, 186); //12 th line
      doc.line(20, 206, 280, 206);

      doc.line(20, 30, 20, 206);
      doc.line(280, 30, 280, 206);

      doc.line(42, 30, 42, 65); //1st vertical line
      doc.line(240, 30, 240, 65);
      doc.line(42, 100, 42, 186);
      doc.line(110, 100, 110, 186);
      doc.line(140, 100, 140, 186);
      doc.line(170, 100, 170, 186);
      doc.line(240, 100, 240, 186);

      doc.setFontSize(11);
      doc.text("" + val.instname, 110, 36);
      //doc.text("ground floor indi gala .......", 43, 42);
      const addr =
        "Ground Floor,Indl.Gala No.2,Nidhi Commercial&industrial Hub,Tungar Phata";
      doc.text(addr, 70, 42);
      const addr1 = "Sativali,Vasai(E),Palghar-401 208,Maharashtra,INDIA";
      doc.text(addr1, 78, 48);
      const aadr2 = "ph:9168492922/9607472722/9168482822";
      doc.text(aadr2, 88, 54);
      const addr3 = "Email:stores@sgihouse.in";
      doc.text(addr3, 76, 62);
      const addr4 = "Web:www.sgihouse.in";
      doc.text(addr4, 150, 62);
      doc.text("SGI FR 47", 250, 42);
      doc.text("REV.01", 250, 48);
      doc.text("01.04.2019", 250, 54);
      doc.text("PURCHASE REQUISITION", 110, 70);
      doc.text("PR NO : SGI/PR/CON/21-22/055AMD", 23, 83);
      doc.text("FROM  : STORES DEPT.", 23, 88);
      doc.text("DATE : 23.09.2021", 230, 83);
      doc.text("  TO : PURCHASE DEPT.", 230, 88);
      doc.text("SR NO.", 22, 110);
      doc.text("MATERIAL DESCRIPTION", 46, 110);
      doc.text("CURRENT", 114, 108);
      doc.text("STOCK", 117, 112);
      doc.text("REQUIRED", 145, 108);
      doc.text("STOCK", 148, 112);
      doc.text("SPECIFICATIONS,IF ANY", 182, 108);
      doc.text(".REMARKS", 250, 108);
      doc.text("Convantional LA 17.2mm dia 2mtr rod", 43, 120);
      doc.text("Multipoint and base suitable for ", 43, 130);
      doc.text(" 17.2mm dia rod", 50, 135);
      doc.text("U-clamps suitable for 65mm dia", 43, 142);
      doc.text(" pipe with nuts and washers", 44, 147);
      doc.text("L-shape structure(as per attached", 44, 154);
      doc.text("drawing)", 55, 158);
      doc.text("Gi Strip 25 x 3", 55, 170);
      doc.text("17mmx3 mtr long rod with vertical", 44, 178);
      doc.text("clamp", 55, 182);
      doc.text("NIL", 119, 120);
      doc.text("NIL", 119, 130);
      doc.text("NIL", 119, 145);
      doc.text("NIL", 119, 160);
      doc.text("NIL", 119, 170);
      doc.text("NIL", 119, 178);
      doc.text("8 NOs.", 148, 120);
      doc.text("8 NOs.", 148, 130);
      doc.text("16 NOs.", 148, 145);
      doc.text("8 NOs.", 148, 160);
      doc.text("120 mtr", 148, 170);
      doc.text("50 NOs.", 148, 178);
      doc.text("Mahindra Susten:", 245, 145);
      doc.text("Watch Tower LA-", 245, 150);
      doc.text("SECI PROJECT", 245, 155);
      doc.text("Prepared By", 22, 200);
      doc.text("Checked By", 119, 200);
      doc.text("Authorized By", 182, 200);
      doc.text("Received By", 250, 200);

      doc.text("1", 25, 119);
      doc.text("2", 25, 130);
      doc.text("3", 25, 144);
      doc.text("4", 25, 158);
      doc.text("5", 25, 170);
      doc.text("6", 25, 180);

      doc.save("invoice.pdf");
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={Generatepdf}>Download pdf</Button>
    </div>
  );
}
