type allowedItemType = string | number;

type allowedArrayType = allowedItemType[];

type Includes<T extends readonly any[], U> = 
  U extends T[number] ? (T extends allowedArrayType ? true : false) : false;
