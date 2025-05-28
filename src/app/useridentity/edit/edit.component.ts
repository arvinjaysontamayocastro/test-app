import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { UserIdentityService } from '../../services/userIdentity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserIdentity, UserIdentityActivate } from '../userIdentity';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PushNotifyService } from '../../services/push-notify.service';
  
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  
  id!: number;
  userIdentity!: UserIdentity;
  userIdentityActivate!: UserIdentityActivate;
  form!: FormGroup;
  isRefreshAsk: boolean = false;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public userIdentityService: UserIdentityService,
    private route: ActivatedRoute,
    private router: Router,
    private notify: PushNotifyService, private cdf: ChangeDetectorRef, private toastr: ToastrService
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
        
    this.form = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      sourceSystem: new FormControl('', Validators.required),
      isActive: new FormControl(false),
      id: new FormControl('')
    });

    this.loadEntry();

    this.notify.getNotify().subscribe({
      next: (data: any) => {
        console.log("data");
        console.log(data);
        if(data.indexOf("Entry updated: " + this.id + " ") != -1) {
          this.isRefreshAsk = true;
        }
      }
    });
  }

  refresh(): void {
    this.isRefreshAsk = false;
    this.loadEntry();
  }
  continueediting(): void {
    this.isRefreshAsk = false;
  }

  loadEntry(): void {
    this.userIdentityService.find(this.id).subscribe((data: UserIdentity)=>{
      this.userIdentity = data;
      console.log(data);
      this.form.controls['id'].setValue(data.id);
    }); 
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.userIdentityService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('User identity updated successfully!');
         this.router.navigateByUrl('useridentity/index');
    })
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  activate(){
    this.form.controls['isActive'].setValue(!this.form.controls['isActive'].getRawValue());
    this.userIdentityActivate = {
      id: this.form.controls['id'].getRawValue(),
      isActive: this.form.controls['isActive'].getRawValue(),
    };
    this.userIdentityService.setActive(this.id, this.userIdentityActivate).subscribe((res:any) => {
         console.log('User identity patched successfully!');
        //  this.router.navigateByUrl('useridentity/index');
    })
  }
  
}