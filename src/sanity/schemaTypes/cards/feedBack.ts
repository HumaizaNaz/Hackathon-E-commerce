/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "feedback",
  title: "Feedback",
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
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
  ],
}
