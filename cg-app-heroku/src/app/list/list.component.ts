import { Component, OnInit } from '@angular/core';
import {ListService} from '../list.service';
import {ListElement} from '../listElement';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listElements: ListElement[];
  errEmpty = 'Campo Vacio';
  constructor(private listService: ListService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getElements();
  }

  getElements(): void {
    this.listService.getElements()
      .subscribe(listElements => {
          this.listElements = listElements;
        });
  }

  add(name: string, isStrikedThrough: boolean): void{
    document.getElementById('emptyAlert').style.visibility = 'hidden';
    if (!name) {document.getElementById('emptyAlert').style.visibility = 'visible'; return null;}
    this.listService.addElement({name, isStrikedThrough} as ListElement)
      .subscribe(element => {
        this.listElements.push(element);
      });
  }

  delete(element: ListElement): void{
    this.listElements = this.listElements.filter(e => e !== element);
    this.listService.deleteElement(element).subscribe();
  }

  updateStrikeThrough(element: ListElement): void{
    element.isStrikedThrough = true;
    this.listService.updateElement(element)
      .subscribe();
  }

}
