import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet, Route, Router, ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  sidebar = false;
  beanstalk = false;
  constructor(private router: Router, private route: ActivatedRoute) {}
  policy: any;
  my_email: any;
  angularS3 = false;
  freetrial = false;
  ngOnInit(): void {
    this.checkScreenSize();
    this.route.queryParams.subscribe((params) => {
      // Access query parameters here
      let nav = params['nav'];

      if (nav == 'NgS3') {
        this.AngularS3func();
      } else if (nav == 'freetier') {
        this.freetrialfunc();
      } else if (nav == 'eb') {
        this.beanstalkfunc();
      } else {
        this.freetrialfunc();
      }
    });

    this.my_email = 'jaycea247@gmail.com';
    this.policy = {
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'PublicReadGetObject',
          Effect: 'Allow',
          Principal: '*',
          Action: 's3:GetObject',
          Resource: 'arn:aws:s3:::YOUR-BUCKET-NAME/*',
        },
      ],
    };
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth <= 1200) {
      this.sidebar = false;
    } else {
      this.sidebar = true;
    }
  }

  toggle_out() {
    this.sidebar = true;
  }
  toggle_in() {
    this.sidebar = false;
  }

  AngularS3func() {
    this.angularS3 = true;
    this.beanstalk = false;
    this.freetrial = false;
  }
  freetrialfunc() {
    this.angularS3 = false;
    this.beanstalk = false;
    this.freetrial = true;
  }

  beanstalkfunc() {
    this.beanstalk = true;
    this.angularS3 = false;
    this.freetrial = false;
  }
}
