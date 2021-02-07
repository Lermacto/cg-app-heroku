import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cg-app-heroku';
  errEmpty = 'Campo Vacio';

  addElementList(): void{
    const inputContainer = document.getElementById('elementContainer');
    const inputField = document.getElementById('inputField') as HTMLInputElement;
    document.getElementById('emptyAlert').style.visibility = 'hidden';
    const element = document.createElement('p');
    if (inputField.value === '') {
      document.getElementById('emptyAlert').style.visibility = 'visible';
    } else {
      element.innerText = inputField.value;
      inputContainer.append(element);
      inputField.value = '';
      element.addEventListener('click', () => {
        element.style.textDecoration = 'line-through';
      });
      element.addEventListener('dblclick', () =>{
        inputContainer.removeChild(element);
      })
    }
  }
}
