import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexAlign } from "./flex.align";

describe("FlexAlign", () => {
    let component: FlexAlign;
    let fixture: ComponentFixture<FlexAlign>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexAlign],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexAlign);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
