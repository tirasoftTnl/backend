/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex('products').del()
    .then(function () {
      return knex('products').insert([
        {
          title: 'Product 1',
          description: 'Description for Telephone Product 1',
          img_product: '/img/telephone1.jpg',
          category: 'Telephone'
        },
        {
          title: 'Product 2',
          description: 'Description for Telephone Product 2',
          img_product: 'img/telephone2.jpg',
          category: 'Telephone'
        },
        {
          title: 'Product 3',
          description: 'Description for Telephone Product 3',
          img_product: 'img/telephone3.jpg',
          category: 'Telephone'
        },
        {
          title: 'Product 4',
          description: 'Description for Telephone Product 4',
          img_product: 'img/telephone4.jpg',
          category: 'Telephone'
        },
        {
          title: 'Product 5',
          description: 'Description for Telephone Product 5',
          img_product: 'img/telephone5.jpg',
          category: 'Telephone'
        },
        {
          title: 'Product 6',
          description: 'Description for Telephone Product 6',
          img_product: 'img/telephone6.jpg',
          category: 'Telephone'
        },
        {
          title: 'Product 7',
          description: 'Description for Telephone Product 7',
          img_product: 'img/telephone7.jpg',
          category: 'Telephone'
        },
        {
          title: 'Product 8',
          description: 'Description for Telephone Product 8',
          img_product: 'img/telephone8.jpg',
          category: 'Telephone'
        },
        {
          title: 'Product 9',
          description: 'Description for Telephone Product 9',
          img_product: 'img/telephone9.jpg',
          category: 'Telephone'
        },
        {
          title: 'Product 1',
          description: 'Description for Cloud Product 1',
          img_product: 'img/Cloud1.jpg',
          category: 'Cloud'
        },
        {
          title: 'Product 2',
          description: 'Description for Cloud Product 2',
          img_product: 'img/Cloud2.jpg',
          category: 'Cloud'
        },
        {
          title: 'Product 3',
          description: 'Description for Cloud Product 3',
          img_product: 'img/Cloud3.jpg',
          category: 'Cloud'
        },
        {
          title: 'Product 4',
          description: 'Description for Cloud Product 4',
          img_product: 'img/Cloud4.jpg',
          category: 'Cloud'
        },
        {
          title: 'Product 5',
          description: 'Description for Cloud Product 5',
          img_product: 'img/Cloud5.jpg',
          category: 'Cloud'
        },
        {
          title: 'Product 6',
          description: 'Description for Cloud Product 6',
          img_product: 'img/Cloud6.jpg',
          category: 'Cloud'
        },
        {
          title: 'Product 7',
          description: 'Description for Cloud Product 7',
          img_product: 'img/Cloud7.jpg',
          category: 'Cloud'
        },
        {
          title: 'Product 8',
          description: 'Description for Cloud Product 8',
          img_product: 'img/Cloud8.jpg',
          category: 'Cloud'
        },
        {
          title: 'Product 9',
          description: 'Description for Cloud Product 9',
          img_product: 'img/Cloud9.jpg',
          category: 'Cloud'
        },



        {
          title: 'Product 1',
          description: 'Description for OnPromise Product 1',
          img_product: 'img/OnPromise1.jpg',
          category: 'OnPromise'
        },
        {
          title: 'Product 2',
          description: 'Description for OnPromise Product 2',
          img_product: 'img/OnPromise2.jpg',
          category: 'OnPromise'
        },
        {
          title: 'Product 3',
          description: 'Description for OnPromise Product 3',
          img_product: 'img/OnPromise3.jpg',
          category: 'OnPromise'
        },
        {
          title: 'Product 4',
          description: 'Description for OnPromise Product 4',
          img_product: 'img/OnPromise4.jpg',
          category: 'OnPromise'
        },
        {
          title: 'Product 5',
          description: 'Description for OnPromise Product 5',
          img_product: 'img/OnPromise5.jpg',
          category: 'OnPromise'
        },
        {
          title: 'Product 6',
          description: 'Description for OnPromise Product 6',
          img_product: 'img/OnPromise6.jpg',
          category: 'OnPromise'
        },
        {
          title: 'Product 7',
          description: 'Description for OnPromise Product 7',
          img_product: 'img/OnPromise7.jpg',
          category: 'OnPromise'
        },
        {
          title: 'Product 8',
          description: 'Description for OnPromise Product 8',
          img_product: 'img/OnPromise8.jpg',
          category: 'OnPromise'
        },
        {
          title: 'Product 9',
          description: 'Description for OnPromise Product 9',
          img_product: 'img/OnPromise9.jpg',
          category: 'OnPromise'
        }
      ]);
    });
};
