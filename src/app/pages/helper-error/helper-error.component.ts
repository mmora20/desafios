import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-helper-error',
  templateUrl: './helper-error.component.html',
  styleUrls: ['./helper-error.component.css']
})
export class HelperErrorComponent implements OnInit {
  
  @Input() control:FormControl | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
