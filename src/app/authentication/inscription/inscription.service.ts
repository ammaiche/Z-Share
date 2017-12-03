import {Injectable} from "@angular/core";

@Injectable()
export class InscriptionService{


  private technologies: string[] = ["java", "c#", 'elestic search', 'agilité', 'scrum', 'Rest', 'c++'];

  getTechnologies() : string[]{
    return this.technologies;
  }

}
