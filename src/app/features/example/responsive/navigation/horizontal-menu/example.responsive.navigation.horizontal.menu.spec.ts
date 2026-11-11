import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExampleResponsiveNavigationHorizontalMenu } from "./example.responsive.navigation.horizontal.menu"

describe("ExampleResponsiveNavigationHorizontalMenu", () => {
    let component: ExampleResponsiveNavigationHorizontalMenu;
    let fixture: ComponentFixture<ExampleResponsiveNavigationHorizontalMenu>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleResponsiveNavigationHorizontalMenu],
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleResponsiveNavigationHorizontalMenu);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
