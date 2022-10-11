import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formContact: FormGroup;


  //constructor con la inicializacion y reglas del form
  constructor(private formbuilder: FormBuilder) {
    this.formContact = this.formbuilder.group({
      nameContact: ['',[Validators.required]],
      emailContact: ['',[Validators.required]],
      phoneContact: ['',[Validators.required]],
      msg: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  //funcion para enviar el email con los datos del form
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_x12vedb', 'template_y18x72l', e.target as HTMLFormElement, 'Bm83ZccfYmwWIb9M2')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, () => {
        console.log('Error al enviar');
      });
  }
}
