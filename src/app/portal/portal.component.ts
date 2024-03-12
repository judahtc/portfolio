import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss',
})
export class PortalComponent implements OnInit {
  home = false;
  blogs = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.checkScreenSize();
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
  sidebar = true;
  home_func() {
    this.home = true;
    this.blogs = false;
  }

  blogs_func() {
    this.home = false;
    this.blogs = true;

    console.log(this.blogs);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }
  // The following code checks screen size for responsiveness purposes
  checkScreenSize() {
    if (window.innerWidth <= 1200) {
      this.sidebar = false;
    } else {
      this.sidebar = true;
    }
  }
  toggle_sidebar() {
    if (this.sidebar === true) {
      this.sidebar = false;
    } else {
      this.sidebar = true;
    }
  }
}
