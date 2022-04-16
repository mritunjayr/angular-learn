import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ProductDetailsComponent } from "./product-details.component";
import { CartComponent } from "../cart/cart.component";
import { ProductListComponent } from "../product-list/product-list.component";
import { ShippingComponent } from "../shipping/shipping.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AppRoutingModule } from "../app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ProductAlertsComponent } from "../product-alerts/product-alerts.component";

describe("ProductDetailsComponent", () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          ProductDetailsComponent,
          CartComponent,
          ProductListComponent,
          ProductDetailsComponent,
          ShippingComponent,
          ProductAlertsComponent,
        ],
        imports: [
          HttpClientTestingModule,
          AppRoutingModule,
          ReactiveFormsModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
