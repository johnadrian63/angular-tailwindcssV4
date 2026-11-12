
import { NavigationLink } from "./link/navigation.link";
import { NavigationText } from "./text/navigation.text";
import { NavigationExpand } from "./expand/navigation.expand";
import { NavigationMenuDropdown } from "./menu-dropdown/navigation.menu.dropdown";

export interface INavigationDisplayVisitor<T> {
    visitDropdown(component: NavigationMenuDropdown): T;
    visitLink(component: NavigationLink): T;
    visitText(component: NavigationText): T;
    visitExpand(component: NavigationExpand): T;
}

