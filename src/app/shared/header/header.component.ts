import { Component, HostListener, ElementRef } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { INavLink } from '../interfaces/navlinks.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.mobile.css', './header.component.desktop.css']
})
export class HeaderComponent {

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  navLinks:INavLink[] = [
    {route: 'home', title: 'home'},
    {route: 'about', title: 'about us'},
    {route: 'services', title: 'services'},
    {route: 'teams', title: 'our teams'},
  ]

  faBars = faBars;
  faXmark = faXmark;
  screenWidth: number;
  isMenuBtnClicked: boolean = false;

  // HostListener to detect screen size changes
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }


  toggleNav(nav:  HTMLElement){
    if(nav.classList.contains('show-mobile')){
      nav.classList.remove('show-mobile');
      nav.classList.add('hide');
    }else{
      nav.classList.remove('hide');
      nav.classList.add('show-mobile');
    }
    this.isMenuBtnClicked = !this.isMenuBtnClicked;
  }
}
