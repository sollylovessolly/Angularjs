import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'this loaded dynamically'
  imgURL : string = 'data:image/png;base64,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'
  
  isdisabled: boolean = true
  isActive : boolean = true
  fruitName : string = 'apple'

  userName: string = "john doe"
  userName2: string = "oyin damola"

  buttonClick() {
    console.log("button clicked")
    alert("i noticed you clicked me. DO IT AGAIN")
  }
  buttonMouseover(){
    alert("you are hovering on me, stop!!!")
  }
  keyPressed(){
    console.log("key pressed")
   
  }
  keyEnter(event:any){
    // alert("you pressed enter right?")
    // console.log(event.keyCode)
    if(event.keyCode == 13){
      console.log('Enter key pressed')
      alert("you pressed enter key")
    }
  }
  keyupFiltering(){
    alert("you pressed that key... why")
  }
  keyFiltering(user:HTMLInputElement){
    console.log(user.value)
   
  }
  updateusername(username: HTMLInputElement){
    this.userName = username.value
    console.log(this.userName)
  }
}


