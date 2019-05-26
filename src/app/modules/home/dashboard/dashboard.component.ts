import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pageTitle = 'Ad Details';
  items = [
    {
      itemLogo: 'assets/images/opteo-logo.jpg',
      title: 'Opteo - Adding a long name here that goes on 2 rows. Add more text here.',
      text: '“I can&apos;t live without it anymore. It saves time and money and ensures better overall performance! I can&apos;t live without it anymore. It saves time and money It saves time and money ',
      promoImg: 'assets/images/promo-img.jpg',
      imgDescription: '',
      promoLink: 'OPTEO.COM',
      promoText: 'Opteo, the smarter way to manage AdWords accounts.',
      media: {
        likes: 6428932,
        shared: 128422,
        comments: 32221
      }
    },{
    itemLogo: 'assets/images/opteo-logo.jpg',
    title: '2Opteo - Adding a long name here that goes on 2 rows. Add more text here.',
      text: '“I can&apos;t live without it anymore. It saves time and money and ensures better overall performance! I can&apos;t live without it anymore. It saves time and money',
      promoImg: 'assets/images/promo-img.jpg',
      imgDescription: '',
      promoLink: 'OPTEO.COM',
      promoText: 'Opteo, the smarter way to manage AdWords accounts.',
      media: {
        likes: 6428932,
        shared: 128422,
        comments: 32221
      }
    },{
    itemLogo: 'assets/images/opteo-logo.jpg',
    title: '3Opteo - Adding a long name here that goes on 2 rows. Add more text here.',
      text: '“I can&apos;t live without it anymore. It saves time and money and ensures better overall performance! I can&apos;t live without it anymore. It saves time and money It saves time and money ',
      promoImg: 'assets/images/promo-img.jpg',
      imgDescription: '',
      promoLink: 'OPTEO.COM',
      promoText: 'Opteo, the smarter way to manage AdWords accounts.',
      media: {
        likes: 6428932,
        shared: 128422,
        comments: 32221
      }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
