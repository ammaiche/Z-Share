import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  private email: string;
  private firstName:string;
  private lastName:string;

  private technologies: string[] = ["java", "c#", 'elestic search', 'agilité', 'scrum', 'Rest', 'c++'];

  private technologiesToStr: string = "";

  private suggestions: string[] = [];

  private record:boolean = false;

  private currentTechno:string  = '';

  private currentTypingIndex = -1;

  constructor() {}

  ngOnInit() {

  }

  checkTechnology(event){

    this.suggestions = [];

    if(this.technologiesToStr.endsWith('#')) {

      this.record = true;
      this.currentTypingIndex= this.technologiesToStr.length;
    }

    if(this.record) {


        if(event.keyCode>=65 && event.keyCode<=90){

          this.currentTechno += event.key;

          this.technologies.forEach((item)=>{

            if(item.startsWith(this.currentTechno)){

              this.suggestions.push(item);
            }

          });
        }else{

          this.currentTypingIndex = -1;
          this.currentTechno = '';
          this.record = false;
        }
    }

    if(event.key == '#') {
      this.record = true;
      this.currentTypingIndex= this.technologiesToStr.length;
    }

  }

  selectTechno(techno: string){

    this.technologiesToStr = this.technologiesToStr.substr(0, this.currentTypingIndex).concat(techno);
    this.suggestions = [];
  }

}
