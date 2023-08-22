import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  email = new FormControl('')
  name = new FormControl('')

  onSubmit() {
    console.log(this.email, this.name);
  }
}
