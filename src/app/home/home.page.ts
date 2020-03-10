import { Component } from "@angular/core";
import { EmailComposer } from "@ionic-enterprise/email-composer/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public available: string;

  constructor(private email: EmailComposer) {}

  public async isAvailable(): Promise<void> {
    try {
      await this.email.isAvailable();
      this.available = "Available";
    } catch (e) {
      this.available = "Not available";
    }
  }
}
