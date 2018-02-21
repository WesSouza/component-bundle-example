const packages = [
  {
    importFunction: () => import('./search'),
    components: [
      'SearchPage',
    ],
  },
  {
    importFunction: () => import('./upperFunnel'),
    components: [
      'HomePage',
      'CategoryPage',
      'ProductPage',
    ],
  },
  {
    importFunction: () => import('./user'),
    components: [
      'AccountPage',
      'CheckoutPage',
    ],
  },
];

const exportedComponents = {};
packages.forEach(({ importFunction, components }) => {
  components.forEach(component => {
    exportedComponents[component] = () => importFunction().then(module => module.default[component]);
  })
});

export default exportedComponents;
