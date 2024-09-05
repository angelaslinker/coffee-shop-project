import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showNavPopup: boolean = false;
  httpClient = inject(HttpClient);
  data = [];
  ngOnInit(): void {
    this.fetchData();
  }

  constructor() { }

  toggleNavPopup(): void {
    console.log('button works');
    this.showNavPopup = !this.showNavPopup;
  }


  fetchData() {
    this.httpClient.get('https://fake-coffee-api.vercel.app/api').subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
}