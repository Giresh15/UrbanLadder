import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrbanServiceService } from 'src/app/services/urban-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchName:string;

  constructor(public urban:UrbanServiceService, private router : Router, 
    public activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

 search()
  {  
   //console.log(this.searchName)
    this.router.navigateByUrl(`/search/pname/${this.searchName}`);
  }
  

}
