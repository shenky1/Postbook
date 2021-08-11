import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data.service';
@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent {

  public searchValue = new FormControl('');

  constructor(private dataService: DataService) { 
    this.searchValue.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      this.dataService.searchAndUpdatePosts(value);
    })
  }

}
