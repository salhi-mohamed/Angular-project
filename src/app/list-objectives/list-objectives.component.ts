import { Component, OnInit } from '@angular/core';
import { ObjServiceService } from '../obj-service.service';
import { Objective } from '../models/objective.model';

@Component({
  selector: 'app-list-objectives',
  templateUrl: './list-objectives.component.html',
  styleUrls: ['./list-objectives.component.css']
})
export class ListObjectivesComponent implements OnInit {
  objectives: Objective[] = [];

  constructor(public objService: ObjServiceService) {}

  ngOnInit() {
    this.objectives = this.objService.objectives;
  }

  deleteObj(objectiveToDelete: Objective) {
    this.objService.objectives = this.objService.objectives.filter(objective => objective !== objectiveToDelete);
    this.objectives = this.objService.objectives; // Mettre à jour la liste locale
  }
}
