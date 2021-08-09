import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/settings/account-settings.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.setThemeColor();
  }

}
