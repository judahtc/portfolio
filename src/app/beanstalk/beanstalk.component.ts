import { Component } from '@angular/core';

@Component({
  selector: 'app-beanstalk',
  standalone: true,
  imports: [],
  templateUrl: './beanstalk.component.html',
  styleUrl: './beanstalk.component.scss',
})
export class BeanstalkComponent {
  python = true;
  node = false;
  net = false;
  java = false;

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
}
