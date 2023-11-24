
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
            cant_order: null,
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

        },
    },

    /* https://vuejs.org/guide/essentials/computed.html */
    computed: {
        order_quantity_list() {
            return this.orderList.length;
        },
    },
    watch: {
        order_quantity_list: {
            handler: function (init, final) {
                this.cant_order = this.orderList.length;
            },
            deep: true,
        },
    },
};