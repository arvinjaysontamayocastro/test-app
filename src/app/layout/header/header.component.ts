import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PushNotifyService } from '../../services/push-notify.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
 constructor(private notify: PushNotifyService, private cdf: ChangeDetectorRef, private toastr: ToastrService) { }
  message = "";
  ngOnInit(): void {
    this.notify.getNotify().subscribe({
      next: (data: any) => {
        // this.message = data;
        this.toastr.success(data);
        console.log(typeof (data));
        this.cdf.detectChanges();
      }
    });
  }
}
