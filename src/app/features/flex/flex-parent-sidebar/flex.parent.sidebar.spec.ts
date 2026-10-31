import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexParentSidebar } from "./flex.parent.sidebar";

describe("FlexParentSidebar", () => {
    let component: FlexParentSidebar;
    let fixture: ComponentFixture<FlexParentSidebar>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexParentSidebar],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexParentSidebar);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
