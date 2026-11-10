import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialBottomSheetPanel } from "./material.bottom.sheet.panel";

describe("MaterialBottomSheetPanel", () => {
    let component: MaterialBottomSheetPanel;
    let fixture: ComponentFixture<MaterialBottomSheetPanel>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialBottomSheetPanel],
        }).compileComponents();

        fixture = TestBed.createComponent(MaterialBottomSheetPanel);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
