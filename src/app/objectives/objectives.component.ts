import { Component } from '@angular/core';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent {
  newObjective = { 
    title: '', 
    description: '', 
    category: 'Professionnel', 
    priority: 'Moyenne', 
    status: 'En cours', 
    startDate: '', 
    endDate: '', 
    tags: '', 
    attachment: null, 
    reminderEnabled: false, 
    reminder: '', 
    privacy: 'Privé', 
    notes: '' 
  };

  objectives: { 
    title: string, 
    description: string, 
    category: string, 
    priority: string, 
    status: string, 
    startDate: string, 
    endDate: string, 
    tags: string, 
    attachment: any, 
    reminderEnabled: boolean, 
    reminder: string, 
    privacy: string, 
    notes: string 
  }[] = [];

  addObjective() {
    if (this.newObjective.title && this.newObjective.description) {
      const objectiveToAdd = { ...this.newObjective };
      this.objectives.push(objectiveToAdd);
      this.newObjective = { 
        title: '', 
        description: '', 
        category: 'Professionnel', 
        priority: 'Moyenne', 
        status: 'En cours', 
        startDate: '', 
        endDate: '', 
        tags: '', 
        attachment: null, 
        reminderEnabled: false, 
        reminder: '', 
        privacy: 'Privé', 
        notes: '' 
      }; // Reset form
    } else {
      alert('Both fields are required.');
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.newObjective.attachment = event.target.files[0];
    }
  }
}
