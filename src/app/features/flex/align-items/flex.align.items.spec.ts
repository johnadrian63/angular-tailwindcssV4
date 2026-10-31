import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexAlignItems } from "./flex.align.items";

describe("FlexAlignItems", () => {
    let component: FlexAlignItems;
    let fixture: ComponentFixture<FlexAlignItems>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexAlignItems],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexAlignItems);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
