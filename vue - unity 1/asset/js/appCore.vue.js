import users from "./users.json" assert {type: "json"};

export const appCore = {
    data: function () {
        return {
            message: 'Hello',
            name: 'Agustin',
            count: 0,
            display: true,
            style: "count",
            // https://jsonplaceholder.typicode.com/users
            users:users,
            msjModel: "",
            usersCant: 10,
            usersItems: users

        };
    },
}; 