const subHistory = {
    columns: [
        {
            label: "Package ",
            field: "package",
            sort: "asc",
            width: 150
        },
        {
            label: "Start date",
            field: "startDate",
            sort: "asc",
            width: 200
        },
        {
            label: "End date",
            field: "endDate",
            sort: "asc",
            width: 200
        },
        {
            label: "Payment Status",
            field: "paymentStatus",
            sort: "asc",
            width: 100
        }
        // {
        //     label: "Make Payment",
        //     field: "makePayment",
        //     sort: "asc",
        //     width: 100
        // },
        // {
        //     label: "Invoice",
        //     field: "invoice",
        //     sort: "asc",
        //     width: 100
        // }
    ],
    rows: [
        {
            package: "Premium",
            startDate: "2020/01/15",
            endDate: "2021/01/15",
            paymentStatus: "Pending",
        },
        {
            package: "Professional",
            startDate: "2019/01/15",
            endDate: "2020/01/15",
            paymentStatus: "Paid"
        },
        {
            package: "Professional",
            startDate: "2018/01/11",
            endDate: "2019/01/11",
            paymentStatus: "Paid"
        },
        {
            package: "Basic",
            startDate: "2017/12/10",
            endDate: "2018/01/10",
            paymentStatus: "Demo"
        }
    ]
};

export default subHistory