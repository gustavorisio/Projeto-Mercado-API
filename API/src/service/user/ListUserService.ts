
class ListUsersService {
    async execute() {
        const users = [
            {
                name: "Gustavo",
                email: "gustavo@umc.com",
                admin: false,
                password: "1234",
            },
            {
                name: "UMC",
                email: "umc@umc.com",
                admin: false,
                password: "1234",
            }
        ];
        return users
    }
}
export { ListUsersService };