const data = [
  // Space
  {
    _id: "#House",
    root_prime_id: "top",
    title: "House",
    node_type: "prime",
    node_kind: "space",
    children_list: [
      {
        _id: "#House.1",
        title: "Users",
        node_type: "native",
        node_kind: "section",
      },

      {
        _id: "#House.2",
        title: "Tags",
        node_type: "native",
        node_kind: "section",
      },

      {
        _id: "#House.3",
        title: "Templates",
        node_type: "native",
        node_kind: "section",
      },
      { _id: "#House.3.1", prime_id: "#Person", node_type: "reference" },
      { _id: "#House.3.2", prime_id: "#Shape", node_type: "reference" },

      {
        _id: "#House.4",
        title: "Properties",
        node_type: "native",
        node_kind: "section",
      },
      { _id: "#House.4.1", prime_id: "#Size", node_type: "reference" },
      { _id: "#House.4.2", prime_id: "#Is_Female", node_type: "reference" },
      { _id: "#House.4.3", prime_id: "#Colors", node_type: "reference" },
      { _id: "#House.4.4", prime_id: "#Belongings", node_type: "reference" },

      {
        _id: "#House.5",
        title: "Options",
        node_type: "native",
        node_kind: "section",
      },
      { _id: "#House.5.1", prime_id: "#Black", node_type: "reference" },
      { _id: "#House.5.2", prime_id: "#Grey", node_type: "reference" },
      { _id: "#House.5.3", prime_id: "#White", node_type: "reference" },
      { _id: "#House.5.4", prime_id: "#Red", node_type: "reference" },
      { _id: "#House.5.5", prime_id: "#Orange", node_type: "reference" },
      { _id: "#House.5.6", prime_id: "#Brown", node_type: "reference" },
      { _id: "#House.5.7", prime_id: "#Yellow", node_type: "reference" },
      { _id: "#House.5.8", prime_id: "#Green", node_type: "reference" },
      { _id: "#House.5.9", prime_id: "#Blue", node_type: "reference" },
      { _id: "#House.5.10", prime_id: "#Purple", node_type: "reference" },
      { _id: "#House.5.11", prime_id: "#Pink", node_type: "reference" },

      {
        _id: "#House.6",
        title: "Documents",
        node_type: "native",
        node_kind: "section",
      },
      { _id: "#House.6.1", prime_id: "#Rooms", node_type: "reference" },
      { _id: "#House.6.2", prime_id: "#Residents", node_type: "reference" },

      {
        _id: "#House.7",
        title: "Queries",
        node_type: "native",
        node_kind: "section",
      },
      { _id: "#House.7.1", prime_id: "#All_BDoc", node_type: "reference" },
      { _id: "#House.7.2", prime_id: "#All_Doc", node_type: "reference" },
      { _id: "#House.7.3", prime_id: "#All_Ite", node_type: "reference" },

      {
        _id: "#House.8",
        title: "Recycle Bin",
        node_type: "native",
        node_kind: "section",
      },
    ],
  },

  // Templates ------------
  {
    _id: "#Person",
    root_prime_id: "#House",
    title: "Person",
    node_type: "prime",
    node_kind: "template",
    children_list: [
      {
        _id: "#Person.1",
        title: "Biography",
        node_type: "native",
        node_kind: "paragraph",
      },
    ],
    user_property_list: [
      { key_id: "#Size", value_list: [] },
      { key_id: "#Is_Female", value_list: [] },
      { key_id: "#Belongings", value_list: [] },
    ],
  },
  {
    _id: "#Shape",
    root_prime_id: "#House",
    title: "Shape",
    node_type: "prime",
    node_kind: "template",
    user_property_list: [
      { key_id: "#Size", value_list: [] },
      { key_id: "#Colors", value_list: [] },
    ],
  },

  // User Properties ------------
  {
    _id: "#Size",
    root_prime_id: "#House",
    title: "Size",
    node_type: "prime",
    node_kind: "user property",
  },
  {
    _id: "#Is_Female",
    root_prime_id: "#House",
    title: "Is Female",
    node_type: "prime",
    node_kind: "user property",
  },
  {
    _id: "#Colors",
    root_prime_id: "#House",
    title: "Colors",
    node_type: "prime",
    node_kind: "user property",
  },
  {
    _id: "#Belongings",
    root_prime_id: "#House",
    title: "Belongings",
    node_type: "prime",
    node_kind: "user property",
  },

  // User Property Options ------------
  {
    _id: "#Black",
    root_prime_id: "#House",
    title: "Black",
    node_type: "prime",
    node_kind: "user property option",
  },
  {
    _id: "#Grey",
    root_prime_id: "#House",
    title: "Grey",
    node_type: "prime",
    node_kind: "user property option",
  },
  {
    _id: "#White",
    root_prime_id: "#House",
    title: "White",
    node_type: "prime",
    node_kind: "user property option",
  },
  {
    _id: "#Red",
    root_prime_id: "#House",
    title: "Red",
    node_type: "prime",
    node_kind: "user property option",
  },
  {
    _id: "#Orange",
    root_prime_id: "#House",
    title: "Orange",
    node_type: "prime",
    node_kind: "user property option",
  },
  {
    _id: "#Brown",
    root_prime_id: "#House",
    title: "Brown",
    node_type: "prime",
    node_kind: "user property option",
  },
  {
    _id: "#Yellow",
    root_prime_id: "#House",
    title: "Yellow",
    node_type: "prime",
    node_kind: "user property option",
  },
  {
    _id: "#Green",
    root_prime_id: "#House",
    title: "Green",
    node_type: "prime",
    node_kind: "user property option",
  },
  {
    _id: "#Blue",
    root_prime_id: "#House",
    title: "Blue",
    node_type: "prime",
    node_kind: "user property option",
  },
  {
    _id: "#Purple",
    root_prime_id: "#House",
    title: "Purple",
    node_type: "prime",
    node_kind: "user property option",
  },
  {
    _id: "#Pink",
    root_prime_id: "#House",
    title: "Pink",
    node_type: "prime",
    node_kind: "user property option",
  },

  // Base Documents ------------
  // House/...
  {
    _id: "#Rooms",
    root_prime_id: "#House",
    title: "Rooms",
    node_type: "prime",
    node_kind: "base document",
    children_list: [
      { _id: "#Rooms.1", prime_id: "#Bedroom", node_type: "reference" },
      { _id: "#Rooms.2", prime_id: "#Livingroom", node_type: "reference" },
    ],
  },
  {
    _id: "#Residents",
    root_prime_id: "#House",
    title: "Residents",
    node_type: "prime",
    node_kind: "base document",
    children_list: [
      { _id: "#Residents.1", prime_id: "#Emma", node_type: "reference" },
      { _id: "#Residents.2", prime_id: "#James", node_type: "reference" },
    ],
  },

  // Documents ------------
  // House/Rooms/...
  {
    _id: "#Bedroom",
    root_prime_id: "#Rooms",
    title: "Bedroom",
    node_type: "prime",
    node_kind: "document",
    children_list: [
      { _id: "#Bedroom.1", prime_id: "#Basket", node_type: "reference" },
      { _id: "#Bedroom.2", prime_id: "#Carpet", node_type: "reference" },
    ],
  },
  // House/Rooms/Bedroom/...
  {
    _id: "#Basket",
    root_prime_id: "#Bedroom",
    title: "Basket",
    node_type: "prime",
    node_kind: "document",
    children_list: [
      { _id: "#Basket.1", prime_id: "#Triangle", node_type: "reference" },
      { _id: "#Basket.2", prime_id: "#Diamond", node_type: "reference" },
      { _id: "#Basket.2", prime_id: "#Circle", binding: "master" },
    ],
  },
  {
    _id: "#Carpet",
    root_prime_id: "#Bedroom",
    title: "Carpet",
    node_type: "prime",
    node_kind: "document",
    children_list: [
      { _id: "#Carpet.1", prime_id: "#Square", node_type: "reference" },
      {
        _id: "#Carpet.2",
        title: "Lego Brick",
        node_type: "native",
        node_kind: "paragraph",
      },
    ],
  },
  // House/Rooms/...
  {
    _id: "#Livingroom",
    root_prime_id: "#Rooms",
    title: "Livingroom",
    node_type: "prime",
    node_kind: "document",
    children_list: [
      { _id: "#Livingroom.1", prime_id: "#Table", node_type: "reference" },
      { _id: "#Livingroom.2", prime_id: "#Triangle", node_type: "reference" },
      {
        _id: "#Livingroom.3",
        title: "Pen",
        node_type: "native",
        node_kind: "paragraph",
      },
    ],
  },
  // House/Rooms/Livingroom/...
  {
    _id: "#Table",
    root_prime_id: "#Livingroom",
    title: "Table",
    node_type: "prime",
    node_kind: "document",
    children_list: [
      {
        _id: "#Table.1",
        prime_id: "#Circle",
        node_type: "reference",
        binding: "bind",
      },
    ],
  },
  // House/Residents/...
  {
    _id: "#Emma",
    root_prime_id: "#Residents",
    template_id: "#Person",
    title: "Emma",
    node_type: "prime",
    node_kind: "document",
    reliance: "instance",
    children_list: [
      {
        _id: "#Emma.1",
        prime_id: "#Circle",
        node_type: "reference",
        binding: "bind",
      },
      {
        _id: "#Emma.2",
        prime_id: "#Circle",
        node_type: "reference",
        binding: "bind",
      },
    ],
    user_property_list: [
      { key_id: "#Size", value_list: [0.8] },
      { key_id: "#Is_Female", value_list: [true] },
      { key_id: "#Belongings", value_list: ["#Circle", "#Diamond"] },
    ],
  },
  {
    _id: "#James",
    root_prime_id: "#Residents",
    template_id: "#Person",
    title: "James",
    node_type: "prime",
    node_kind: "document",
    reliance: "instance",
    children_list: [
      {
        _id: "#James.1",
        title: "Teddy Bear",
        node_type: "native",
        node_kind: "paragraph",
      },
      {
        _id: "#James.2",
        title: "Scarf",
        node_type: "native",
        node_kind: "paragraph",
      },
    ],
    user_property_list: [
      { key_id: "#Size", value_list: [1.05] },
      { key_id: "#Is_Female", value_list: [true] },
      { key_id: "#Belongings", value_list: ["#Triangle", "#Square"] },
    ],
  },

  // Item ------------
  {
    _id: "#Triangle",
    template_id: "#Shape",
    title: "Triangle",
    node_type: "prime",
    node_kind: "item",
    reliance: "instance",
    user_property_list: [
      { key_id: "#Size", value_list: [0.16] },
      { key_id: "#Colors", value_list: ["#Red"] },
    ],
  },
  {
    _id: "#Diamond",
    root_prime_id: "#Basket",
    template_id: "#Shape",
    title: "Diamond",
    node_type: "prime",
    node_kind: "item",
    reliance: "instance",
    user_property_list: [
      { key_id: "#Size", value_list: [0.05] },
      { key_id: "#Colors", value_list: ["#Blue", "#White"] },
    ],
  },
  {
    _id: "#Circle",
    template_id: "#Shape",
    title: "Circle",
    node_type: "prime",
    node_kind: "item",
    reliance: "instance",
    user_property_list: [
      { key_id: "#Size", value_list: [0.28] },
      { key_id: "#Colors", value_list: ["#Green", "#White", "Yellow"] },
    ],
  },
  {
    _id: "#Square",
    root_prime_id: "#Carpet",
    template_id: "#Shape",
    title: "Square",
    node_type: "prime",
    node_kind: "item",
    reliance: "instance",
    user_property_list: [
      { key_id: "#Size", value_list: [0.1] },
      { key_id: "#Colors", value_list: ["#Black", "#White", "Red"] },
    ],
  },

  // Query ------------
  {
    _id: "#All_BDoc",
    root_prime_id: "#House",
    title: "All_BDoc",
    node_type: "prime",
    node_kind: "query document",
    query: "prime.node_kind == 'base document'",
  },
  {
    _id: "#All_Doc",
    root_prime_id: "#House",
    title: "All_Doc",
    node_type: "prime",
    node_kind: "query document",
    query: "prime.node_kind == 'document'",
  },
  {
    _id: "#All_Ite",
    root_prime_id: "#House",
    title: "All_Ite",
    node_type: "prime",
    node_kind: "query document",
    query: "prime.node_kind == 'item'",
  },
];

module.exports = data;
