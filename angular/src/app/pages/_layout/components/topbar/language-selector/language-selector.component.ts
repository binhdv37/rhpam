import { SessionStateService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface LanguageFlag {
  lang: string;
  name: string;
  flag: string;
  active?: boolean;
}

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  language: LanguageFlag;
  languages: LanguageFlag[] = [
    {
      lang: 'vi',
      name: 'Việt Nam',
      flag: './assets/media/svg/flags/220-vietnam.svg',
    },
    {
      lang: 'en',
      name: 'English',
      flag: './assets/media/svg/flags/226-united-states.svg',
    },
  ];
  constructor(
    private sessionState: SessionStateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setSelectedLanguage();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        this.setSelectedLanguage();
      });
  }

  setLanguageWithRefresh(lang) {
    this.sessionState.setLanguage(lang);
    window.location.reload();
  }

  setLanguage(lang) {
    this.languages.forEach((language: LanguageFlag) => {
      if (language.lang === lang) {
        language.active = true;
        this.language = language;
      } else {
        language.active = false;
      }
    });
  }

  setSelectedLanguage(): any {
    this.setLanguage(this.sessionState.getLanguage());
  }
}
