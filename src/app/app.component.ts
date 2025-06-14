import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TermsComponent } from "./pages/terms/terms.component";

@Component({
  selector: 'app-root',
  imports: [ TermsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'terms-page';
}
