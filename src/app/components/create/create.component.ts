import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MockService } from '../../mock.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Create Record';
  angForm: FormGroup;
  constructor(private mockservice: MockService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ],
      description: ['', Validators.required ],
      image: ['', Validators.required ],
      currency: ['', Validators.required ],
      link: ['', Validators.required ]
      
   });
  }
  addMock(name, price, description, image, currency, link) {
      this.mockservice.addMock(name, price, description, image, currency, link);
      this.router.navigate(['index']);
  }
  ngOnInit() {
  }
}
