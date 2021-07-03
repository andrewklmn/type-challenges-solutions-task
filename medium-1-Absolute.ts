type NumberType = number | string | bigint;

type MakeStringType<T extends NumberType> = `${T}`;

type Absolute<T extends NumberType> = 
  MakeStringType<T> extends `-${infer P}` 
    ? MakeStringType<P> 
    : MakeStringType<T>;
