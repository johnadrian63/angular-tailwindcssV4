import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialCdkMenuDynamic } from "./material.cdk.menu.dynamic";

describe("MaterialCdkMenuDynamic", () => {
    let component: MaterialCdkMenuDynamic;
    let fixture: ComponentFixture<MaterialCdkMenuDynamic>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialCdkMenuDynamic],
        }).compileComponents();

        fixture = TestBed.createComponent(MaterialCdkMenuDynamic);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
