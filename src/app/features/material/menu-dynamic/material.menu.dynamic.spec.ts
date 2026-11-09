import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialMenuDynamic } from "./material.menu.dynamic";

describe("MaterialMenuDynamic", () => {
    let component: MaterialMenuDynamic;
    let fixture: ComponentFixture<MaterialMenuDynamic>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialMenuDynamic],
        }).compileComponents();

        fixture = TestBed.createComponent(MaterialMenuDynamic);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
