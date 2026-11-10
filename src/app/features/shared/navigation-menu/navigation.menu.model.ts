export interface IMenuItem {
    label: string;
    text: string;
    children?: IMenuItem[];
}

export interface IMenu {
    parent?: IMenuItem;
    children: IMenuItem[];
}
