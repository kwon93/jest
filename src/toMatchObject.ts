class TestObj {
  a: string;

  constructor(a: string) {
    this.a = a;
  }
}

export function obj(a: string) {
  return new TestObj(a);
}
