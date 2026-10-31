import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexParentNav } from "./flex.parent.nav";

describe("FlexParentSidebar", () => {
    let component: FlexParentNav;
    let fixture: ComponentFixture<FlexParentNav>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexParentNav],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexParentNav);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
