class ListProductService {
    async execute() {
        const product = [
            {
                name: "CADERNO",
                description: "100 FOLHAS",
                price: 40,
                categoryId: 1234,
            },
            {
                name: "LAPIS",
                description: "BRASFORT",
                price: 1,
                categoryId: 4321,
            }
        ];
        return product
    }
}
export { ListProductService };