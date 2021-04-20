import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaveDataService } from '../save-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails = []; /* USED FOR DECLARE SERVICE */

  // userData;
  //   constructor(private showUserDetails:SaveDataService, private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.queryParams.subscribe(params => {
  //     console.log(params);
  //     this.userData = params;
  //   })
  // }

  paramsname;
  username;
  constructor(
    private showUserDetails: SaveDataService,
    private router: Router,
    private showUserName: ActivatedRoute ) {
    this.showUserName.params.subscribe(dataFromRouter => {
      //console.log(dataFromRouter);
      this.paramsname = dataFromRouter['name'];
      let validUser = false;
      this.showUserDetails.details.forEach((userDetail) => {
        if (userDetail['username'] === this.paramsname) {
          this.username = userDetail['username']
          validUser = true;
          if (this.paramsname === "inbarajasekaran@dsrt.in") {
            this.userDetails = this.showUserDetails.details;
          } else if (this.paramsname !== "inbarajasekaran@dsrt.in") {
            console.log(userDetail)
            this.userDetails.push(userDetail);
          }
        }
      }
      )
      if (!validUser) {
        alert("No User Found..!");
        this.router.navigateByUrl("/");
      }
    })
  }

  ngOnInit(): void {

  }


}
