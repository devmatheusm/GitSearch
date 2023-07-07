import { Component } from '@angular/core';
import { githubService } from 'src/app/shared/services/github.service';
import { Git } from 'src/app/shared/models/git_root.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public githubRepoSearch:string;
  public errorMSG:string;
  public repositorio:Git;
  loading:boolean = false;

  constructor(private githubApi:githubService) { }

  GetRepos(){
    this.loading = true;
    this.githubApi.getRepository(this.githubRepoSearch).subscribe({
      next: (data) => { this.repositorio = data;},
      error: (error) => { this.errorMSG = error.alert, this.loading = false },
      complete: () => { this.loading = false}
    });
  }
}