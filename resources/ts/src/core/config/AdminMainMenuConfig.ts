const DocMenuConfig = [
    {
      heading: " ",
      pages: [
        {
          heading: "Dashboard",
          route: "/admin/dashboard",
          svgIcon: "/media/icons/duotune/general/gen025.svg",
        },
      ],
    },
    {
        heading: "Rekrutmen",
        pages: [
            {
                heading: "Rekrutmen Aktif",
                route: "/admin/pendaftaran",
                svgIcon: "/media/icons/duotune/communication/com004.svg",
            },
            {
                heading: "Semua Rekrutmen",
                route: "/admin/pendaftaran",
                svgIcon: "/media/icons/duotune/communication/com004.svg",
            },
            {
                heading: "Peserta",
                route: "/admin/pendaftaran",
                svgIcon: "/media/icons/duotune/communication/com004.svg",
            },
        ]
    },
    {
      heading: "Master Data",
      pages: [
        {
            heading: "Unit Kerja",
            route: "/admin/departemen",
            svgIcon: "/media/icons/duotune/communication/com006.svg",
        },
        {
            heading: "Posisi/Jabatan",
            route: "/admin/posisi",
            svgIcon: "/media/icons/duotune/communication/com006.svg",
        },
        {
            heading: "Sekolah/Universitas",
            route: "/admin/sekolah",
            svgIcon: "/media/icons/duotune/communication/com006.svg",
        },
        {
            heading: "Jurusan",
            route: "/admin/jurusan",
            svgIcon: "/media/icons/duotune/communication/com006.svg",
        },
        {
            heading: "Daerah",
            route: "/admin/daerah",
            svgIcon: "/media/icons/duotune/communication/com006.svg",
        },
        {
          heading: "User",
          route: "/admin/user",
          svgIcon: "/media/icons/duotune/communication/com006.svg",
        },
    ],
    },
    {
      heading: " ",
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
