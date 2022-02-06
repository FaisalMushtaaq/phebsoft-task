import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { AccordionGroupComponent } from '../accordion-group/accordion-group.component';

@Component({
  selector: 'app-custom-accordion',
  templateUrl: './custom-accordion.component.html',
  styleUrls: ['./custom-accordion.component.scss']
})
export class CustomAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ContentChildren(AccordionGroupComponent) 
  groups: QueryList<AccordionGroupComponent>

  /**
   * Invoked when all children (groups) are ready
   */
  ngAfterContentInit() {
    // console.log (this.groups);
    // Set active to first element
    // this.groups.toArray()[0].opened = true;
    // Loop through all Groups
    this.groups.toArray().forEach((t) => {
      // when title bar is clicked
      // (toggle is an @output event of Group)
      t.toggle.subscribe(() => {
        // Open the group
        this.openGroup(t);
      });
      /*t.toggle.subscribe((group) => {
        // Open the group
        this.openGroup(group);
      });*/
    });
  }

  /**
   * Open an accordion group
   * @param group   Group instance
   */
  openGroup(group: AccordionGroupComponent) {
    // close other groups
    this.groups.toArray().forEach((t) => t.opened = false);
    // open current group
    group.opened = true;
  }
  
}
