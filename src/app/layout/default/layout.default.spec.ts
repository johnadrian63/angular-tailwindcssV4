import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LayoutDefault } from "./layout.default";

describe("Default", () => {
    let component: LayoutDefault;
    let fixture: ComponentFixture<LayoutDefault>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LayoutDefault],
        }).compileComponents();

        fixture = TestBed.createComponent(LayoutDefault);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
