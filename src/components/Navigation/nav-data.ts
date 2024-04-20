export type NavGroup = {
  group: string;
  href: string;
  t_key: string;
  links: {
    href: string;
    t_key: string;
  }[];
}

const nav_data: NavGroup[] = []

nav_data.push({
  group: 'home',
  href: '/',
  t_key: 'nav.group.home',
  links: [
    {
      href: '/#',
      t_key: 'nav.home.get_started'
    },
    {
      href: '/#',
      t_key: 'nav.home.feature'
    },
    {
      href: '/#',
      t_key: 'nav.home.community'
    },
    {
      href: '/#',
      t_key: 'nav.home.news'
    }
  ]
})

nav_data.push({
  group: 'features',
  href: '/features',
  t_key: 'nav.group.features',
  links: [
    {
      href: '/#',
      t_key: 'nav.features.features'
    },
    {
      href: '/#',
      t_key: 'nav.features.new_trails'
    },
    {
      href: '/#',
      t_key: 'nav.features.starcoin_v2'
    },
    {
      href: '/#',
      t_key: 'nav.features.starcoin_foundation'
    },
    {
      href: '/#',
      t_key: 'nav.features.starcoin_grant'
    },
    {
      href: '/#',
      t_key: 'nav.features.starcoin_roadmap'
    },
  ]
})

nav_data.push({
  group: 'developers',
  href: '/developers',
  t_key: 'nav.group.developers',
  links: [
    {
      href: '/#',
      t_key: 'nav.developers.easy_building'
    },
    {
      href: '/#',
      t_key: 'nav.developers.starcoin_grant'
    },
  ]
})

nav_data.push({
  group: 'getstc',
  href: '/getstc',
  t_key: 'nav.group.getstc',
  links: [
    {
      href: '/#',
      t_key: 'nav.getstc.node_mining'
    },
    {
      href: '/#',
      t_key: 'nav.getstc.starmask_wallet'
    },
    {
      href: '/#',
      t_key: 'nav.getstc.geeks'
    },
    {
      href: '/#',
      t_key: 'nav.getstc.hardcore_player'
    },
    {
      href: '/#',
      t_key: 'nav.getstc.one_chain_dao'
    },
  ]
})

nav_data.push({
  group: 'community',
  href: '/community',
  t_key: 'nav.group.community',
  links: [
    {
      href: '/#',
      t_key: 'nav.community.star_dome'
    },
    {
      href: '/#',
      t_key: 'nav.community.one_chain_dao'
    },
    {
      href: '/#',
      t_key: 'nav.community.ecosystem_partners'
    },
    {
      href: '/#',
      t_key: 'nav.community.branding'
    },
  ]
})

nav_data.push({
  group: 'news',
  href: '/news',
  t_key: 'nav.group.news',
  links: [
    {
      href: '/#',
      t_key: 'nav.news.news_blog'
    },
  ]
})

export default nav_data