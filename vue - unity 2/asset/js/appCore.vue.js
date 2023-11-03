const order = {
    id: crypto.randomUUID(),
    status: true,
    date: new Date().toISOString().split("T")[0],
    name: '',
    amount:'',
    price:'',
}

export const appCore = {
    data: () => ({
        message: 'Hello',
        order: order,
    }),
}