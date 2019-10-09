import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  // templateUrl: './hello.component.html',
  template: `<div>
                  Welcome {{name}}
            </div>`,
  // styleUrls: ['./hello.component.css']
  styles: [],
})
export class HelloComponent implements OnInit {
// To make the Names dynamic
  public name = "Satya Shodhaka";
  constructor() { }

  ngOnInit() {
  }

}
