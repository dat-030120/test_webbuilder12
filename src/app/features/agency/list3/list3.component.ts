import { Component, Input } from '@angular/core';
import { ListComponent } from '../../list/list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list3',
  standalone: true,
  imports: [ListComponent,CommonModule,List3Component ],
  templateUrl: './list3.component.html',
  styleUrl: './list3.component.scss'
})
export class List3Component {
  @Input() node: any;


}
