import { NavigationHorizontalCdkDisplayHandlerVisitor, NavigationHorizontalCdkDropdownDisplayHandler } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.display.handler";

export class ExampleResponsiveNavigationHorizontalMenuDisplayHandlerVisitor extends NavigationHorizontalCdkDisplayHandlerVisitor {
    public override visitCdkDropdown(handler: NavigationHorizontalCdkDropdownDisplayHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.menuClass = "mt-2.5";

        componentRef.changeDetectorRef.detectChanges();
    }
}