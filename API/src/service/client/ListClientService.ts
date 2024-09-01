class ListClientService {
    async execute() {
        const client = [
            {
                name: "Gustavo",
                description: "Client",
                cpf: 1010101010,
                address: "AVENIDA",
                fone: 119901010101,
            },
            {
                name: "Fabio",
                description: "Client",
                cpf: 202020202020,
                address: "AVENIDA",
                fone: 119902020201,
            }
        ];
        return client
    }
}
export { ListClientService };