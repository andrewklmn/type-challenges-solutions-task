type First<T extends any[]> = [...T, never][0];
