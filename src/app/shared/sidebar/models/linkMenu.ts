
export interface ILinkMenu {
  id: number;
  path : string;
  title : string,
  color : string,
  isOpen :boolean,
  chapter : IsubMenu[],
}

export interface IsubMenu {
  path : string;
  title : string,
  color : string,
}
