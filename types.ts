
export interface Character {
  id: number;
  name: string;
  imageUrl: string;
  attributes: {
    spd: number;
    dex: number;
    att: number;
    chr: number;
  };
  price: number;
}
