type ArrayItems = string | number | boolean;
type Concat<T extends Array<ArrayItems>, U extends Array<ArrayItems>> = [ ...T, ...U ]
