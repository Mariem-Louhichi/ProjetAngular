import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  project :Project[]=[
    {id:0,name:"IOT Project (Internship)",pictures:["../../assets/delta_robot_8.jpg","../../assets/robot.jpg","../../assets/roboot.png"],summary:"Développement des scripts pour calibrer et commander un robot pour une application de paiement électronique",description:"Développement des scripts pour calibrer et commander un robot pour une application de paiement électronique",tags:[Tag.G_CODE,Tag.PYTHON,Tag.PYCHARM,Tag.ARDUINO,Tag.TKINTER]},
    {id:1,name:"DevOps/Cloud/Securité Project (PFA)",pictures:["../../assets/capture Azure_Sentinel.png","../../assets/13.png","../../assets/16.png"],summary:"Configurer la solution SIEM « Azure Sentinel » pour détecter et visualiser les attaques sur une machine virtuelle crée et configuré sur le cloud « Azure » avec les technologies DevOps.",description: "",tags:[Tag.CI,Tag.AZURECLOUD,Tag.AZURESENTINEL,Tag.GITHUB,Tag.DOCKER,Tag.TERRAFORM,Tag.BASH]},
    {id:2,name:"DevOps/Cloud Project (Internship)",pictures:["../../assets/COORDONN2ES.png","../../assets/topologie.png","../../assets/azurePipelines.png"],summary:"Mise en place et paramétrage d'OpenStack, avec automatisation du provisionnement des ressources.",description:"Développement des scripts pour calibrer et commander un robot pour une application de paiement électronique",tags:[Tag.OPENSTACK,Tag.AZURECLOUD,Tag.GITHUB,Tag.GITLABCI,Tag.TERRAFORM,Tag.ANSIBLE,Tag.YAML]} 
 
   
   ];

  constructor() { }

  GetProjects(){
    return this.project;
  }

  GetProjectById(id:number):Project{
    let project=this.project.find(project=>project.id===id);

    if(project===undefined){
      throw new TypeError('there is no project that matches the id : '+id);}

    return project;

  }


  GetProjectsByFilter(filterTags:Tag[]){
    let filteredProjects:Project[]=[];
    this.project.forEach(function(project){
      let foundAll=true;
      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag)==false){
          foundAll=false;
        }

      });

      if(foundAll){
        filteredProjects.push(project);
      }

    });

    return filteredProjects;

  }
}
