import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
//userData: any =[];
pageNo = 1;
  constructor(public userService: UserService,
              public router: Router) { }

  ngOnInit(): void {
    this.getUserData(this.pageNo)
  }
getUserData(page: any){
  this.userService.getUser(page).subscribe((data: any) => {
    console.log(data);
    this.userService.userData = data.data;
    
  })
}
decrement(){
  if(this.pageNo > 1){
    this.pageNo  = this.pageNo-1
  }
  else{
    this.pageNo = 1;
  }
  this.getUserData(this.pageNo)
}
increment(){
  this.pageNo = this.pageNo +1;
  this.getUserData(this.pageNo)
}
delete(id: any){
this.userService.deleteUser(id).subscribe((res: any) => {
  this.userService.userData = this.userService.userData.filter((value: any) => value.id !== id);
})
}
edit(item: any){
  this.router.navigate(['/add']);
  console.log(item);
  this.userService.form = new FormGroup({
    id: new FormControl(item.id),
    avatar: new FormControl(item.avatar),
    first_name: new FormControl(item.first_name),
    last_name: new FormControl(item.last_name)
  })
}
view(item : any){
  
this.router.navigate(['/view/' , item.id])
}
}
