import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockService } from './../../mock.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  mock: any;
  angForm: FormGroup;
  title = 'Edit Record';
  constructor(private route: ActivatedRoute, private router: Router, private service: MockService, 
    private fb: FormBuilder) {
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

  updateMock(name, price, description, image, currency, link) {
    this.route.params.subscribe(params => {
    this.service.updateMock(name, price, description, image, currency, link, params['id']);
    this.router.navigate(['index']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mock = this.service.editMock(params['id']).subscribe(res => {
        this.mock = res;
      });
    });
  }
}
