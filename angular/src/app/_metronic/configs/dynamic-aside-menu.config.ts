export const DynamicAsideMenuConfig = {
  items: [
    {
      title: '::Menu:DashBoard',
      root: true,
      icon: 'flaticon2-architecture-and-city',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/dashboard',
      bullet: 'dot',
    },
    { section: 'Applications' },
    {
      title: '::Menu:UserManagement',
      root: true,
      bullet: 'dot',
      icon: 'flaticon2-user-outline-symbol',
      svg: './assets/media/svg/icons/General/User.svg',
      page: '/user-management',
      requiredPolicy: 'AbpTenantManagement.Tenants.Create',
      submenu: [
        {
          title: '::Menu:Users',
          page: '/user-management/users',
          requiredPolicy: 'AbpIdentity.Users',
        },
        {
          title: '::Menu:Roles',
          page: '/user-management/roles',
          requiredPolicy: 'AbpIdentity.Roles'
        }
      ]
    },
    {
      title: '::Menu:UserProfile',
      root: true,
      bullet: 'dot',
      icon: 'flaticon2-user-outline-symbol',
      svg: './assets/media/svg/icons/Communication/Add-user.svg',
      page: '/user-profile',
      requiredPolicy: ''
    },
    {
      title: '::Menu:EnterpriseManagement',
      root: true,
      bullet: 'dot',
      icon: 'flaticon2-user-outline-symbol',
      svg: './assets/media/svg/icons/Communication/Add-user.svg',
      page: '/doanh-nghiep',
      requiredPolicy: ''
    },
  ]
};
