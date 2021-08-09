import { Component, OnInit } from '@angular/core';
import { AccountService, IThemes, ThemeTypes } from 'src/app/shared/services/settings/account-settings.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingsComponent implements OnInit {
  public get themeTypes(): ThemeTypes { return this.themeTypes };
  public availableThemes: IThemes[];
  public lightThemes: IThemes[];
  public darkThemes: IThemes[];
  constructor(private service: AccountService) { 
    this.availableThemes = this.service.availableThemes;
    this.lightThemes = this.availableThemes.filter(x =>x.type === ThemeTypes.light);
    this.darkThemes = this.availableThemes.filter(x =>x.type === ThemeTypes.dark);
  }

  ngOnInit(): void {
  }

  changeTheme(theme: string){
    this.service.changeTheme(theme);
  }

}
