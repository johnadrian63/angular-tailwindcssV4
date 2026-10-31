import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexChild } from "./flex.child";

describe("FlexParent", () => {
    let component: FlexChild;
    let fixture: ComponentFixture<FlexChild>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexChild],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexChild);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
