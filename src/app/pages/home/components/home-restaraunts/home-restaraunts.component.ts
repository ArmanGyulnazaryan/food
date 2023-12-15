import { Component } from '@angular/core';

@Component({
  selector: 'app-home-restaraunts',
  templateUrl: './home-restaraunts.component.html',
  styleUrls: ['./home-restaraunts.component.scss'],
})
export class HomeRestarauntsComponent {
  public restaraunts = [
    {
      title: 'Royal Sushi House',
      
      
      time: '30-40 min',
      cart: 0,
      img: 'assets/img1.png',
      price: '$32 min sum',
      tags: [
        {
          title: 'Sushi',
          img: 'assets/sushi1.png' ,
          
        },
      ],
    },

    {
      title: 'Burgers & Pizza',
      time: '40-60 min',
      cart: 2,
      img: 'assets/img2.png',
      price: '$24 min sum',
      tags: [
        {
          title: 'Burger',
          img: 'assets/burger.png',
                
         },
      ],
    },


    {
      title: 'Ninja sushi',
      time: '20-40 min',
      cart: 0,
      img: 'assets/img3.png',
      price: '$40 min sum',
      tags: [
        {
          title: 'Sushi',
          img: 'assets/sushi1.png',
        },
      ],
    },




    {
      title: 'Sushi master',
      time: '60-70 min',
      cart: 0,
      img: 'assets/img4.png',
      price: '$49 min sum',
      tags: [
        {
          title: 'Sushi',
          img: 'assets/sushi1.png',
        },
      ],
    },




    {
      title: 'Japanese sushi',
      time: '30-50 min',
      cart: 0,
      img: 'assets/img5.png',
      price: '$104 min sum',
      tags: [
        {
          title: 'Sushi',
          img: 'assets/sushi1.png',
        },
      ],
    },





    {
      title: 'Kobe',
      time: '20-30 min',
      cart: 0,
      img: 'assets/img6.png',
      price: '$57 min sum',
      tags: [
        {
          title: 'Sushi',
          img: 'assets/sushi1.png',
        },
      ],
    },




















  ];
}
