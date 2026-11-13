import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialTemplatePortal } from "./material.template.portal";

describe("MaterialTemplatePortal", () => {
    let component: MaterialTemplatePortal;
    let fixture: ComponentFixture<MaterialTemplatePortal>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialTemplatePortal],
        }).compileComponents();

        fixture = TestBed.createComponent(MaterialTemplatePortal);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
