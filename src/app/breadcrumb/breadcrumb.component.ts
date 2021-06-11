import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  constructor() {

    /*
    ver esto... 

    this.parts.unshift('Inicio');
    const limit = this.parts.length;
    for (let i = 0; i < limit; i++) {
    if (i > 0) {
      this.parts.splice(i * 2, 0, '-');
    }
    }
    this.parts.pop();
    for (let i = 0; i < limit; i++) {
    if (this.parts[i] !== 'inicio' && this.parts[i] !== '-') {
      this.url[i] = (typeof this.url[i - 2] === 'undefined' ?
      '' : this.url[i - 2]).replace(/\s/g, '-') + '/' + this.parts[i].replace(/\s/g, '-');
    }
    }

<div class="breadcrumb">
    <h4>{{ activePage }}</h4>
    <ul>
      <li *ngFor="let items of parts; let i = index" [ngClass]="{ 'inicio': i === 0, 'separator': i % 2 === 0 && i > 0 }">
        <div *ngIf="i % 2 !== 0 && i > 0">
          <a routerLink='{{ url[i] }}'>
            {{ "Breadcrumbs." + items | translate }}
          </a>
        </div>
        <div *ngIf="i % 2 === 0 && i > 0">-</div>
      </li>
    </ul>
</div>

    */

   }

  ngOnInit(): void {
  }

}
