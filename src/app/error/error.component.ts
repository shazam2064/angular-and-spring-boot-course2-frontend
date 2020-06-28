import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Holy Cow!! An Error Occured! Contact Support at 000-000-0000';

  constructor() {
  }

  ngOnInit() {
  }

}
