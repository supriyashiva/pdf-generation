import React, { useState } from "react";
import { Button } from "reactstrap";
import { jsPDF, rect } from "jspdf";

export default function App2() {
  const [text, setText] = useState("PURCHASE REQUISITION");
  const [prno, setPRno] = useState("SGI/PR/CON/21-22/055AMD");
  const [storedept, setStoredept] = useState("STORES DEPT");
  const [date, setDate] = useState("23.09.2021");
  const [purchasedept, setPurchaseDept] = useState("PURCHASE DEPT.");

  const data = [
    {
      item: "Air Terminal Al 1.15 m long Dia 8mm for roof. 1mtr vertical with one side taper and 150mm after bend in 90 degrees",
      cstk: 10,
      rstk: 100,
      spec: "some specs",
    },
    {
      item: "Conventional Lightning Arrestor/Spike of 1.15 m with C-clamp and 2 nos. clips",
      cstk: 20,
      rstk: 200,
      spec: "some specs",
    },
    {
      item: "Gl flat (25×6mm) Strip. Having width - 25mm, thickness - 6mm, Material Hot dipped Glavanized Iron",
      cstk: 30,
      rstk: 300,
      spec: "some specs",
    },
    {
      item: "UNI Disconnecting Clamps with intermediate plate for round and flat conductor with clamping range - Rd / Fl 8-10 / 30  mm",
      cstk: 40,
      rstk: 400,
      spec: "some specs",
    },
    {
      item: "Roof conductor of Diameter 0-8mm, Cross Section 50mm2, of material AlMgSi",
      cstk: 50,
      rstk: 500,
      spec: "some specs",
    },
  ];

  const Generatepdf = () => {
    var doc = new jsPDF("p", "mm", "a4", "false");
    doc.rect(10, 15, 190, 220); //full outer box
    doc.line(30, 22, 168, 22); //1st horizontal line
    doc.line(10, 45, 200, 45); //55-45
    doc.line(10, 52, 200, 52); //65-52
    doc.line(10, 75, 200, 75); //90-75
    doc.line(10, 90, 200, 90); //SR NO.line 100-80
    doc.line(10, 100, 170, 100);
    doc.line(10, 110, 170, 110); //120-110
    doc.line(10, 120, 170, 120);
    doc.line(10, 130, 170, 130);
    doc.line(10, 140, 170, 140);
    doc.line(10, 150, 170, 150);
    doc.line(10, 160, 170, 160);
    doc.line(10, 170, 170, 170);
    doc.line(10, 180, 170, 180);
    doc.line(10, 190, 170, 190);
    doc.line(10, 200, 170, 200);
    doc.line(10, 210, 200, 210);

    doc.line(30, 15, 30, 45); //vertical line
    doc.line(168, 15, 168, 45);
    doc.line(25, 75, 25, 210);
    doc.line(80, 75, 80, 210);
    doc.line(100, 75, 100, 210);
    doc.line(122, 75, 122, 210);
    doc.line(170, 75, 170, 210);

    doc.setFontSize(10);
    doc.setFont("Times-Roman", "normal");

    //doc.text("SGI ENGINEERS PRIVATE LTD.", 70, 20);
    const addr =
      "Ground Floor,Indl.Gala No.2,Nidhi Commercial&industrial Hub,Tungar Phata";
    doc.text(addr, 40, 26);
    const addr1 = "Sativali,Vasai(E),Palghar-401 208,Maharashtra,INDIA";
    doc.text(addr1, 45, 31);
    const aadr2 = "ph:9168492922/9607472722/9168482822";
    doc.text(aadr2, 47, 37);
    const addr3 = "Email:stores@sgihouse.in";
    doc.text(addr3, 36, 43);
    const addr4 = "Web:www.sgihouse.in";
    doc.text(addr4, 120, 43);
    doc.text("SGI FR 47", 172, 26);
    doc.text("REV.01", 172, 30);
    doc.text("01.04.2019", 172, 34);
    //doc.text("PURCHASE REQUISITION", 70, 50);
    doc.text("PR NO : ", 12, 62);
    doc.text(prno, 25, 62);
    doc.text("FROM  : ", 12, 70);
    doc.text(storedept, 25, 70);
    doc.text("DATE : ", 150, 62);
    doc.text(date, 163, 62);
    doc.text("  TO : ", 150, 70);
    doc.text(purchasedept, 163, 70);
    // doc.text("SR NO.", 12, 85);
    // doc.text("MATERIAL DESCRIPTION", 32, 85);
    // doc.text("CURRENT", 82, 84);
    // doc.text("STOCK", 82, 89);
    // doc.text("REQUIRED", 102, 84);
    // doc.text("STOCK", 102, 89);
    // doc.text("SPECIFICATIONS,IF ANY", 122, 85);
    // doc.text(".REMARKS", 172, 85);
    // doc.text("Prepared By", 12, 230);
    // doc.text("Checked By", 75, 230);
    // doc.text("Authorized By", 130, 230);
    // doc.text("Received By", 170, 230);
    doc.text("1", 14, 95);
    doc.text("2", 14, 105);
    doc.text("3", 14, 115);
    doc.text("4", 14, 125);
    doc.text("5", 14, 135);
    doc.text("6", 14, 145);
    doc.text("7", 14, 155);
    doc.text("8", 14, 165);
    doc.text("9", 14, 175);
    doc.text("10", 14, 185);
    doc.text("11", 14, 195);
    doc.text("12", 14, 205);
    doc.text("Hi", 45, 95);
    doc.text("NIL", 85, 95);
    doc.text("NIL", 85, 105);
    doc.text("NIL", 85, 115);
    doc.text("NIL", 85, 125);
    doc.text("NIL", 85, 135);
    doc.text("NIL", 85, 145);
    doc.text("NIL", 85, 155);
    doc.text("NIL", 85, 165);
    doc.text("NIL", 85, 175);
    doc.text("NIL", 85, 185);
    doc.text("NIL", 85, 195);
    doc.text("NIL", 85, 205);
    doc.text("60 No.s", 104, 95);
    doc.text("18 No.s", 104, 105);
    doc.text("2 No.s", 104, 115);
    doc.text("20 No.s", 104, 125);
    doc.text("40 No.s", 104, 135);
    doc.text("725 No.s", 104, 145);
    doc.text("290 No.s", 104, 155);
    doc.text("60 No.s", 104, 165);
    doc.text("40 No.s", 104, 175);
    doc.text("535 No.s", 104, 185);
    doc.text("250 No.s", 104, 195);
    doc.text("20 No.s", 104, 205);
    // doc.text("Cleanmax Enviro", 172, 150);
    // doc.text("a/c jagluru Solar", 172, 154);
    // doc.text("Farm-PI-", 172, 158);
    // doc.text("328/25.02.2022", 172, 162);

    doc.setFont("Helvertica-Bold", "bold");
    doc.text("SGI PVT LTD", 70, 20);
    doc.text(text, 70, 50);
    doc.text("SR NO.", 12, 85);
    doc.text("MATERIAL DESCRIPTION", 32, 85);
    doc.text("CURRENT", 82, 84);
    doc.text("STOCK", 82, 89);
    doc.text("REQUIRED", 102, 84);
    doc.text("STOCK", 102, 89);
    doc.text("SPECIFICATIONS,IF ANY", 124, 85);
    doc.text(".REMARKS", 172, 85);
    doc.text("Prepared By", 12, 230);
    doc.text("Checked By", 75, 230);
    doc.text("Authorized By", 130, 230);
    doc.text("Received By", 170, 230);
    doc.text("Cleanmax Enviro", 172, 150);
    doc.text("a/c jagluru Solar", 172, 154);
    doc.text("Farm-PI-", 172, 158);
    doc.text("328/25.02.2022", 172, 162);

    doc.save("invoice.pdf");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={Generatepdf}>Download pdf</Button>
    </div>
  );
}
