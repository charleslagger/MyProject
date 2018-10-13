import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';
import { History } from './model/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  private totalTransactions;
  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.totalTransactions = this.getAllTransactions();
  }

  getAllTransactions() {
    return this.historyService.getAllTransactions();
  }
}
