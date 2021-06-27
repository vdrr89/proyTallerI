import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  //add
  // name: string;
  // breadcrumb: Array<any> = [];
  // breadcrumbList: Array<any> = [];
  // listenRouting: any;

  // dentro del () add
  // constructor(private _router: Router, private breadcrumbService: BreadcrumbService) { 
  //   this.name = "";
  //  }
   constructor(){}

  // dentro del {} add
  ngOnInit(): void { 
    // this.breadcrumb = this.breadcrumbService.getBreadcrumb();
    // this.listenRouting();
  }

// // aqui debajo add
// let routerUrl:string, routerList: Array<any>, target: any;
// this._router.events.subscribe((router: any) => { 
//   target = this.breadcrumb;
//   this.breadcrumbList.lenght = 0;
//   routerList = routerUrl.slice(1).split('/');
//   routerList.forEach((router,index) => { 
//     target = target.find(page => page.path.slice(2) === router);
//     this.breadcrumbList.push({ 
//       name: target.name,
//       path: (index === 0) ? target.path : `${this.breadcrumbList[index-1].path}/${target.path.slice(2)}`
//     });

//     if (index+1 !== routerList.length) {
//       target = target.children; //pasa que de momento no tengo childrens
//     }
//   });
//   console.log(this.breadcrumbList);
// });
}