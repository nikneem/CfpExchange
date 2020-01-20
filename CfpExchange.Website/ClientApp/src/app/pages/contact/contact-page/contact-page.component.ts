import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
    contactForm: FormGroup;

    constructor() {}

    constructForm() {
        this.contactForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            subject: new FormControl(''),
            message: new FormControl('', [Validators.required])
        });
    }

    ngOnInit() {
        this.constructForm();
    }
}
