import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialBottomSheet } from "./material.bottom.sheet";

describe("MaterialBottomSheet", () => {
    let component: MaterialBottomSheet;
    let fixture: ComponentFixture<MaterialBottomSheet>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialBottomSheet],
        }).compileComponents();

        fixture = TestBed.createComponent(MaterialBottomSheet);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
