import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import jsonData from "../../assets/data.json";

@Component({
  selector: "app-country-details",
  standalone: true,
  imports: [],
  templateUrl: "./country-details.component.html",
  styleUrl: "./country-details.component.css",
})

export class CountryDetailsComponent implements OnInit {
  country: any;
  countryList: { [key: string]: string } = {};

  constructor(private route: ActivatedRoute, private router: Router) {}
    ngOnInit(): void {
    const alpha3Code = this.route.snapshot.paramMap.get("alpha3Code");
    this.country = jsonData.find(
      (country: any) => country.alpha3Code === alpha3Code
    );

    this.countryList = jsonData.reduce((acc: any, country: any) => {
      acc[country.alpha3Code] = country.name;
      return acc;
    }, {});
  }

  getCurrencies(): string {
    if (this.country && this.country.currencies) {
      return this.country.currencies.map((curr: any) => curr.name).join(", ");
    }
    return "";
  }

  getBoundaries(): string {
    if (
      this.country &&
      this.country.borders &&
      this.country.borders.length > 0
    ) {
      const borderNames = this.country.borders.map(
        (code: string) => this.countryList[code] || code
      );
      return borderNames.length > 0 ? borderNames.join(", ") : "Not available";
    }
    return "Not available";
  }

  getLanguages(): string {
    if (this.country && this.country.languages) {
      return this.country.languages.map((lang: any) => lang.name).join(", ");
    }
    return "";
  }

  goback(): void {
    this.router.navigate(["/"]);
  }
}
