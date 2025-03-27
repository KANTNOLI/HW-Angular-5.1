interface Cart {
    id: number;
    img: string;
    price: number;
    title: string;
    desc: string;
}

// пример, для чего отдельная папка с отдельным файлом
interface Carts {
    region: string;
    carts: Cart[];
}

export type { Cart, Carts }