import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    imports: [FormsModule],
    templateUrl: './form.component.html',
})
export class FormComponent {
    email = '';

    onSubmit(): void {
        console.log(this.email);
    }
}
