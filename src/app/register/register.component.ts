import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  employeeName: string = "";
  email: string="";
  password: string="";

  
  constructor(private http: HttpClient){

  }

  save()
  {

    let bodyData = {
      "employeeName" : this.employeeName,
      "email" : this.email,
      "password" : this.password
    };

    this.http.post("http://localhost:8080/api/v1/employee/save", bodyData, {responseType: 'text'}).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Employee Registered Successfully!");
    });
  }
  








}
