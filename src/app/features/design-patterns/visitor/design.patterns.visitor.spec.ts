import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DesignPatternsVisitor } from "./design.patterns.visitor";

describe("DesignPatternsVisitor", () => {
    let component: DesignPatternsVisitor;
    let fixture: ComponentFixture<DesignPatternsVisitor>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DesignPatternsVisitor],
        }).compileComponents();

        fixture = TestBed.createComponent(DesignPatternsVisitor);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
