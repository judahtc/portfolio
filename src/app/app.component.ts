import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  my_email: String = '';
  portfollio = false;
  ngOnInit(): void {
    this.my_email = 'jaycea247@gmail.com';
    console.log('juloh');
  }
  title = 'judah-portfolio';
}
