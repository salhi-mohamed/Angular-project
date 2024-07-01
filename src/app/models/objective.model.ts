 
// src/app/models/objective.model.ts
export interface Objective {
    title: string;
    description: string;
    category: string;
    priority: string;
    status: string;
    startDate: string;
    endDate: string;
    tags: string;
    attachment: File | null;
    reminderEnabled: boolean;
    reminder: string;
    privacy: string;
    progress: number;  // Ajout de la propriété progress
  }
  