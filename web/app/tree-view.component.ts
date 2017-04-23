import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DerpPipe} from './derp.pipe';
import { RequirementsService }    from './requirements.service';


@Component ({
  selector: 'tree-view',
  template: `
  <ul>
    <li *ngFor="let node of treeData | derp">
      <input type="checkbox" name="isActive" *ngIf="node._name?.length > 0" (change)="choose(node._name)">
      {{node._name}}<br>
      <span *ngFor="let req of node.description | derp">
          <a href="#" (click)="showRequirement(req)">{{req}}</a><br>
      </span>
      <tree-view *ngIf="node.feature" [treeData]="node.feature" (notify)="childChoice($event)"></tree-view>
      <tree-view *ngIf="node.and" [treeData]="node.and" (notify)="childChoice($event)"></tree-view>
      <tree-view *ngIf="node.or" [treeData]="node.or" (notify)="childChoice($event)"></tree-view>
      </li>
  </ul>

  `
})

export class TreeView implements OnInit {
  @Input() treeData: [{}];
  @Output('notify') notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(private requirementsService: RequirementsService) { }

  // Function that handles choices of current level's requirements
  choose(feature: string) {
    this.notify.emit(feature);
  }

  // Function that handles choices of underlying level's requirements
  childChoice(choice: string) {
    this.notify.emit(choice);
  }

  showRequirement(id: string) {
    var rq_stid = id.substring(0,4);
    var rq_id = id.substring(4, id.length);

    this.requirementsService
          .getReqById(rq_stid, rq_id)
          .subscribe(res => {
            //console.log(res);
          });
  }
}


export interface Chosen {
  isActive? : boolean;
}