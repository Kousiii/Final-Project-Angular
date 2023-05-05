import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  users:any;
  constructor(private router:Router,private lo:LoginService){
    this.lo.getCredential().subscribe(
      {
        next:(data:any)=>this.users=data,
        error:()=>this.users=[]
      }
    )
  }

  
  log:boolean=true;
  reg:boolean=false
  signin(){
    this.log=true;
    this.reg=false;
  }
  signup(){
    this.log=false;
    this.reg=true;
  }
  admin()
  {
    this.router.navigate(['admin'])
  }
  user()
  {
    console.log("user")
    this.router.navigate(['user'])
  }
  email:string="";
  password:any="";
loginstatus:boolean=false;
usertype:any;
  login()
  {
    for(let user of this.users){
      if(user.email==this.email&&user.password==this.password){
        this.usertype=user.type;
        this.loginstatus=true;
      }
    }

    if(this.loginstatus==true){
      if(this.usertype=="user"){
        this.router.navigate(['user'])
      }else{
        this.router.navigate(['admin'])
      }
    }
  }
  type:any="user"
  register()
  {
 let obj={
  email:this.email,
  password:this.password,
  type: this.type
}
this.lo.postCredential(obj).subscribe({
  next: (obj:any)=>{
    alert("You review is posted.Thank you..")

    this.email="",
    this.password=""
    
  },
  error: ()=>alert("There is a problem posting your review!")
}
)

  }


}
// <div class="example-form">
//         <table id="log-table">
//             <tr>
//                 <th>Email</th>
//                 <td><input type="text" [(ngModel)]="email"></td>
//             </tr>
//             <tr>
//                 <th>Password</th>
//                 <td><input type="password" [(ngModel)]="password"></td>
//             </tr>
//             <tr>
                
//                 <td colspan=2 
//                     style="text-align:center"><button  (click)="login()">Login</button></td>
//             </tr>
//             <!-- <tr>
                
//                 <td colspan=2 
//                     style="text-align:right; color: rgb(7, 8, 7)" (click)="toggle()">Not Registered yet? Click here</td>
//             </tr> -->
//        </table>
//        <div class="loading" *ngIf="status"></div>
//        <div class="errors">{{error}}</div>
       
//    </div>


//    <!-- <div class="example-form" *ngIf="!logform">
       
//            <table id="log-table">
//                 <tr>
//                     <th>Username</th>
//                     <td><input type="text" [(ngModel)]="rusername"></td>
//                 </tr>
//                 <tr>
//                     <th>Password</th>
//                     <td><input type="password" [(ngModel)]="rpassword"></td>
//                 </tr>

//                 <tr>
//                    <th>Verify Password</th>
//                    <td><input type="password" [(ngModel)]="vpassword"></td>
//                </tr>

//                <tr>
//                    <th>Email</th>
//                    <td> <input type="text" [(ngModel)]="remail"></td>
//                </tr>
//                 <tr>
                    
//                     <td colspan=2 
//                         style="text-align:center"><button (click)="register()">Register</button></td>
//                 </tr>
//                 <tr>
                    
//                     <td colspan=2 
//                         style="text-align:right; color: rgb(7, 7, 7)" (click)="toggle()">Not Registered yet? Click here</td>
//                 </tr>
//            </table>
//            <div class="loading" *ngIf="status"></div>
//            <div class="errors">{{rerror}}</div>
//     </div> -->
