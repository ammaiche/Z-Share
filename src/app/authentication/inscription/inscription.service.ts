import {Injectable} from "@angular/core";
import {UserInfo} from "./UserInfo";

@Injectable()
export class InscriptionService{


  private technologies: string[] = ["java", "c#", 'elastic search', 'agilité', 'scrum', 'Rest', 'c++'];

  getTechnologies() : string[]{
    return this.technologies;
  }
  subscribe(user : UserInfo) : void{

    console.log(JSON.stringify(user));
  }
}
