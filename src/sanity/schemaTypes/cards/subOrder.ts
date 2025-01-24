// Update to Sanity Schema (schemas/order.js)
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "suborder",
  title: "Sub Order",
  type: "document",
  fields: [
    {
      name: "subscription",
      title: "Subscription",
      type: "reference",
      to: [{ type: "subscription" }],
    },
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
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "date",
      title: "Order Date",
      type: "datetime",
      options: { default: new Date().toISOString() },
    },
  ],
};