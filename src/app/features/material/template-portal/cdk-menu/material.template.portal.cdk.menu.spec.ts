import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialTemplatePortalCdkMenu } from "./material.template.portal.cdk.menu";

describe("MaterialTemplatePortalCdkMenu", () => {
    let component: MaterialTemplatePortalCdkMenu;
    let fixture: ComponentFixture<MaterialTemplatePortalCdkMenu>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialTemplatePortalCdkMenu],
        }).compileComponents();

        fixture = TestBed.createComponent(MaterialTemplatePortalCdkMenu);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
