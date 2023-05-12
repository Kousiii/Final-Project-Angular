import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { CollectionService } from 'src/app/services/collection.service';
import { MatTableDataSource } from '@angular/material/table';
import { UpdateformComponent } from '../updateform/updateform.component';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  arts:any;
  dataSource:any;
  element:any;
  editfunction={
    theme:"",name:"",artist:"",price:"",type:"",sizeinch:"",image:""
  }
  displayedColumns:string[]=['id','name','theme','artist','price','actions'];
  constructor(public dialog: MatDialog,public ps:CollectionService) { 
    this.ps.getCollections().subscribe(
      {
        next:(data:any)=>{
         this.arts=data
         this.dataSource=new MatTableDataSource(this.arts)},
         error:()=>this.arts=[]
       },
      )}

  openDialog1() {
    this.dialog.open(FormComponent);
  }
 id:number=0;
  edit(thisid:number,element:any)
  {
    this.id=thisid;
     this.editfunction=element;
  }
  update(){
    let data={
      theme: this.editfunction.theme,
      name: this.editfunction.name,
      artist: this.editfunction.artist,
      price: this.editfunction.price,
      type: this.editfunction.type,
      sizeinch: this.editfunction.sizeinch,
      image: this.editfunction.image
    }
    this.ps.updateArt(this.id,data).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  delete(element:any){
    this.ps.deleteArt(element.id).subscribe(
        (resp)=>{
          console.log(resp);
        },
        err=>
        {
          console.log(err);
        }
    );
  }
}

