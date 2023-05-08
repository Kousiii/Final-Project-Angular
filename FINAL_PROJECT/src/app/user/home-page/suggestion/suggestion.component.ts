import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuggestionService } from 'src/app/services/suggestion.service';
import { SformComponent } from '../sform/sform.component';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent {
  
  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(SformComponent);
  }
  
}
