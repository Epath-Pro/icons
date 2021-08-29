import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  icons: any = [];
  date: any = new Date();
  constructor(private iconsService: IconsService, private datePipe: DatePipe) {
    this.date = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    // console.log('this.date', this.date);
  }

  ngOnInit(): void {
    this.getIconsData();
  }

  getIconsData() {
    this.iconsService.getIcons().subscribe(
      (data: any) => {
        // console.log('data', data);
        if (data.status === 'success') {
          const icons: any = data.icons;
          Object.keys(icons).forEach((icon) => {
            // console.log(icons[icon]);
            icons[icon].created = this.datePipe.transform(
              icons[icon].created,
              'yyyy-MM-dd'
            );
            this.icons.push(icons[icon]);
          });
          // console.log('this.icons', this.icons);
        }
      },
      (err: any) => {
        console.log('err', err);
      }
    );
  }
}
