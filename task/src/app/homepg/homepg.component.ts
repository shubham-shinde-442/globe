import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jsonData from '../../assets/data.json';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-homepg',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './homepg.component.html',
  styleUrls: ['./homepg.component.css']
})

export class HomepgComponent implements OnInit {
  data = jsonData;
  filteredData = jsonData;
  searchTerm: string = '';
  selectedRegion: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filterData();
  }

  trackByUserId(index: number, data: any): number {
    return data.alpha3Code;
  }

  filterData(): void {
    this.filteredData = this.data.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedRegion ? user.region === this.selectedRegion : true)
    );
  }

  filterByRegion(region: string): void {
    this.selectedRegion = region;
    this.filterData();
  }

  viewDetails(alpha3Code: string): void {
    this.router.navigate(['/country', alpha3Code]);
  }
}
