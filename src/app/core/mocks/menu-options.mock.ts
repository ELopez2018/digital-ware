export const mockMenuItemsData = (): any[] => {
  return [
    {
      label: 'Solicitudes',
      routerLink: ['../inicio'],
      default: true,
      visible: true,
      url: '#',
      icon: 'mdi mdi-archive',
      id: '34fd0417-7818-4826-b6a5-42f847ce6d34',
      order: '1',
      type: 'Vista',
      submenu: [
        {
          label: 'Registro de usuarios',
          icon: 'mdi mdi-gauge',
          routerLink: ['./administracion-usuarios'],
        },
        {
          label: 'Registro de Solicitudes',
          icon: 'mdi mdi-gauge',
          routerLink: ['./administracion-solicitudes'],
        },
      ],
    },
    {
      label: 'Configuracion',
      routerLink: ['../inicio'],
      default: true,
      visible: true,
      url: '#',
      icon: 'mdi mdi-settings',
      id: '34fd0417-7818-4826-b6a5-42f847ce6d34',
      order: '1',
      type: 'Vista',
      submenu: [
        {
          label: 'Roles',
          icon: 'mdi mdi-gauge',
          routerLink: ['./registro-de-roles'],
        },
      ],
    },
  ];
};
