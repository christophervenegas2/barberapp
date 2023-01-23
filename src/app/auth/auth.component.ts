import { Component, OnInit } from '@angular/core';
import { authenticationTexts } from './texts/auth.text';
import { TextField } from '@nativescript/core/ui/text-field';
import { Page } from '@nativescript/core/ui/page';
import { RouterExtensions } from "@nativescript/angular";

@Component({
	moduleId: module.id,
	selector: 'auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  authTexts = authenticationTexts;

	constructor(private router: RouterExtensions, private page: Page) { }

	ngOnInit() {
    this.page.actionBarHidden = true;
  }

  onReturnPress(args) {
    // returnPress event will be triggered when user submits a value
    let textField = <TextField>args.object;

    // Gets or sets the placeholder text.
    console.log(textField.hint);
    // Gets or sets the input text.
    console.log(textField.text);
    // Gets or sets the secure option (e.g. for passwords).
    console.log(textField.secure);

    // Gets or sets the soft keyboard type. Options: "datetime" | "phone" | "number" | "url" | "email"
    console.log(textField.keyboardType);
    // Gets or sets the soft keyboard return key flavor. Options: "done" | "next" | "go" | "search" | "send"
    console.log(textField.returnKeyType);
    // Gets or sets the autocapitalization type. Options: "none" | "words" | "sentences" | "allcharacters"
    console.log(textField.autocapitalizationType);

    // Gets or sets a value indicating when the text property will be updated.
    console.log(textField.updateTextTrigger);
    // Gets or sets whether the instance is editable.
    console.log(textField.editable);
    // Enables or disables autocorrection.
    console.log(textField.autocorrect);
    // Limits input to a certain number of characters.
    console.log(textField.maxLength);

    setTimeout(() => {
        textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.
    }, 100);
}

  goToHomePage() {
    this.router.navigate(["/home"]);
  }
}
