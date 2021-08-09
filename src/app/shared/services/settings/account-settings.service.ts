import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    public defaultTheme: string = "default-dark";
    public linktag = document.getElementById('theme');
    public availableThemes: IThemes[] = [
            { type: ThemeTypes.light, name: 'default', selected: false }, 
            { type: ThemeTypes.light, name: 'green', selected: false }, 
            { type: ThemeTypes.light, name: 'red', selected: false }, 
            { type: ThemeTypes.light, name: 'blue', selected: false }, 
            { type: ThemeTypes.light, name: 'purple', selected: false }, 
            { type: ThemeTypes.light, name: 'megna', selected: false },
            { type: ThemeTypes.dark, name: 'default-dark', selected: false }, 
            { type: ThemeTypes.dark, name: 'green-dark', selected: false }, 
            { type: ThemeTypes.dark, name: 'red-dark', selected: false }, 
            { type: ThemeTypes.dark, name: 'blue-dark', selected: false }, 
            { type: ThemeTypes.dark, name: 'purple-dark', selected: false }, 
            { type: ThemeTypes.dark, name: 'megna-dark', selected: false }
        ];

    public changeTheme(theme: string){
        let link: string = `./assets/css/colors/${theme}.css`
        this.linktag?.setAttribute('href', link);
        localStorage.setItem('theme-color', theme);
        //@ts-ignore
        this.availableThemes.filter(x => x.selected == true).forEach(x => x.selected = false);
        //@ts-ignore
        this.availableThemes.find(x => x.name === theme).selected = true;
    }

    public setThemeColor(): void {
        let theme: string = localStorage.getItem("theme-color") || this.defaultTheme;
        this.changeTheme(theme);
    }
}

export interface IThemes {
    type: ThemeTypes;
    name: string;
    selected: boolean;
}

export enum ThemeTypes { light, dark }