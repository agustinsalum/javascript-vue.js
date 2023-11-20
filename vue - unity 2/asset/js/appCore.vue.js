
export const appCore = {
    data: function () {
        return {
            message: 'Hello',
            order: {
                id: crypto.randomUUID(),
                status: true,
                date: new Date().toISOString().split('T')[0],
                name: '',
                amount: '',
                price: '',
            },
            orderList: [],
        };
    },


    methods: {
        order_handler: function () {
            console.log(this.order);
            let orderNew = this.order;
            this.orderList.push(orderNew);
            this.order = {
                id: crypto.randomUUID(),
                status: true,
                date: new Date().toISOString().split("T")[0],
                name: '',
                amount: '',
                price: '',
            };
            /* console.log(this.orderList); */

        }
    }
}