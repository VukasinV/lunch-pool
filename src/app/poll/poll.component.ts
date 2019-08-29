import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../models/suggestion.model';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  suggestions = [
    {
      name: 'Roll bar',
      description: 'Potaz od pecurki, gulas i banan torta'
    },
    {
      name: 'Zapata',
      description: 'Neki dorucak'
    },
    {
      name: 'Kasina',
      description: 'Jelo dana'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
