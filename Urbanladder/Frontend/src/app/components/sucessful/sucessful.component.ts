import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucessful',
  templateUrl: './sucessful.component.html',
  styleUrls: ['./sucessful.component.css']
})
export class SucessfulComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goback(){
    this.router.navigateByUrl("/");
  }
}
