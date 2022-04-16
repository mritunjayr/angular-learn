import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { CartComponent } from "./cart.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { ProductListComponent } from "../product-list/product-list.component";
import { ProductDetailsComponent } from "../product-details/product-details.component";

import { ShippingComponent } from "../shipping/shipping.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { ProductAlertsComponent } from "../product-alerts/product-alerts.component";

describe("CartComponent", () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          CartComponent,
          ProductListComponent,
          ProductDetailsComponent,
          ShippingComponent,
          ProductAlertsComponent,
        ],
        imports: [
          HttpClientTestingModule,
          ReactiveFormsModule,
          RouterTestingModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
