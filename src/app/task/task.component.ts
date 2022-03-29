import { ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskComponent  {

  

  @Input() tasks:any[] = [];

  trackById(index:any, item:any) {
    return item.id;
  }
  
  
 
  
}
