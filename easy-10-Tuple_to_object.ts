type TupleToObject<T extends readonly string[]> = { [V in T[number]]: V }
