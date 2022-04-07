import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal!: Goal;


  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
