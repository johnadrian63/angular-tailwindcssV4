import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExampleResponsive } from "./example.responsive";

describe("ExampleResponsive", () => {
    let component: ExampleResponsive;
    let fixture: ComponentFixture<ExampleResponsive>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleResponsive],
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleResponsive);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
