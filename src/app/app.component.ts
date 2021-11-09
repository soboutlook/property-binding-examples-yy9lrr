import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  imageURL = 'https://c.staticblitz.com/assets/media/client/homepage/images/logo-b1a300e55fb8d38e1cccab1b7754a10b.png';

  isDisabled = false;
  counter = 2;
  inputValue = 'Example Text';
  rowsNum = 14;
  colsNume = 6;
  color="burlywood";
}
