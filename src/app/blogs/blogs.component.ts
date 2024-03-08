import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  policy: any;
  my_email: any;
  angularS3 = false;
  freetrial = false;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // Access query parameters here
      let nav = params['nav'];

      if (nav == 'NgS3') {
        this.AngularS3func();
      } else if (nav == 'freetier') {
        this.freetrialfunc();
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

  AngularS3func() {
    this.angularS3 = true;
    this.freetrial = false;
  }
  freetrialfunc() {
    this.angularS3 = false;
    this.freetrial = true;
  }
}
