import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MenuDynamic } from "./menu-dynamic";

describe("MenuDynamic", () => {
    let component: MenuDynamic;
    let fixture: ComponentFixture<MenuDynamic>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MenuDynamic],
        }).compileComponents();

        fixture = TestBed.createComponent(MenuDynamic);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
