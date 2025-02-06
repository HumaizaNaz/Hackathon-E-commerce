/* eslint-disable import/no-anonymous-default-export */
export default {
    name: "voucher",
    title: "Voucher",
    type: "document",
    fields: [
      {
        name: "code",
        title: "Voucher Code",
        type: "string",
      },
      {
        name: "discount",
        title: "Discount Amount",
        type: "number",
      },
      {
        name: "expiryDate",
        title: "Expiry Date",
        type: "datetime",
      },
    ],
  }
  
  