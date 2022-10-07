export interface IInfiniteSmooth {
    data: object[];
    isRight?: boolean;
    time?: number;
    countItemInScreen: number;
    speadMove?: number;
    marginHorizontalItems: number;
    UiItem: ({ item, index }: any) => JSX.Element;
}