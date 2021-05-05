import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  styleUrls: ['login.component.css'],
  template: `
    <form action="action_page.php" method="post">
      <div class="imgcontainer">
       
      </div>

      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" [(ngModel)]="userID" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" [(ngModel)]="userPassword" required>

        <button type="submit" (click)="loginActive()">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
      </div>

      <div class="container" style="background-color:#f1f1f1">
        <button type="button" class="cancelbtn">Cancel</button>
        <span class="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  `
})
export class LoginComponent {
  @Input() userID:string
  @Input() userPassword:string
  @Output() loginEvent = new EventEmitter<string>()

  loginData = [
  {
    "id":"bangzino",
    "password":"thisispassword"
  },
  {
    "id":"nhandao",
    "password":"toikhongnho"
  },
  {
    "id":"haison",
    "password":"sonnao"
  }
  ]
  constructor(private router: Router){ 
  }
  ngOnInit(){
  }
  loginActive(){
    console.log(this.userID, this.userPassword)
    for (let i = 0; i<this.loginData.length; i++){
      if(this.userID == this.loginData[i].id && this.userPassword == this.loginData[i].password){
        this.router.navigate(['/table']);
      }else{

      }
    }
  }

}