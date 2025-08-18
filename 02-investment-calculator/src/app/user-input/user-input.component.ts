import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

import type { InvestmentInput } from "../investment-input.model";
import { InvestmentService } from "../investment.service";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  // Signals hold numeric values directly
  enteredInitialInvestment = signal(0);
  enteredAnnualInvestment = signal(0);
  enteredExpectedReturn = signal(5);
  enteredDuration = signal(10);

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    const payload: InvestmentInput = {
      initialInvestment: this.enteredInitialInvestment(),
      duration: this.enteredDuration(),
      expectedReturn: this.enteredExpectedReturn(),
      annualInvestment: this.enteredAnnualInvestment(),
    };
    this.investmentService.calculateInvestmentResults(payload);

    // Reset to defaults
    this.enteredInitialInvestment.set(0);
    this.enteredAnnualInvestment.set(0);
    this.enteredExpectedReturn.set(5);
    this.enteredDuration.set(10);
  }
}
