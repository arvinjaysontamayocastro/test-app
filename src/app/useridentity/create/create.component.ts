import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { UserIdentityService } from '../../services/userIdentity.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public userIdentityService: UserIdentityService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      sourceSystem: new FormControl('', Validators.required),
      isActive: new FormControl(false, Validators.required)
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
    this.userIdentityService.create(this.form.value).subscribe((res:any) => {
         console.log('User Identity created successfully!');
         this.router.navigateByUrl('useridentity/index');
    })
  }
  
}