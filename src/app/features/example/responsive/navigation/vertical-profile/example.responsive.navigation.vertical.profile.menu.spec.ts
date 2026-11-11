import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExampleResponsiveNavigationVerticalProfileMenu } from "./example.responsive.navigation.vertical.profile.menu";

describe("ExampleResponsiveNavigationVerticalProfileMenu", () => {
    let component: ExampleResponsiveNavigationVerticalProfileMenu;
    let fixture: ComponentFixture<ExampleResponsiveNavigationVerticalProfileMenu>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleResponsiveNavigationVerticalProfileMenu],
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleResponsiveNavigationVerticalProfileMenu);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
