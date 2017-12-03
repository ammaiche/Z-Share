import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {InscriptionService} from "./inscription.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [InscriptionService]
})
export class InscriptionComponent implements OnInit {

  private technologies : string[];
  private suggestions: string[];
  private technologiesToStr: string = "";

  private recordTyping:boolean = false;
  private currentTechno:string  = '';

  private email: string;
  private firstName:string;
  private lastName:string;

  constructor(private inscriptionService: InscriptionService) {}

  ngOnInit() {
      this.technologies = this.inscriptionService.getTechnologies();

  }

  checkTechnology(event){

    this.suggestions = [];

    if(this.technologiesToStr.endsWith('#')) {

      this.recordTyping = true;
   }

    if(this.recordTyping) {


        if(event.keyCode>=65 && event.keyCode<=90){

          this.currentTechno += event.key;

          this.technologies.forEach((item)=>{

            if(item.startsWith(this.currentTechno)){

              this.suggestions.push(item);
            }

          });
        }else{

          this.currentTechno = '';
          this.recordTyping = false;
        }
    }

    if(event.key == '#') {
      this.recordTyping = true;
     }

  }

  selectTechno(techno: string){

    this.technologiesToStr = this.technologiesToStr.substr(0,this.technologiesToStr.lastIndexOf('#')).concat(techno);
    this.technologiesToStr+='; ';
    this.suggestions = [];
  }

}
