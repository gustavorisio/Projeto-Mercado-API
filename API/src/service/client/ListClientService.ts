class ListClientService {
    async execute() {
        const client = [
            {
                name: "Gustavo",
                description: "Client",
                cpf: 1010101010,
                address: "AVENIDA",
                fone: 119901010101,
            }
        ];
        return client
    }
}
export { ListClientService };