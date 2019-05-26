import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit {

  @Input()activePage;
  @Input()pagesCount;

  blockTitle = 'Landing pages';
  sortOption = [
    'Newest landing pages first',
    'Newest landing pages last',
    'Somethings else pages first',
  ];
  activeTab = 'basic';

  swiperIndex = 2;

  config = {
    slidesPerView: 'auto',
    // loop: true,
    freeMode: true,
    // grabCursor: true,
    watchOverflow: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      // hide: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // breakpointsInverse: true,
    breakpoints: {
      1320: {

      }
    }
  };

  availablePages = [
    {
      pageID: 12312,
      pagePreview: 'assets/images/placeholder_landing.jpg',
      title: 'Page Name'
    },{
      pageID: 12312,
      pagePreview: 'assets/images/placeholder_landing.jpg',
      title: 'Page Name 1'
    },{
      pageID: 12312,
      pagePreview: 'assets/images/placeholder_landing.jpg',
      title: 'Page Name 2'
    },{
      pageID: 12312,
      pagePreview: 'assets/images/placeholder_landing.jpg',
      title: 'Page Name 3'
    },{
      pageID: 12312,
      pagePreview: 'assets/images/placeholder_landing.jpg',
      title: 'Page Name 4'
    },
    {
      pageID: 12312,
      pagePreview: 'assets/images/placeholder_landing.jpg',
      title: 'Page Name'
    },{
      pageID: 12312,
      pagePreview: 'assets/images/placeholder_landing.jpg',
      title: 'Page Name 1'
    },{
      pageID: 12312,
      pagePreview: 'assets/images/placeholder_landing.jpg',
      title: 'Page Name 2'
    },{
      pageID: 12312,
      pagePreview: 'assets/images/placeholder_landing.jpg',
      title: 'Page Name 3'
    },{
      pageID: 12312,
      pagePreview: 'assets/images/placeholder_landing.jpg',
      title: 'Page Name 4'
    }
  ];

  constructor(
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    console.log('123', this.availablePages)
  }

  toggleTab(name):void {
    this.activeTab = name;
  }

  copyToClipboard(text):void {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.toastr.success('URL copied to clipboard!');
  }
}
