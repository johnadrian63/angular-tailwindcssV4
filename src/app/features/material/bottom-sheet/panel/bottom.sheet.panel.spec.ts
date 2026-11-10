import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BottomSheetPanel } from "./bottom.sheet.panel";

describe("BottomSheetPanel", () => {
    let component: BottomSheetPanel;
    let fixture: ComponentFixture<BottomSheetPanel>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BottomSheetPanel],
        }).compileComponents();

        fixture = TestBed.createComponent(BottomSheetPanel);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
