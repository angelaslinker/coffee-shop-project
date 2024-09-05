import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent implements OnInit {
  ngOnInit(): void {
    const myButton = document.getElementById('myButton');

    if (myButton) {
      myButton.addEventListener('mouseover', () => {
        myButton.textContent = 'Button hovered!';
      });

      myButton.addEventListener('mouseout', () => {
        myButton.textContent = 'Hover over me';
      });
    };
  }

}