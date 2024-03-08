import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Route, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss',
})
export class PortalComponent implements OnInit {
  home = false;
  blogs = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      let page = params['page'];
      if (page == 'home') {
        this.home = true;
        this.blogs = false;
      } else {
        this.blogs = true;
        this.home = false;
      }
    });
  }

  home_func() {
    this.home = true;
    this.blogs = false;
  }

  blogs_func() {
    this.home = false;
    this.blogs = true;

    console.log(this.blogs);
  }
}
