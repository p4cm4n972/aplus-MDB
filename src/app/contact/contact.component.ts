import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  optionsSelect: Array<any>;
  public map: any = {
    lat: 48.621483, lng: 2.330711, zoom: 10
  };
  constructor() { }

  ngOnInit() {
    this.optionsSelect = [
      { value: '1', label: 'Commercial' },
      { value: '2', label: 'ARM' },
      { value: '3', label: 'Support' },
      { value: '', label: 'Marketing' },
    ];
  }

}
