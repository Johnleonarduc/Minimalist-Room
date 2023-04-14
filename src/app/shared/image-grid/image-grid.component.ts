import { Component } from '@angular/core';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css']
})
export class ImageGridComponent {
  images = [
    { small: '../../../assets/small/image1.jpg', medium: '../../../assets/medium/image1.jpg', large: '../../../assets/medium/image1.jpg', alt:'image of chair and basket'},
    { small: '../../../assets/small/image2.jpg', medium: '../../../assets/medium/image2.jpg', large: '../../../assets/medium/image2.jpg', alt:'image of table, phone, and mirror'},
    { small: '../../../assets/small/image3.jpg', medium: '../../../assets/medium/image3.jpg', large: '../../../assets/large/image3.jpg', alt:'image of couch and cabinet'},
    { small: '../../../assets/small/image4.jpg', medium: '../../../assets/medium/image4.jpg', large: '../../../assets/medium/image4.jpg', alt:'image of couch and side table with lamp'},
    { small: '../../../assets/small/image5.jpg', medium: '../../../assets/medium/image5.jpg', large: '../../../assets/medium/image5.jpg', alt:'image of cemppty room'},

  ]
}
