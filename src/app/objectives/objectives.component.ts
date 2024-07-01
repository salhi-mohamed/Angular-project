import { Component } from '@angular/core';
import { ObjServiceService } from '../obj-service.service';
import { Objective } from '../models/objective.model';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent {

  constructor(public objS: ObjServiceService) {}

  addObjective() {
    this.objS.objectives.push({ ...this.objS.newObjective });
    this.objS.newObjective = {
      title: '',
      description: '',
      category: '',
      priority: '',
      status: '',
      startDate: '',
      endDate: '',
      tags: '',
      attachment: null,
      reminderEnabled: false,
      reminder: '',
      privacy: '',
      progress: 0 // Initialiser à 0
    };
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.objS.newObjective.attachment = file;
  }
}
