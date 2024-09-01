class ListSaleService {
    async execute() {
        const sale = [
            {
                userId: 10,
                productId: 123,
                clientId: 1,
                quantity: 1,
            },
            {
                userId: 20,
                productId: 456,
                clientId: 2,
                quantity: 2,
            }
        ];
        return sale
    }
}
export { ListSaleService };