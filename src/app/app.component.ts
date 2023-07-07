import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitSearch';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { 
    this.matIconRegistry.addSvgIcon(
      "git-fork", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/git-fork.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "git-issue", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/git-issue.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "git-search", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/git-search.svg")
    );
  }
}
