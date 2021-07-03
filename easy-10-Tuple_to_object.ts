type TupleToObject<T extends readonly any[]> = T extends readonly string[] ? { [P in T[number]]: P } : never;
