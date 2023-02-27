import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    const data = new HttpParams() //urlencoded
    .set('name', 'John')
    .set('age', 30);

    console.log(data);
    this.http.post('http://localhost:3000/api', data.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).subscribe(response => {
      console.log(response);
    });
  }
}