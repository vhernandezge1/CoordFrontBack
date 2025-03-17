import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  leaderboard = [
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 100 },
    { name: 'Charlie', score: 80 },
    { name: 'David', score: 95 },
    { name: 'Eve', score: 105 }
  ];
}
