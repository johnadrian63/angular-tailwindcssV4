import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexGap } from "./flex.gap";

describe("FlexGap", () => {
    let component: FlexGap;
    let fixture: ComponentFixture<FlexGap>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexGap],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexGap);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
