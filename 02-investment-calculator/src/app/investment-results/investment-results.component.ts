import { CurrencyPipe } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { InvestmentService } from "../investment.service";

@Component({
  selector: "app-investment-results",
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css",
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);
  //constructor(private investmentService: InvestmentService) {}

  results = computed(() => this.investmentService.resultData());

  // get results() {
  //   return this.investmentService.resultData;
  //   //console.log(resultData)
  // }

}
