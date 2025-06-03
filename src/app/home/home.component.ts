import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Welcome to the Home Page';
  description = 'This is the home page of our Angular application. Here you can find various resources and links to help you get started.';

  constructor() {
    // Initialization logic can go here
  }

  ngOnInit() {
    // This method is called after the component is initialized
    console.log('HomeComponent initialized');
  }
  navigateToAbout() {
    // Logic to navigate to the About page
    console.log('Navigating to About page');
    // You can use Angular Router to navigate to another component
  }
  navigateToContact() {
    // Logic to navigate to the Contact page
    console.log('Navigating to Contact page');
    // You can use Angular Router to navigate to another component
  }

}
