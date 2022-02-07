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
  @Input() public toggleAllItems: EventEmitter<boolean>;

  /**
   * Invoked when all children (groups) are ready
   */
  ngAfterContentInit() {
    this.toggleAllItems.subscribe(data => {
      this.groups.toArray().forEach(
        (t) => t.opened = !t.opened,
        );
      });
    this.groups.toArray().forEach((t) => {
      t.toggle.subscribe(() => {
        // Open the group
        if(this.isOpened(t)){
          // this.openGroup(t);
          t.opened = false;
        }
        else{
           this.openGroup(t);
        }
      });
    });
  }

  isOpened(item){
    if(item.opened){
      return true;
    }
    else
      return false;
  }
  /**
   * Open an accordion group
   * @param group   Group instance
   */
  openGroup(group: AccordionGroupComponent) {
    // close other groups
    this.groups.toArray().forEach((t) => t.opened = false);
    group.opened = true;
  }
  
}
