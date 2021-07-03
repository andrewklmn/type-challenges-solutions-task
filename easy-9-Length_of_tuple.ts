type Length<T extends unknown> = T extends readonly string[] ? T['length'] : never;
