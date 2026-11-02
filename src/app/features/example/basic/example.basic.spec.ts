import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExampleBasic } from "./example.basic";

describe("ExampleBasic", () => {
    let component: ExampleBasic;
    let fixture: ComponentFixture<ExampleBasic>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExampleBasic],
        }).compileComponents();

        fixture = TestBed.createComponent(ExampleBasic);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
