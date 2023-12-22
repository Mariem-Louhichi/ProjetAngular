import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
       


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})


export class PortfolioComponent implements OnInit{

  project ={} as Project[];

  isCollapsed:boolean=true;
  G_Code:boolean=false;
  Openstack:boolean=false;
  AzureCloud:boolean=false;
  Terraform:boolean=false;
  filtering:Boolean=false;

  constructor(private titleService: Title,private projectService:ProjectsService){
    this.titleService.setTitle('Mariem Louhichi -Portfolio');
  }
  ngOnInit(): void {
    this.project=this.projectService.GetProjects();
  }

  Filter(){
    let filterTags:Tag[]=[];

    if (this.G_Code){
      filterTags.push(Tag.G_CODE);
    }

    if (this.Openstack){
      filterTags.push(Tag.OPENSTACK);
    }

    if (this.AzureCloud){
      filterTags.push(Tag.AZURECLOUD);
    }

    if (this.Terraform){
      filterTags.push(Tag.TERRAFORM);
    }

    if(this.G_Code||this.Openstack||this.Terraform||this.AzureCloud){
      this.filtering=true;
    }
    else{
      this.filtering=false;
    }


    this.project=this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){

    this.G_Code=false;
    this.Openstack=false;
    this.AzureCloud=false;
    this.Terraform=false;
    this.filtering=false;
    

    this.project=this.projectService.GetProjects();

  }

}
