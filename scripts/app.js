document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.getElementById("download-btn");

    // Mock data for invoices
    const invoices = {
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

    // Function to generate invoice HTML
    const generateInvoiceHTML = (invoiceData) => `
        <div class="invoice">
            <header class="header">
                <div class="left">
                    <p><strong>Billing:</strong></p>
                    <p>${invoiceData.customerName}</p>
                    <p>${invoiceData.phone}</p>
                    <p>${invoiceData.address}</p>
                </div>
                <div class="center">
                    <img src="https://www.teqfie.com/_next/static/media/logo.dfd43b78.svg" alt="Teqfie">
                    <p>+8801729164855</p>
                    <p>info@swiftwpservices.com</p>
                </div>
                <div class="right">
                    <p>Date: ${invoiceData.date}</p>
                    <p>Order No: ${invoiceData.orderNo}</p>
                    <p>Invoice No: ${invoiceData.invoiceNo}</p>
                </div>
            </header>

            <div class="invoice-body">
                <table id="item-table">
                    <thead>
                        <tr>
                            <th>পণ্য</th>
                            <th>পরিমাণ</th>
                            <th>মূল্য</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${invoiceData.items}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2">মোট মূল্য</td>
                            <td>${invoiceData.totalPrice} ৳</td>
                        </tr>
                        <tr>
                            <td colspan="2">শিপিং</td>
                            <td>${invoiceData.shipping} ৳</td>
                        </tr>
                        <tr>
                            <td colspan="2">পেমেন্ট মেথড</td>
                            <td>${invoiceData.paymentMethod}</td>
                        </tr>
                        <tr>
                            <td colspan="2">সর্বমোট</td>
                            <td>${invoiceData.grandTotal} ৳</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <footer>
                <p class="notes">Payment Status: <span>${invoiceData.paymentStatus}</span></p>
                <p>Thank you for choosing us!</p>
                <p>www.teqfie.com</p>
            </footer>
        </div>
    `;

    // Handle button click
    downloadBtn.addEventListener("click", () => {
        const selectedIds = Array.from(
            document.querySelectorAll("#invoice-selector input:checked")
        ).map((input) => input.value);

        if (!selectedIds.length) {
            alert("Please select at least one invoice.");
            return;
        }

        const selectedInvoices = selectedIds.map((id) => generateInvoiceHTML(invoices[id]));

        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
        <html>
            <head>
                <link rel="stylesheet" href="styles/invoice-a4.css">
                <style>
                    @media print {
                        .print-btn {
                            display: none;
                        }
                        .invoice {
                            page-break-after: always;
                        }
                        .invoice:last-child {
                            page-break-after: auto;
                        }
                    }
                </style>
            </head>
            <body>
                <button class="print-btn" onclick="window.print()" style="margin: 20px; padding: 10px;">Print Invoices</button>
                ${selectedInvoices.join("")}
            </body>
        </html>
    `);
        newWindow.document.close();
    });

});
