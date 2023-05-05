import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-reachbox',
  templateUrl: './reachbox.component.html',
  styleUrls: ['./reachbox.component.css']
})
export class ReachboxComponent {
@Input() place:any;
}
