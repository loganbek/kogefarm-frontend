import { MenuEntry } from 'components/Pancake'
import { SUPPORTED_CHAINS } from 'config/index';

export const config: MenuEntry[] = [
  {
    label: 'Vaults',
    icon: 'HomeIcon',
    href: '/',
    group: '',
  },
  {
    label: 'KogeCoin Farms',
    icon: 'PoolIcon',
    href: 'farms',
    group: '',
    disabled: [SUPPORTED_CHAINS.MOONRIVER]
  },
  {
    label: 'PolyRoll',
    icon: 'TicketIcon',
    items: [
      {
        label: 'Coin Flip',
        href: 'https://polyroll.org/coinflip/KOGE?ref=0k4N170561126n1Q765N6O80n081qO639945n8o53o'
      },
      {
        label: 'Dice Roll',
        href: 'https://polyroll.org/diceroll/KOGE?ref=0k4N170561126n1Q765N6O80n081qO639945n8o53o'
      },
      {
        label: 'Polyroll',
        href: 'https://polyroll.org/polyroll/KOGE?ref=0k4N170561126n1Q765N6O80n081qO639945n8o53o'
      },
      {
        label: 'Roulette',
        href: 'https://polyroll.org/roulette/KOGE?ref=0k4N170561126n1Q765N6O80n081qO639945n8o53o'
      }
    ],
    group: 'Games/NFTs',
  },
  {
    label: 'TurtleTanks',
    icon: 'TicketIcon',
    href: 'https://discord.gg/Df428BbdpS',
    group: 'Games/NFTs',
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
    href: 'https://kogefarmbackup.io',
    group: 'Help',
  },
  {
    label: 'Github',
    icon: 'GithubIcon',
    href: 'https://github.com/kogecoin',
    group: 'Stay Tuned',
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/kogecoin',
    group: 'Stay Tuned',
  },
  {
    label: 'Reddit',
    icon: 'RedditIcon',
    href: 'https://www.reddit.com/r/KogeCoin/',
    group: 'Stay Tuned',
  },
  {
    label: 'Discord',
    icon: 'DiscordIcon',
    href: 'https://discord.gg/xDsnS3TSVA',
    group: 'Stay Tuned',
  },
  {
    label: 'Medium',
    icon: 'MediumIcon',
    href: 'https://medium.com/@kogecoin',
    group: 'Stay Tuned',
  },
  {
    label: 'YouTube',
    icon: 'YouTubeIcon',
    href: 'https://www.youtube.com/channel/UCxfG3PjuWkqTCVdiUGVU8Vw',
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
        href: "https://t.me/kogecoin",
      },
      {
        label: "Price Chat",
        href: "https://t.me/kogecoinprice",
      },
      {
        label: "Announcement Channel",
        href: "https://t.me/KogeAnn",
      },
      {
        label: "Español",
        href: "https://t.me/kogecoinspanish",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/kogevietnamese"
      },
      {
        label: "Telegram Shortcuts",
        href: "https://kogecoin.notion.site/075253d5c5694fb8a8c707e8cb71fee9?v=c0a069e63eae4b02a3efcde538607a2b"
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
