export const fetchInvoiceData = async (invoiceIds) => {
    const mockData = {
        1: {
            customerName: "Md. Nahid Hasan",
            phone: "01729164888",
            address: "Mirpur DOHS, R12 H1170",
            date: "15/08/2028",
            orderNo: "1273-1237",
            invoiceNo: "20120355",
            items: `
                <tr><td>অলসতার বিরুদ্ধে লড়াই</td><td>1</td><td>143 ৳</td></tr>
                <tr><td>বিজিক বুদ্ধির ৩০ উপায়</td><td>1</td><td>68 ৳</td></tr>
            `,
            totalPrice: "903",
            shipping: "58",
            paymentMethod: "বিকাশ",
            grandTotal: "961",
            paymentStatus: "Complete",
        },
        2: {
            customerName: "Jane Doe",
            phone: "01711112222",
            address: "Banani, Dhaka",
            date: "16/08/2028",
            orderNo: "1274-1238",
            invoiceNo: "20120356",
            items: `
                <tr><td>Book A</td><td>2</td><td>200 ৳</td></tr>
                <tr><td>Book B</td><td>1</td><td>150 ৳</td></tr>
            `,
            totalPrice: "350",
            shipping: "50",
            paymentMethod: "নগদ",
            grandTotal: "400",
            paymentStatus: "Complete",
        },
        3: {
            customerName: "John Smith",
            phone: "01733334444",
            address: "Gulshan, Dhaka",
            date: "17/08/2028",
            orderNo: "1275-1239",
            invoiceNo: "20120357",
            items: `
                <tr><td>Book C</td><td>1</td><td>100 ৳</td></tr>
            `,
            totalPrice: "100",
            shipping: "20",
            paymentMethod: "রকেট",
            grandTotal: "120",
            paymentStatus: "Pending",
        },
    };

    return invoiceIds.map((id) => mockData[id]);
};
