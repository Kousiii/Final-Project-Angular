import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  users:any;
  errors:string[]=[];
  lang:any= "english"
  languages:any=[
    {name:"English",value:"english"},
    {name:"Spanish",value:"spanish"},
    {name:"Portuguese",value:"portuguese"}
  ]
  
    
    changeLang():void{
       this.ts.use(this.lang)
    }
  constructor(private router:Router,private lo:LoginService,private ts:TranslateService){
    this.lo.getCredential().subscribe(
      {
        next:(data:any)=>this.users=data,
        error:()=>this.users=[]
      }
    )
    this.ts.use(this.lang)
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
    this.errors=[]
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
    }else{
      this.errors.push("Invalid credentials")
    }
  }
  type:any="user"
  register()
  {
    this.errors=[]
 if(this.email.length<3||this.email==""||this.password==undefined||this.password==""){
  this.errors.push("Enter atleast 3 character");
 }else{
  let obj={
    email:this.email,
    password:this.password,
    type: this.type
  }
  this.lo.postCredential(obj).subscribe({
    next: (obj:any)=>{
      alert("You are registered.Thank you..")
  
      this.email="",
      this.password=""
      
    },
    error: ()=>alert("There is a problem in registering!")
  }
  )
 }

  }


}
// this.errors = []
   
//     let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
//     
//     if(this.lname==undefined || this.lname.length<3)
//       this.errors.push("Password should be longer than 4 character")
//     if(this.email==undefined || !expr.test(this.email))
//       this.errors.push("Should be in email format")
//     

//       if(this.errors.length==0){