const DocMenuConfig = [
  {
    heading: "Utama",
    pages: [
      {
        heading: "Dashboard",
        route: "/dashboard",
        svgIcon: "/media/icons/duotune/general/gen025.svg",
      },
      {
        heading: "Pengumuman",
        route: "/pengajuan",
        svgIcon: "/media/icons/duotune/communication/com004.svg",
      },
      {
        heading: "Pengajuan",
        route: "/pengajuan",
        svgIcon: "/media/icons/duotune/abstract/abs019.svg",
      },
      {
        sectionTitle: "Profil",
        route: "/profil",
        svgIcon: "/media/icons/duotune/communication/com006.svg",
        sub: [
            {
                heading: "Data Diri",
                route: "/profil",
            },
        ],
      },

    ],
  },
  {
    heading: "Akun",
    pages: [
      {
        heading: "Logout",
        route: "/logout",
        svgIcon: "/media/icons/duotune/arrows/arr060.svg",
      },
    ],
  },
];

export default DocMenuConfig;
