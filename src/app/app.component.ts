import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  tasks = [
    { id: 1, fullname: 'Javier Ruiz' },
    { id: 2, fullname: 'Luis Vázquez' },
    { id: 3, fullname: 'David Sarria' }
  ];
  
  ngOnInit() {
    setTimeout(() => {
      this.tasks = [
        ...this.tasks,
        { id: this.tasks.length + 1, fullname: 'John Doe' }
      ];
    }, 1000);
  }

  

  
}
