import { Component } from '@angular/core';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.mobile.css', './footer.component.desktop.css']
})
export class FooterComponent {

  socialIcons = [
    { link: 'https://www.facebook.com', icon: faFacebook},
    { link: 'https://www.instagram.com', icon: faInstagram},
    { link: 'https://www.tiktok.com', icon: faTiktok},
    { link: 'https://www.youtube.com', icon: faYoutube},
  ]

}
