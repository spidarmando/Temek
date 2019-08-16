import { Component } from '@angular/core'


@Component({
    selector: '',
    templateUrl: './temek.html',
    styles: [`

    .logo{
        width:15rem;
        height:50px;
    }

    .carousel-inner > .item > img{ 
        width:100%; 
        max-height:100px; 
    }
    
    footer{
        display:block;
        background-color:#60666e;
    }

    .container{
        width:100%;
        text-align: center;
        color:#c2c0bc;
        padding: 1rem;
        
    }

    #carouselExampleControls{
        margin-bottom: 10rem;
    }
    `]

})

export class Temek {

}