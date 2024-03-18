import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-on-s3',
  standalone: true,
  imports: [],
  templateUrl: './angular-on-s3.component.html',
  styleUrl: './angular-on-s3.component.scss',
})
export class AngularOnS3Component {
  policy: any;
  my_email: any;
  policyString: any;
  ngOnInit(): void {
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

    this.policyString = JSON.stringify(this.policy, null, 2);
  }
}
