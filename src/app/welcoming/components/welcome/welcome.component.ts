import {Component, Input} from '@angular/core';
import {Developer} from "../../model/developer.entity";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  @Input() firstName!: string;
  @Input() lastName!: string;

  get fullName(): string {
    let developer = new Developer(this.firstName, this.lastName);
    return developer.fullName;
  }

}
