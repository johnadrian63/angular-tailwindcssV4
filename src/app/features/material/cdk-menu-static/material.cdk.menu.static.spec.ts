import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialCdkMenuStatic } from "./material.cdk.menu.static";

describe("MaterialCdkMenuStatic", () => {
    let component: MaterialCdkMenuStatic;
    let fixture: ComponentFixture<MaterialCdkMenuStatic>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialCdkMenuStatic],
        }).compileComponents();

        fixture = TestBed.createComponent(MaterialCdkMenuStatic);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
