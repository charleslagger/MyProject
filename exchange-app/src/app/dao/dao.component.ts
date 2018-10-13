import { Component, OnInit } from '@angular/core';
import { DaoService } from './dao.service';

@Component({
  selector: 'app-dao',
  templateUrl: './dao.component.html',
  styleUrls: ['./dao.component.css']
})
export class DaoComponent implements OnInit {
  tiles = [
    { text: 'Shiba', cols: 1, rows: 2, color: 'lightgreen' },

    { text: 'Doggy', cols: 1, rows: 2, color: 'lightpink' },
    { text: 'Dog', cols: 1, rows: 2, color: '#DDBDF1' },
    { text: 'Doggo', cols: 1, rows: 2, color: '#DDBDF1' },
    { text: 'Doge', cols: 1, rows: 2, color: '#DDBDF1' },
    { text: 'Some Dog', cols: 1, rows: 2, color: '#DDBDF1' },
    { text: 'Text', cols: 1, rows: 2, color: '#DDBDF1' },
  ];

  image;
  constructor(private daoService: DaoService) { }

  ngOnInit() {
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.image = myReader.result;
      console.log('==>' + this.image);
    };

    myReader.readAsDataURL(file);
  }

  clickButtonTest() {
    console.log('==>>Click button test');
  }

}
