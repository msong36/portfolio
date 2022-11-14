import { Component, OnInit } from '@angular/core';
import { projects } from '../projects/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = projects;

  testFunc() {
    alert("clicked");
  }

  tileClick (id : number){
    switch (id) {
      case 5: {
        window.scrollTo(0, 0);
        break;
      }
      default: {
        //alert ("id for " + id + " received");
        document.getElementById(id.toString())?.classList.add("slide-in-right");
          let table = document.getElementById('target') as HTMLInputElement;
        var property = projects[id].name;
        alert(JSON.stringify(property));

        table.innerHTML = "HELLO";
        //table?.classList.add('bg-yellow');
        break;
      }
    }
  }

}
