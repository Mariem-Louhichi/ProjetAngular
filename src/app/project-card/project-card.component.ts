import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project ={} as Project;
  bsModalRef?:BsModalRef;

  constructor(private modelService:BsModalService){}

  openProjectModal(){

    const modalOptions:ModalOptions={
      class:"modal-lg",
      initialState:{
        project:this.project
      }
    };

    
    this.bsModalRef=this.modelService.show(ProjectModalComponent,modalOptions);
  }

}
