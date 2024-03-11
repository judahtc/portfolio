import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aws-free-tier',
  standalone: true,
  imports: [],
  templateUrl: './aws-free-tier.component.html',
  styleUrl: './aws-free-tier.component.scss',
})
export class AwsFreeTierComponent implements OnInit {
  my_email: any;
  ngOnInit(): void {
    this.my_email = 'jayeca247@gmail.com';
  }
}
