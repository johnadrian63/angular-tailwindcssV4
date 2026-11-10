export interface IVerticalMenuItem {
    label: string;
    text: string;
    children?: IVerticalMenuItem[];
}

export interface IVerticalMenu {
    parent?: IVerticalMenuItem;
    children: IVerticalMenuItem[];
}