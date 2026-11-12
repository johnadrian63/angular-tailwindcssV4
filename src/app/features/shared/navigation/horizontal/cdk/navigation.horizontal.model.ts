import { INavigationDisplayVisitor } from "../../display/navigation.display.model";
import { NavigationHorizontalCdkDropdown } from "./dropdown/navigation.horizontal.cdk.dropdown";

export interface INavigationHorizontalDisplayVisitor<T> extends INavigationDisplayVisitor<T> {
    visitDropdownCdk(component: NavigationHorizontalCdkDropdown): T;
}
