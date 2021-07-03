type AppendArgument<Fn, A> = Fn extends (...K: infer P) => any ?  ( ...K: [...P, A]) => ReturnType<Fn> : never;
