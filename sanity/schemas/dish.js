export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "proce of the Dish in IDR",
    },
    {
      name: "image",
      type: "image",
      title: "Image of Dish",
    },
  ],
};
