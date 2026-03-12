interface PrintBoxOptions {
    borderColor?: "cyan" | "red" | "green" | "yellow" | "blue" | "magenta";
    title?: string;
}
export declare function printBox(lines: string[], options?: PrintBoxOptions): void;
export declare function spinner(msg: string): () => void;
export {};
