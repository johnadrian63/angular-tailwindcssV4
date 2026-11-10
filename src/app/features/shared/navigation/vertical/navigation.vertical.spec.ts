import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavigationVertical } from "./navigation.vertical";

describe("NavigationVerticalMenu", () => {
    let component: NavigationVertical;
    let fixture: ComponentFixture<NavigationVertical>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavigationVertical],
        }).compileComponents();

        fixture = TestBed.createComponent(NavigationVertical);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
