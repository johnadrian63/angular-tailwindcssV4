import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GridFlow } from "./grid.flow";

describe("GridFlow", () => {
    let component: GridFlow;
    let fixture: ComponentFixture<GridFlow>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GridFlow],
        }).compileComponents();

        fixture = TestBed.createComponent(GridFlow);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
