import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InfoserviceComponent } from './components/dialogs/infoservice/infoservice.component';

//imports de angular material, principalmente para formularios
const angularMaterial = [MatButtonModule, MatInputModule,MatDialogModule];

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactComponent,
    InfoserviceComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    angularMaterial,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  //para la ventana desplegable
  entryComponents: [InfoserviceComponent]
})
export class AppModule { }
