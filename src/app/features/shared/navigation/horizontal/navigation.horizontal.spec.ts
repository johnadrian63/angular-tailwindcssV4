import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavigationHorizontal } from "./navigation.horizontal"

describe("NavigationHorizontal", () => {
    let component: NavigationHorizontal;
    let fixture: ComponentFixture<NavigationHorizontal>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavigationHorizontal],
        }).compileComponents();

        fixture = TestBed.createComponent(NavigationHorizontal);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
