import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgVcr } from "./ng.vcr";

describe("NgVcr", () => {
    let component: NgVcr;
    let fixture: ComponentFixture<NgVcr>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NgVcr],
        }).compileComponents();

        fixture = TestBed.createComponent(NgVcr);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
