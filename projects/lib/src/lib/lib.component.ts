import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lib',
  template: `
    <p>
      welcome
    </p>
  `,
  styles: [
  ]
})
export class LibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
