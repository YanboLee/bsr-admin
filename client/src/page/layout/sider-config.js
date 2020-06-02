export default [
  {
    path: '/list',
    name: 'List',
    icon: ''
  },
  {
    path: '/chart',
    name: 'Chart',
    icon: ''
  },
  {
    path: '/login',
    name: 'Login',
    icon: ''
  },
  {
    path: '/parent',
    name: 'Parent',
    icon: '',
    title: 'Parent',
    children: [
      {
        path: '/child1',
        name: 'child1',
        icon: '',
      },
      {
        path: '/child2',
        name: 'child2',
        icon: '',
      },
    ]
  }
];
