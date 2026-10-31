import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexChildSidebar } from "./flex.child.sidebar";

describe("FlexChildSidebar", () => {
    let component: FlexChildSidebar;
    let fixture: ComponentFixture<FlexChildSidebar>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexChildSidebar],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexChildSidebar);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
