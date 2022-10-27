import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-translate';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'ta']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    console.log(browserLang);
    translate.use(browserLang.match(/en|ta/) ? browserLang : 'en');
  }
}
