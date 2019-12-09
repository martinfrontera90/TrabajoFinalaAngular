import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { Article } from "../../../models/article";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  $: any;
  @ViewChildren('my-modal') myModal: ModalComponent;
  @Input() title: string;
  @Input() description: string;
  @Input() price: number;
  @Input() text: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
 
  }
  ver(article: Article) {
    
   alert("hola");
    // this.modalService.open(this.myModal);
  }

}


