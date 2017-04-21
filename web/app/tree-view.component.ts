import { Component, Input, OnInit } from '@angular/core';
import { DerpPipe} from './derp.pipe';
import { RequirementsService }    from './requirements.service';


@Component ({
  selector: 'tree-view',
  template: `
  <ul>
    <li *ngFor="let node of treeData | derp">
      {{node._name}} <br>
      <span *ngFor="let req of node.description | derp">
          <input type="checkbox" name="isActive" *ngIf="req?.length > 0" [(ngModel)]="chosen.isActive">
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
  chosen: Chosen;

  constructor(private requirementsService: RequirementsService) {
    
  }

  ngOnInit() {
    this.chosen = {
      isActive: false,
    }
  }

  showRequirement(id: string) {
    var rq_stid = id.substring(1,4);
    var rq_id = id.substring(4, id.length);

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