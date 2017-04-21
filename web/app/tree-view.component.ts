import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DerpPipe} from './derp.pipe';
import { RequirementsService }    from './requirements.service';


@Component ({
  selector: 'tree-view',
  template: `
  <ul>
    <li *ngFor="let node of treeData | derp">
      <input type="checkbox" name="isActive" *ngIf="node?.length > 0" (click)="choose(node)">
      {{node._name}} {{node.length}} <br>
      <span *ngFor="let req of node.description | derp">
          <a href="#" (click)="showRequirement(req)">{{req}}</a><br>
      </span>
      <tree-view *ngIf="node.feature" [treeData]="node.feature"></tree-view>
      <tree-view *ngIf="node.and" [treeData]="node.and"></tree-view>
      <tree-view *ngIf="node.or" [treeData]="node.or"></tree-view>
      

      
      </li>
  </ul>

  `
})

export class TreeView implements OnInit {
  @Input() treeData: [{}];
  @Output() onChosen = new EventEmitter<string>();

  constructor(private requirementsService: RequirementsService) { }

  choose(feature: string) {
    this.onChosen.emit(feature);
  }

  showRequirement(id: string) {
    var rq_stid = id.substring(0,4);
    var rq_id = id.substring(4, id.length);

    console.log(rq_stid, rq_id);

    this.requirementsService
          .getReqById(rq_stid, rq_id)
          .subscribe(res => {
            console.log(res);
          });
  }
}


export interface Chosen {
  isActive? : boolean;
}