import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-infoservice',
  templateUrl: './infoservice.component.html',
  styleUrls: ['./infoservice.component.scss']
})
export class InfoserviceComponent implements OnInit {

  titleService: any;
  subtitlesService: any;

  //constructor con la recepcion de datos y asignacion a variables locales
  constructor(public dialogRef: MatDialogRef<InfoserviceComponent>, @Inject(MAT_DIALOG_DATA) public dataR: any) { }

  ngOnInit(): void {
    if (this.dataR == null) {
    } else {
      this.titleService = this.dataR.titleService;
      this.subtitlesService = this.dataR.subtitlesService;
    }
  }

}
