import { MockService } from './../../mock.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Mock } from '../../Mock';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  mocks: any;

  constructor(private http: HttpClient, private service: MockService) {}

  ngOnInit() {
    this.getMocks();
  }

  getMocks() {
    this.service.getMocks().subscribe(res => {
      this.mocks = res;
    });
  }

  deleteMock(id) {
    this.service.deleteMock(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
