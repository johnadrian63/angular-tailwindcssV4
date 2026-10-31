import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexParent } from "./flex.parent";

describe("FlexParent", () => {
    let component: FlexParent;
    let fixture: ComponentFixture<FlexParent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexParent],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexParent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
