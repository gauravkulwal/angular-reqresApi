import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
idValue: any;
userData:  any;
  constructor(public activatedRouter : ActivatedRoute,
              public userService: UserService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((res: any) => {
      console.log(res.id);
      this.idValue= res.id;
    })
    this.userService.viewUser(this.idValue).subscribe((res: any) => {
     this.userData= res.data
    })
  }

}
