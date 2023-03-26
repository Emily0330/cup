import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {ApiService} from './api.service';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class BarcodeComponent {

  constructor(private http: HttpClient) {}

  sendData() {

    /*const data = new HttpParams() //urlencoded
    .set('to', '0xbe804512d5128516cD95b0c6610a7881cfDdD062')
    .set('amount', 1);*/
    const data = {to:'0xbe804512d5128516cD95b0c6610a7881cfDdD062',amount:1};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(data);
    this.http.post('http://localhost:3000/api', data, httpOptions).subscribe(response => {
      console.log(response);
    });
  }
}