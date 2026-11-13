import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgVcrExampleTemplate } from "./ng.vcr.example.template";

describe("NgVcrExampleTemplate", () => {
    let component: NgVcrExampleTemplate;
    let fixture: ComponentFixture<NgVcrExampleTemplate>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NgVcrExampleTemplate],
        }).compileComponents();

        fixture = TestBed.createComponent(NgVcrExampleTemplate);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
