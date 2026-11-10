import { IMenuItem } from "../navigation.menu.model";

export const navigationMenuDataMock: IMenuItem[] = [
    {
        label: "animals",
        text: "Animals",
        children: [
            {
                label: "sea",
                text: "Sea",
                children: [
                    {
                        label: "fish",
                        text: "Fish",
                    },
                    {
                        label: "whale",
                        text: "Whale",
                        children: [
                            {
                                label: "orca",
                                text: "Orca",
                            },
                            {
                                label: "humpback",
                                text: "Humpback"
                            }
                        ]
                    },
                    {
                        label: "seal",
                        text: "Seal",
                    },
                ]
            },
            {
                label: "land",
                text: "Land",
                children: [
                    {
                        label: "dog",
                        text: "Dog",
                    },
                    {
                        label: "cat",
                        text: "Cat",
                    },
                ]
            },
            {
                label: "insects",
                text: "Insects",
                children: [
                    {
                        label: "mosquito",
                        text: "Mosquito",
                        children: [
                            {
                                label: "blackMosquito",
                                text: "Black Mosquito"
                            },
                            {
                                label: "grayMosquito",
                                text: "Gray Mosquito",
                                children: [
                                    {
                                        label: "blackGrayMosquito",
                                        text: "Black-gray Mosquito"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: "dragonfly",
                        text: "Dragonfly",
                        children: [
                            {
                                label: "blueDragonfly",
                                text: "Blue Dragonfly"
                            },
                            {
                                label: "redDragonfly",
                                text: "Red Dragonfly",
                                children: [
                                    {
                                        label: "redOrangeDragonFly",
                                        text: "Red-orange Dragonfly"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: "vehicles",
        text: "Vehicles",
        children: [
            {
                label: "cars",
                text: "Cars",
                children: [
                    {
                        label: "suzuki",
                        text: "Suzuki",
                    },
                    {
                        label: "bmw",
                        text: "BMW"
                    }
                ]
            },
            {
                label: "motorcycles",
                text: "Motorcycles",
                children: [
                    {
                        label: "honda",
                        text: "Honda",
                    },
                    {
                        label: "yamaha",
                        text: "Yamaha",
                        children: [
                            {
                                label: "aerox",
                                text: "Aerox"
                            },
                            {
                                label: "XSR900",
                                text: "XSR 900"
                            }
                        ]
                    },
                ]
            },
        ]
    },
    {
        label: "building",
        text: "Buildings",
    },
    {
        label: "plants",
        text: "Plants",
        children: [
            {
                label: "trees",
                text: "Trees"
            },
            {
                label: "vines",
                text: "Vines"
            }
        ]
    },
    {
        label: "Food",
        text: "Food",
    },
];
