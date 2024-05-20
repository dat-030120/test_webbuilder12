import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { List2Component } from '../agency/list2/list2.component';
import { List3Component } from '../agency/list3/list3.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [List2Component, List3Component,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit,OnChanges {
  @Input() treeData?: any;
  clone:any=[];

  constructor(private crd: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnInit(): void {
    // console.log(this.id)
    // if(Array.isArray(this.id)){
    //   this.clone =[...this.id].filter((value:any,inde)=>inde==0)
    //   this.clone.pop()
    //   this.crd.detectChanges()
      
    // }
  }

}
