import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexSelfAlign } from "./flex.self.align";

describe("FlexSelfAlign", () => {
    let component: FlexSelfAlign;
    let fixture: ComponentFixture<FlexSelfAlign>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexSelfAlign],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexSelfAlign);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
