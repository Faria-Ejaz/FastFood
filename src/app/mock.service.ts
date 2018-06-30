import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MockService {

  result: any;
  constructor(private http: HttpClient) {}

  addMock(name, price, description, image, currency, link) {
    const uri = 'http://localhost:4000/mocks/add';
    const obj = {
      name: name,
      price: price,
      description : description,
      image : image ,
      currency : currency ,
      link : link 
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getMocks() {
    const uri = 'http://localhost:4000/mocks';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editMock(id) {
    const uri = 'http://localhost:4000/mocks/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
  viewDescription(id) {
    return this
              .http
              .get(`${this.uri}/view/${id}`);
  }
  updateMock(name, price, description, image, currency, link, id) {
    const uri = 'http://localhost:4000/mocks/update/' + id;

    const obj = {
      name: name,
      price: price,
      description : description,
      image : image ,
      currency : currency ,
      link : link 
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteMock(id) {
    const uri = 'http://localhost:4000/mocks/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
