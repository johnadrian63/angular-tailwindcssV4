import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExampleResponsiveNavigationVerticalMenu } from "./example.responsive.navigation.vertical.menu";

describe("ExampleResponsiveNavigationVerticalMenu", () => {
    let component: ExampleResponsiveNavigationVerticalMenu;
    let fixture: ComponentFixture<ExampleResponsiveNavigationVerticalMenu>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleResponsiveNavigationVerticalMenu],
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleResponsiveNavigationVerticalMenu);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
