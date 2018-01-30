import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filtersList: any[];
  isAllFiltersShown: boolean;
  textContent: string;
  constructor() {
    this.isAllFiltersShown = false;
    this.filtersList = ["first", "second", "third", "longestFilterMaybeThis", "Last One"];
    this.textContent = "More";
  }

  ngOnInit() {

  }

  toggleFilters() {
    this.isAllFiltersShown = !this.isAllFiltersShown;

    if (this.isAllFiltersShown)
      this.textContent = "Less"
    else
      this.textContent = "More"
  }

}
