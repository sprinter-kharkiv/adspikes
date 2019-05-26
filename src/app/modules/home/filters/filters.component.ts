import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styleUrls: ['filters.component.scss']
})
export class FiltersComponent implements OnInit {

  form: FormGroup;

  public searchModes = [
    {
      id: 11,
      name: 'Mode 1'
    },
    {
      id: 12,
      name: 'mode 2'
    },
    {
      id: 13,
      name: 'mode 3'
    }
  ];
  public sortBy = [
    {
      id: 11,
      name: 'Likes'
    },
    {
      id: 12,
      name: 'Shared'
    },
    {
      id: 13,
      name: 'Comments'
    }
  ];

  public countries = [
    {
      id: 11,
      name: 'Unated States'
    },
    {
      id: 12,
      name: 'Canada'
    },
    {
      id: 13,
      name: 'Unated Kingdom'
    },
    {
      id: 14,
      name: 'Australia'
    }
  ];
  public adTypes = [
    {
      id: 11,
      name: 'adType-1'
    },
    {
      id: 12,
      name: 'adType-2'
    },
    {
      id: 13,
      name: 'adType-3'
    }
  ];
  public adPositions = [
    {
      id: 11,
      name: 'adPosition-1'
    },
    {
      id: 12,
      name: 'adPosition-2'
    },
    {
      id: 13,
      name: 'adPosition-3'
    }
  ];
  public gender = [
  { id: 1, name: 'Male' },
  { id: 2, name: 'Female' }
];



  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      seenBetween: [null],
      searchMode: [null],
      sortBy: [null],
      countries: [null],
      adType: [null],
      adPosition: [null],
      gender: [null],
    });
  }

}
