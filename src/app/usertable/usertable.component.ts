import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent {

  data:user[]=[]
  constructor(private http:HttpClient){

    var url='https://reqres.in/api/users';
    console.log("Target url"+url);
    this.http.get<DataPaginated>(url).subscribe(result=> {
      console.log(result);
      this.data=result.data;
    }, (error=>{
      console.log(error);
    }));
  }
}


export interface DataPaginated {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: user[]
  support: Support
}

export interface user {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface Support {
  url: string
  text: string
}
