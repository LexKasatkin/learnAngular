import {Component, OnInit} from '@angular/core';
import {Contact} from "./contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact: Contact;

  constructor() {
    this.contact=new Contact("+7 999 441 63 08", "kasatkin-11@yandex.ru");
  }

  ngOnInit() {
  }
}
