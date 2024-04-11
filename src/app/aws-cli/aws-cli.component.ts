import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aws-cli',
  standalone: true,
  imports: [],
  templateUrl: './aws-cli.component.html',
  styleUrl: './aws-cli.component.scss',
})
export class AwsCliComponent implements OnInit {
  awscli = true;
  ngOnInit(): void {
    this.awscli = true;
  }

  toggle_summary() {
    this.awscli = !this.awscli;
  }
}
