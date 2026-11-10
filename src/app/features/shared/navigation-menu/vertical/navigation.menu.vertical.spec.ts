import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavigationVerticalMenu } from "./navigation.menu.vertical";

describe("NavigationVerticalMenu", () => {
    let component: NavigationVerticalMenu;
    let fixture: ComponentFixture<NavigationVerticalMenu>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavigationVerticalMenu],
        }).compileComponents();

        fixture = TestBed.createComponent(NavigationVerticalMenu);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
