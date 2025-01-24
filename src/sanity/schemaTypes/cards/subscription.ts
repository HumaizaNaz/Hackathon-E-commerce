export const subscription = {
    name: "subscription",
    title: "Subscription",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name: "features",
        title: "Features",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "isPopular",
        title: "Is Popular",
        type: "boolean",
      },
    ],
  }
  
  