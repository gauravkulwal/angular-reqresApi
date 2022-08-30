import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public userService: UserService ,
              public router: Router) { }

  ngOnInit(): void {
  }

onUpdate(){
this.userService.updateUser(this.userService.form.value).subscribe((res: any) => {
  console.log(res)
  console.log(this.userService.form.value)
  
})
this.router.navigate(['/list']);

}

}
