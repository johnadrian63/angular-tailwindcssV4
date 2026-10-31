import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexChildNav } from "./flex.child.nav";

describe("FlexChildNav", () => {
    let component: FlexChildNav;
    let fixture: ComponentFixture<FlexChildNav>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexChildNav],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexChildNav);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
