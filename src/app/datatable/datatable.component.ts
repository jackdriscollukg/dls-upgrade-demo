import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  data = [
    {
      selected: false,
      data: {
        avatar: 'https://i.imgur.com/a8MtmkV.jpg',
        name: 'John Russel',
        phone: '(754) xxx-xxx',
        age: '25',
        gender: 'M',
        birthday: '11/11/1990',
      },
    },
    {
      selected: false,
      data: {
        avatar: 'https://i.imgur.com/a8MtmkV.jpg',
        name: 'John Wick',
        phone: '(305) xxx-xxx',
        age: '30',
        gender: 'M',
        birthday: '29/01/1998',
      },
    },
    {
      selected: false,
      data: {
        avatar: 'https://i.imgur.com/a8MtmkV.jpg',
        name: 'John Abc',
        phone: '(954) xxx-xxx',
        age: '29',
        gender: 'M',
        birthday: '14/06/1994',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
