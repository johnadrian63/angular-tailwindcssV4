import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexGrow } from "./flex.grow";

describe("FlexGrow", () => {
    let component: FlexGrow;
    let fixture: ComponentFixture<FlexGrow>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlexGrow],
        }).compileComponents();

        fixture = TestBed.createComponent(FlexGrow);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
