import {Component, OnInit, ViewChild} from '@angular/core';
import {InscriptionService} from "./inscription.service";
import {UserInfo} from "./UserInfo";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [InscriptionService]
})
export class InscriptionComponent implements OnInit {

  private ngForm : FormGroup;
  private technologies: string[];
  private suggestions: string[];
  private technologiesToStr : string='';

  private recordTyping: boolean = false;
  private currentTechno: string  = '';


  constructor(private inscriptionService: InscriptionService, private formBuilder: FormBuilder) {

      this.ngForm = this.formBuilder.group({
        'email' : [null, Validators.compose([Validators.required, Validators.email])],
        'firstName' : [null, Validators.compose([Validators.required, Validators.minLength(3)])],
        'lastName' :  [null, Validators.compose([Validators.required, Validators.minLength(3)])],
        'technologiesToStr' : ''
      });
  }


  ngOnInit() {
    this.technologies = this.inscriptionService.getTechnologies();

    this.ngForm.get('technologiesToStr').valueChanges.subscribe(
      (value)=>{
        this.technologiesToStr = value;
      }
    );
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
    this.technologiesToStr += '; ';
    this.suggestions = [];
    this.ngForm.get('technologiesToStr').setValue(this.technologiesToStr);

  }

  subscribe(formValue) : void{


    const technologies =  this.technologiesToStr.trim().split(';');
    const user : UserInfo = {
      email : formValue.email,
      firstName : formValue.firstName,
      lastName : formValue.lastName,
      technologies : technologies
    };
    this.inscriptionService.subscribe(user);

}
