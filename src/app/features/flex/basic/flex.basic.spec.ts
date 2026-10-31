import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexBasic } from "./flex.basic";

describe("FlexBasic", () => {
    let component: FlexBasic;
    let fixture: ComponentFixture<FlexBasic>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexBasic],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexBasic);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
