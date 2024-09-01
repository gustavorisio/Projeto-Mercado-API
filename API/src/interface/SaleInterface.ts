interface ISaleRequest {
    id?: string;
    userId: string;
    productId: string;
    clientId: string;
    quantity: string;
}

export { ISaleRequest }