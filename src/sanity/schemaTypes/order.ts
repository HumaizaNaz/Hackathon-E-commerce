// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", type: "string" },
            { name: "name", type: "string" },
            { name: "price", type: "number" },
            { name: "quantity", type: "number" },
            { name: "image", type: "string" },
          ],
        },
      ],
    },
    {
      name: "total",
      title: "Total",
      type: "number",
    },
    {
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
    },
    {
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
    },
    {
      name: "paymentAmount",
      title: "Payment Amount",
      type: "number",
    },
    {
      name: "paymentId",
      title: "Payment ID",
      type: "string",
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
    },
    {
      name: "trackingNumber",
      title: "Tracking Number",
      type: "string",
    },
  ],
}

