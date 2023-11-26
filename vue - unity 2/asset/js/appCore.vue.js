
/* components in vue */
const allComponent = {
    template:
        `<p> id: {{id}}</p>
         <p> Name: {{ title }}</p > 
        `
    ,
    props: {
        title: String,
        id: Number,
    }

}


export const appCore = {
    data: function () {
        return {
            message: 'Hello',
            classInactive: "inactive",
            order: {
                id: crypto.randomUUID().slice(0, 14),
                status: true,
                date: new Date().toISOString().split('T')[0],
                name: '',
                amount: '',
                price: '',
            },
            orderList: [],
            cant_order: null,
            all: null,
        };
    },

    components: {
        all: allComponent,
    }
    ,


    methods: {
        fetchHandler: function () {
            fetch("https://jsonplaceholder.typicode.com/todos", {})
                .then(res => res.json())
                .then(data => this.all = data)
                .catch(err => console.log({ err }))
        },
        order_handler: function () {
            console.log(this.order);
            let orderNew = this.order;
            this.orderList.push(orderNew);
            this.order = {
                id: crypto.randomUUID().slice(0, 14),
                status: true,
                date: new Date().toISOString().split("T")[0],
                name: '',
                amount: '',
                price: '',
            };
            /* console.log(this.orderList); */

        },
        deleteHandler: function (id) {
            this.orderList = this.orderList.filter(
                (order) => order.id != id
            )
        }
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