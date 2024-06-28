import { Component } from '@angular/core';
import { Objective } from '../models/objective.model'; // Adjust the path if necessary

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent {
  newObjective: Objective = {
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
    privacy: ''
  };

  objectives: Objective[] = [];

  addObjective() {
    this.objectives.push({ ...this.newObjective });
    this.newObjective = {
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
      privacy: ''
    };
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.newObjective.attachment = file;
  }
}
