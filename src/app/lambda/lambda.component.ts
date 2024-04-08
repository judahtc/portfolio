import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lambda',
  standalone: true,
  imports: [],
  templateUrl: './lambda.component.html',
  styleUrl: './lambda.component.scss',
})
export class LambdaComponent implements OnInit {
  ngOnInit(): void {}
  python = true;
  node = false;
  net = false;
  java = false;
  lambda = true;

  pythonfunc() {
    this.python = true;
    this.node = false;
    this.net = false;
    this.java = false;
  }
  nodefunc() {
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
