import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Basis } from "./basis";

describe("Basis", () => {
    let component: Basis;
    let fixture: ComponentFixture<Basis>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Basis],
        }).compileComponents();

        fixture = TestBed.createComponent(Basis);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
