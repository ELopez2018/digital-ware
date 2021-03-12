export const mockMenuItemsData = (): any[] => {
  return [
    {
      label: 'Pasajeros',
      routerLink: ['../inicio'],
      default: true,
      visible: true,
      url: '#',
      icon: 'mdi mdi-account-circle',
      id: '34fd0417-7818-4826-b6a5-42f847ce6d34',
      order: '1',
      type: 'Vista',
      submenu: [
        {
          label: 'Registro',
          icon: 'mdi mdi-gauge',
          routerLink: ['./administracion-usuarios'],
        },
        {
          label: 'Consulta',
          icon: 'mdi mdi-gauge',
          routerLink: ['./lista-de-usuarios'],
        },
      ],
    },
    {
      label: 'Aeronaves',
      routerLink: ['../inicio'],
      default: true,
      visible: true,
      url: '#',
      icon: 'mdi mdi-airplane-takeoff',
      id: '34fd0417-7818-4826-b6a5-42f847ce6d34',
      order: '1',
      type: 'Vista',
      submenu: [
        {
          label: 'Crear',
          icon: 'mdi mdi-gauge',
          routerLink: ['#'],
        },
        {
          label: 'Alquiler',
          icon: 'mdi mdi-gauge',
          routerLink: ['#'],
        },
        {
          label: 'Consulta',
          icon: 'mdi mdi-gauge',
          routerLink: ['#'],
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
