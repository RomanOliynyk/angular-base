export class LikeComponent {
  private selected: boolean = false;

  constructor(private _x?: number, private _y?: number) {
    this._x = _x || 6;
    this._y = _y || 7;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0) {
      throw new Error();
    }
    this._x = value;
  }

  draw(): number {
    console.log('draw function');
    return this._x;
  };
}
