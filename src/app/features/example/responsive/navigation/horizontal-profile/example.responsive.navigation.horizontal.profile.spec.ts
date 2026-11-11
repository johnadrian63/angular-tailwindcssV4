import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExampleResponsiveNavigationHorizontalProfile } from "./example.responsive.navigation.horizontal.profile";

describe("ExampleResponsiveNavigationHorizontalMenu", () => {
    let component: ExampleResponsiveNavigationHorizontalProfile;
    let fixture: ComponentFixture<ExampleResponsiveNavigationHorizontalProfile>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleResponsiveNavigationHorizontalProfile],
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleResponsiveNavigationHorizontalProfile);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
