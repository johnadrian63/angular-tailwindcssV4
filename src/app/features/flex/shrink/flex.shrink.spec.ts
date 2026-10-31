import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexShrink } from "./flex.shrink";

describe("FlexShrink", () => {
    let component: FlexShrink;
    let fixture: ComponentFixture<FlexShrink>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexShrink],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexShrink);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
