import { Component, OnInit } from '@angular/core';

import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lambda',
  standalone: true,
  imports: [],
  templateUrl: './lambda.component.html',
  styleUrl: './lambda.component.scss',
})
export class LambdaComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;
    const nav = params['nav'];
    const lang = params['lang'];
    if (lang == 'node') {
      this.nodefunc();
    } else {
      this.pythonfunc();
    }
    console.log(nav, lang);

    this.fast_api_code = {};
  }
  python = true;
  node = false;
  net = false;
  java = false;
  lambda = false;
  fast_api_code: any;
  at: String = '@';

  pythonfunc() {
    this.router.navigate(['/blogs/lambda'], {
      queryParams: { nav: 'serverless', lang: 'python' },
    });
    this.python = true;
    this.node = false;
    this.net = false;
    this.java = false;
  }
  nodefunc() {
    this.router.navigate(['/blogs/lambda'], {
      queryParams: { nav: 'serverless', lang: 'node' },
    });
    this.python = false;
    this.node = true;
    this.net = false;
    this.java = false;
  }
  netfunc() {
    this.python = false;
    this.node = false;
    this.net = true;
    this.java = false;
  }
  javafunc() {
    this.python = false;
    this.node = false;
    this.net = false;
    this.java = true;
  }

  toggle_summary() {
    this.lambda = !this.lambda;
  }
}
