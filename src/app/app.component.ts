import { ChangeDetectorRef, Component, ComponentRef, inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements  OnInit{
  ngOnInit(): void {
  
    this.cdr.detectChanges();

  }
  title = 'test';
  data1:any=[1,2,3,4]
  cdr = inject(ChangeDetectorRef);
  data = [
    {
      name: "Node 1",
      children: [
        {
          name: "Node 1.1",
          children: []
        },
        {
          name: "Node 1.2",
          children: [
            {
              name: "Node 1.2.1",
              children: []
            }
          ]
        }
      ]
    },
    {
      name: "Node 2",
      children: []
    }
  ];
}
