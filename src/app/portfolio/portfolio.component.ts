import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  my_email: String = '';

  ngOnInit(): void {
    this.my_email = 'jaycea247@gmail.com';
    console.log('I am being rendered');
  }
}
