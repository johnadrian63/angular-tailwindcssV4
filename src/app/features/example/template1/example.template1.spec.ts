import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExampleTemplate1 } from "./example.template1";

describe("ExampleTemplate1", () => {
    let component: ExampleTemplate1;
    let fixture: ComponentFixture<ExampleTemplate1>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleTemplate1],
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleTemplate1);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
