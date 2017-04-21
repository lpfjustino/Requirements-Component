import {Component, Input} from '@angular/core';
import {DerpPipe} from './derp.pipe';
import { RequirementsService }    from './requirements.service';


@Component ({
  selector: 'tree-view',
  template: `
  <ul>
    <li *ngFor="let node of treeData | derp">
      {{node._name}} <br>
      > <span *ngFor="let req of node.description | derp">
          <a href="#" (click)="showRequirement(req)">{{req}}</a>
        </span>
      <tree-view *ngIf="node.feature" [treeData]="node.feature"></tree-view>
      <tree-view *ngIf="node.and" [treeData]="node.and"></tree-view>
      <tree-view *ngIf="node.or" [treeData]="node.or"></tree-view>
      

      
      </li>
  </ul>

  `
})

export class TreeView {
  @Input() treeData: [{}];

  constructor(private requirementsService: RequirementsService) {
    
  }

  showRequirement(id: string) {
    var rq_stid = id.substring(1,5);
    var rq_id = id.substring(5, id.length);

    this.requirementsService
          .getReqById(rq_stid, rq_id)
          .subscribe(res => {
            console.log(res);
          });
  }
}

