export interface ICoord {
  x: number;
  y: number;
  z?: number;
}

export interface ISize {
  width?: number;
  height?: number;
}

export interface IBoundary {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface ISvgEle {
  tag: string; // svg tag
  flag: boolean; // whether changing the upper case to lower case with -
  para: {
    [key: string]: string | number;
  };
}
