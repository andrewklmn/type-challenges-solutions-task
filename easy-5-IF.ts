type If<C, T, F> = C extends true ? T: C extends null ? never : F;
