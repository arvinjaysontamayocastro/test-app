import { Component } from '@angular/core';
  
import { UserIdentityService } from '../../services/userIdentity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserIdentity } from '../userIdentity';
  
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  
  id!: number;
  userIdentity!: UserIdentity;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public userIdentityService: UserIdentityService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
          
    this.userIdentityService.find(this.id).subscribe((data: UserIdentity)=>{
      this.userIdentity = data;
    });
  }
  
}