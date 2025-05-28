import { ChangeDetectorRef, Component } from '@angular/core';
  
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserIdentityService } from '../../services/userIdentity.service';
import { UserIdentity } from '../userIdentity';
import { PushNotifyService } from '../../services/push-notify.service';
import { ToastrService } from 'ngx-toastr';
import { FirstLettersPipe } from '../../helpers/firstLetters.pipe';
  
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule, FirstLettersPipe],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  
  userIdentities: UserIdentity[] = [];
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private notify: PushNotifyService, private cdf: ChangeDetectorRef, private toastr: ToastrService, public userIdentityService: UserIdentityService) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.updateList();
    
    this.notify.getNotify().subscribe({
      next: (data: any) => {
        this.updateList();
      }
    });
  }
      
  updateList(): void {
    this.userIdentityService.getAll().subscribe((data: UserIdentity[])=>{
      this.userIdentities = data;
      console.log(this.userIdentities);
    })  
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  // deleteUserIdentity(id:number){
  //   this.userIdentityService.delete(id).subscribe(res => {
  //        this.userIdentities = this.userIdentities.filter(item => item.id !== id);
  //        console.log('User identity deleted successfully!');
  //   })
  // }
  
}