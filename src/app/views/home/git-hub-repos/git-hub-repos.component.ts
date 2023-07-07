import { Component, Input, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Git } from 'src/app/shared/models/git_root.model';

@Component({
  selector: 'app-git-hub-repos',
  templateUrl: './git-hub-repos.component.html',
  styleUrls: ['./git-hub-repos.component.css']
})

export class GitHubReposComponent {
  @Input() gitRepositorio: Git;
  public pageSlice: any[] = [];
  public slicedItems: any[] = [];

  /* Detecta alterações na entrada gitRepositorio e atualiza slicedItems com a matriz original items. 
  Em seguida, chama updatePageSlice() para atualizar a página inicial. */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['gitRepositorio'] && changes['gitRepositorio'].currentValue) {
      this.slicedItems = this.gitRepositorio.items;  // Armazena os elementos originais em slicedItems
      this.updatePageSlice(); // Atualiza a página inicial
    }
  }

  /*É chamado quando ocorre uma alteração na página 
  (por exemplo, quando o usuário vai para a próxima página usando o paginador). */
  OnPageChange(event: PageEvent) {
    this.updatePageSlice(event.pageIndex, event.pageSize); // Atualiza a página com base nos valores de pageIndex e pageSize
  }

  /* Atualiza a parte dos elementos a ser exibida na página com base nos valores de pageIndex e pageSize. */
  private updatePageSlice(pageIndex: number = 0, pageSize: number = 4) {
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    this.pageSlice = this.slicedItems.slice(startIndex, endIndex); // Atualiza a parte dos elementos a ser exibida na página
  }
}
