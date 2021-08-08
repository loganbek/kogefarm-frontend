import { MenuEntry } from 'components/Pancake'

export const config: MenuEntry[] = [
  {
    label: 'Vaults to stake',
    icon: 'HomeIcon',
    href: '/',
    group: '',
  },
  {
    label: 'Farms to invest',
    icon: 'PoolIcon',
    href: 'farms',
    group: '',
  },
  {
    label: 'Governance',
    icon: 'GroupsIcon',
    href: 'https://vote.kogecoin.io',
    group: 'Help',
  },
  {
    label: 'Documentation',
    icon: 'InfoIcon',
    href: 'https://koge.gitbook.io/kogefarm/',
    group: 'Help',
  },
  {
    label: 'Audit',
    icon: 'NftIcon',
    href: 'https://koge.gitbook.io/kogefarm/audit/',
    group: 'Help',
  },
  {
    label: 'Fees',
    icon: 'TeamBattleIcon',
    href: 'https://koge.gitbook.io/kogefarm/fees/',
    group: 'Help',
  },
  {
    label: 'KogeCoin Token',
    icon: 'TradeIcon',
    href: 'https://kogecoin.io',
    group: 'Help',
  },
  {
    label: 'Back up site',
    icon: 'MoreIcon',
    href: 'https://main.d282tvvic8lprz.amplifyapp.com',
    group: 'Help',
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/kogecoin',
    group: 'Stay Tuned',
  },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/kogecoin",
    group: 'Stay Tuned',
    items: [
      {
        label: "Main Chat",
        href: "https://t.me/kogecoina",
      },
      {
        label: "Price Chat",
        href: "https://t.me/kogecoinb",
      },
      {
        label: "Announcement Channel",
        href: "https://t.me/kogecoinc",
      }
    ]
  },
]

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/kogecoin",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/kogecoinIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/kogecoin_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/kogecoinVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/kogecoin_ita",
      },
      {
        label: "русский",
        href: "https://t.me/kogecoin_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/kogecointurkiye",
      },
      {
        label: "Português",
        href: "https://t.me/kogecoinPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/kogecoinEs",
      },
      {
        label: "日本語",
        href: "https://t.me/kogecoinjp",
      },
      {
        label: "Français",
        href: "https://t.me/kogecoinfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/kogecoinAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/kogecoinWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/kogecoin",
  },
];
