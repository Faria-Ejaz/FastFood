import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { mockUnit } from '../index/mockUnit';
import {MockService } from '../../mock.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {


  mock: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private mockservice: MockService,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mockservice.editMock(params['id']).subscribe(res => {
        this.mock = res;
    });
  });
}
}
