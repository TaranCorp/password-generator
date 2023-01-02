import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator';
  generatedPassword: string = '';
  passwordLength: number = 0;
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;

  onLengthChange(target: any): void {
    const parsedValue = parseInt(target.value);
    
    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    }
  }

  onUseLettersChange() {
    this.useLetters = !this.useLetters;
  }
  
  onUseNumbersChange() {
    this.useNumbers = !this.useNumbers;
  }

  onUseSymbolsChange() {
    this.useSymbols = !this.useSymbols;
  }

  onGenerateButtonClick(): void {
    const numbers = '1234567890';
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const upperLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const symbols = "!@#$%^&*()__+~`-=/.,';][\\|}{:?><}]\"";

    let validChars = '';
    if (this.useLetters === true) {
      validChars += letters;
      validChars += upperLetters;
    }
    if (this.useNumbers === true) {
      validChars += numbers;
    }
    if (this.useSymbols === true) {
      validChars += symbols;
    }

    let tempPassword = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      tempPassword += validChars[index];
    }

    this.generatedPassword = tempPassword;
  }
}
