import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',  
})
export class AboutComponent {

  objectives = [
    'Provide detailed, high-quality descriptions of every in-game item and their strategic value.',
    'Establish clear hero-item recommendations to help players optimize their performance.',
    'Deliver an intuitive, responsive, and easy-to-use layout accessible across all devices.'
  ];

  features = [
    { title: 'Clear Item Explanations', desc: 'Complex mechanics broken down into readable, actionable data.' },
    { title: 'Role-Based Suggestions', desc: 'Tailored builds for Tanks, Mages, Assassins, and more.' },
    { title: 'Gameplay Optimization', desc: 'Tools designed to improve decision-making during critical match phases.' }
  ];
}