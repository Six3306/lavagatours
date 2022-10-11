import { Component, OnInit } from '@angular/core';
import { InfoserviceComponent } from '../dialogs/infoservice/infoservice.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  dataR: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  //funcion para ver los detalles de cada servicio, manda datos y despliega el dialog de infoService
  viewDetailsService(nService:number){
    if (nService == 1) {
      this.dataR = {
        "titleService": "Paquetes",
        "subtitlesService": ["Todo incluido", "Hospedaje", "Bloqueos"],
      }
    } else if (nService == 2) {
      this.dataR = {
        "titleService": "Transportes",
        "subtitlesService": ["Vans", "Autobuses", "Charters"],
      }
    } else if (nService == 3) {
      this.dataR = {
        "titleService": "Tours",
        "subtitlesService": ["Ciudades especificas", "Pueblos (Puebleando)", "Turismos especificos"],
      }
    } else if (nService == 4) {
      this.dataR = {
        "titleService": "Aviones",
        "subtitlesService": ["Cambios de dueño o itinerarios", "Venta de boletos"],
      }
    } else if (nService == 5) {
      this.dataR = {
        "titleService": "Turismo mundial",
        "subtitlesService": ["Planes europeos"],
      }
    }
    const dialogRef = this.dialog.open(InfoserviceComponent, {

      data: this.dataR
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
