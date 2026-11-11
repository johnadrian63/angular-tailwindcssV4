import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DesignPatterns } from "./design.patterns";

describe("DesignPatterns", () => {
    let component: DesignPatterns;
    let fixture: ComponentFixture<DesignPatterns>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DesignPatterns],
        }).compileComponents();

        fixture = TestBed.createComponent(DesignPatterns);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
