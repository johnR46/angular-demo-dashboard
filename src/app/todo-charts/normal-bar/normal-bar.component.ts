import { Component, OnInit } from '@angular/core';
import { single } from './data';
@Component({
  selector: 'app-normal-bar',
  templateUrl: './normal-bar.component.html',
  styleUrls: ['./normal-bar.component.css']
})
export class NormalBarComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true; // show label in X
  showYAxis = true; // show label in X
  gradient = true; // ไล่ระดับสี
  legendTitle = 'Summary'; // ชื่อป้ายที่อยู่ข้างๆ
  showLegend = true; // show ป้ายข้างๆ
  legendPosition = 'below'; // ตำแหน่งของป้าย มี  'right' 'below'
  xAxisLabel = 'Country'; // ป้ายแกน x
  yAxisLabel = 'Population'; // ป้ายแกน y
  showXAxisLabel = true; // โชว์ ป้ายที่แกน  x ใต้ chart
  showYAxisLabel = true; // โชว์  ป้ายที่แกน  y ใต้ chart
  schemeType = 'ordinal'; // ระดับการไล่สี
  showGridLines = true; // แสดงเส้นgrid
  animations = true;

  roundDomains = true; // ไม่ effect

  trimXAxisTicks = false; // สามารถย่อข้อความที่แกน x ได้ไหม ( ย่อ name ใต้ bar )
  maxXAxisTickLength = 16; // ย่อให้เหลือกี่ตัว

  trimYAxisTicks = true; //// สามารถย่อข้อความที่แกน y  ได้ไหม ( ย่อ name ใต้ bar )
  maxYAxisTickLength = 16; // ย่อให้เหลือกี่ตัว

  rotateXAxisTicks = false; // ไม่ effect

  // xAxisTicks: any = [0, 200];
  yAxisTicks: any = [0]; // mock data Y
  showDataLabel = true; // โชว์ค่าสูงสุดที่อยู่บนป้าย
  // noBarWhenZero  ซ่อนถ้าค่าเป็น 0
  //
  dataLabelMaxHeight = 'HH';
    // labelText: 'A'

  activeEntries: any = [
    //  เน้น Data set นี้
    {
      name: 'France',
      value: 7200000
    }
  ];

  barPadding = 9; // ระยะห่างระหว่าง bar
  tooltipDisabled = false; // ซ่อนแถบเครื่องมือมั้ย ?

  yScaleMax = 500; // กำหนดค่าสูงสุดบนแกน y  ( ไม่มีผลถ้าน้อยกว่าหรือเท่ากับ  max ของข้อมูลแกน y นั้น )
  yScaleMin = 50; // จุดตำสุดของแกน y ถ้าน้อยกว่า y ที่ตำที่สุด จะละเว้น (ไม่ show )
  roundEdges = true; // ทำให้ขอบ bar โค้งมน
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
  }
  ngOnInit(): void {}

  onSelect(event) {
    console.log(event);
  }
}
