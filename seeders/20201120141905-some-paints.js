"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "paints",
      [
        {
          name: "vallebo red",
          BrandId: 1,
          paintRating: 1,
          image:
            "https://cdn.shopify.com/s/files/1/0049/6261/5365/products/ikvnapyrlkrjbvkypfwu_2400x.jpg?v=1598370604",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "vallebo blue",
          BrandId: 1,
          paintRating: 2,
          image:
            "https://static.rapidonline.com/catalogueimages/product/06/08/s06-0812p01wl.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "vallebo green",
          BrandId: 1,
          paintRating: 3,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/71azjd5SQgL._SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "vallebo yellow",
          BrandId: 1,
          paintRating: 3,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51U3vvh31CL._AC_SY879_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "vallebo purple",
          BrandId: 1,
          paintRating: 5,
          image:
            "https://www.gramcoschoolsupplies.com/pub/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/p/u/purple_slick.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NOTcitadel red",
          BrandId: 2,
          paintRating: 2,
          image:
            "https://cdn.shopify.com/s/files/1/0049/6261/5365/products/ikvnapyrlkrjbvkypfwu_2400x.jpg?v=1598370604",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NOTcitadel blue",
          BrandId: 2,
          paintRating: 3,
          image:
            "https://static.rapidonline.com/catalogueimages/product/06/08/s06-0812p01wl.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NOTcitadel green",
          BrandId: 2,
          paintRating: 3,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/71azjd5SQgL._SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NOTcitadel yellow",
          BrandId: 2,
          paintRating: 4,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51U3vvh31CL._AC_SY879_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NOTcitadel purple",
          BrandId: 2,
          paintRating: 5,
          image:
            "https://www.gramcoschoolsupplies.com/pub/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/p/u/purple_slick.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Scale45 red",
          BrandId: 3,
          paintRating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0049/6261/5365/products/ikvnapyrlkrjbvkypfwu_2400x.jpg?v=1598370604",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Scale45 blue",
          BrandId: 3,
          paintRating: 1,
          image:
            "https://static.rapidonline.com/catalogueimages/product/06/08/s06-0812p01wl.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Scale45 green",
          BrandId: 3,
          paintRating: 3,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/71azjd5SQgL._SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Scale45 yellow",
          BrandId: 3,
          paintRating: 5,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51U3vvh31CL._AC_SY879_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Scale45 purple",
          BrandId: 3,
          paintRating: 1,
          image:
            "https://www.gramcoschoolsupplies.com/pub/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/p/u/purple_slick.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "peace-colors red",
          BrandId: 3,
          paintRating: 5,
          image:
            "https://cdn.shopify.com/s/files/1/0049/6261/5365/products/ikvnapyrlkrjbvkypfwu_2400x.jpg?v=1598370604",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "peace-colors blue",
          BrandId: 4,
          paintRating: 2,
          image:
            "https://static.rapidonline.com/catalogueimages/product/06/08/s06-0812p01wl.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "peace-colors green",
          BrandId: 4,
          paintRating: 3,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/71azjd5SQgL._SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "peace-colors yellow",
          BrandId: 4,
          paintRating: 4,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51U3vvh31CL._AC_SY879_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "peace-colors purple",
          BrandId: 4,
          paintRating: 3,
          image:
            "https://www.gramcoschoolsupplies.com/pub/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/p/u/purple_slick.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "praxis red",
          BrandId: 5,
          paintRating: 2,
          image:
            "https://cdn.shopify.com/s/files/1/0049/6261/5365/products/ikvnapyrlkrjbvkypfwu_2400x.jpg?v=1598370604",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "praxis blue",
          BrandId: 5,
          paintRating: 2,
          image:
            "https://static.rapidonline.com/catalogueimages/product/06/08/s06-0812p01wl.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "praxis green",
          BrandId: 5,
          paintRating: 1,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/71azjd5SQgL._SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "praxis yellow",
          BrandId: 5,
          paintRating: 1,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51U3vvh31CL._AC_SY879_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "praxis purple",
          BrandId: 5,
          paintRating: 2,
          image:
            "https://www.gramcoschoolsupplies.com/pub/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/p/u/purple_slick.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("paints", null, {});
  },
};
