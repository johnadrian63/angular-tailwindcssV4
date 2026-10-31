import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexJustifyItems } from "./flex.justify.items";

describe("FlexJustifyItems", () => {
    let component: FlexJustifyItems;
    let fixture: ComponentFixture<FlexJustifyItems>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexJustifyItems],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexJustifyItems);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
