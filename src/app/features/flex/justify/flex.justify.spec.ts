import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexJustify } from "./flex.justify";

describe("FlexJustify", () => {
    let component: FlexJustify;
    let fixture: ComponentFixture<FlexJustify>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexJustify],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexJustify);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
