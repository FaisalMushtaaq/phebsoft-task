import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.scss']
})
export class AccordionGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/**
   * If the panel is opened or closed
   */
 @Input() opened = false;

 /**
  * Text to display in the group title bar
  */
 @Input() title: string;

 /**
  * Emitted when user clicks on group titlebar
  * @type {EventEmitter<any>}
  */
 @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

 @Input() imgSrc: string;

}
