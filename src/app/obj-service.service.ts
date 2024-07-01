import { Injectable } from '@angular/core';
import { Objective } from './models/objective.model';

@Injectable({
  providedIn: 'root'
})
export class ObjServiceService {
  objectives: Objective[] = [];

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
    privacy: '',
    progress: 0 // Initialiser à 0
  };

  constructor() { }
}
