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
      href: '#get-started',
      t_key: 'nav.home.get_started'
    },
    {
      href: '#features',
      t_key: 'nav.home.feature'
    },
    {
      href: '#community',
      t_key: 'nav.home.community'
    },
    {
      href: '#news',
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
      href: '#features',
      t_key: 'nav.features.features'
    },
    {
      href: '#new-trails',
      t_key: 'nav.features.new_trails'
    },
    {
      href: '#starcoin-v2',
      t_key: 'nav.features.starcoin_v2'
    },
    {
      href: '#starcoin-foundation',
      t_key: 'nav.features.starcoin_foundation'
    },
    {
      href: '#starcoin-grant',
      t_key: 'nav.features.starcoin_grant'
    },
    {
      href: '#starcoin-roadmap',
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
      href: '#get-started-with-move',
      t_key: 'nav.developers.get_started_with_move'
    },
    {
      href: '#get-started-with-move',
      t_key: 'nav.developers.github'
    },
    {
      href: '#what-is-move',
      t_key: 'nav.developers.what_is_move'
    },
    {
      href: '#why-move',
      t_key: 'nav.developers.why_move'
    },
    {
      href: '#move-starcoin',
      t_key: 'nav.developers.move_starcoin'
    },
    {
      href: '#starcoin-move-features',
      t_key: 'nav.developers.starcoin_move_features'
    },
    {
      href: '#download-the-sdk',
      t_key: 'nav.developers.download_the_sdk'
    },
    {
      href: '#download-the-sdk',
      t_key: 'nav.developers.explore_tutorials'
    },
    {
      href: '#move-innovation-with-starcoin',
      t_key: 'nav.developers.move_innovation_with_starcoin'
    },
    {
      href: '#join-the-community',
      t_key: 'nav.developers.join_the_community'
    },
  ]
})

nav_data.push({
  group: 'starstack',
  href: '/starstack',
  t_key: 'nav.group.starstack',
  links: [
    {
      href: '#get_start',
      t_key: 'nav.starstack.get_start'
    },
    {
      href: '#get_start',
      t_key: 'nav.starstack.github'
    },
    {
      href: '#resource-documentation',
      t_key: 'nav.starstack.resource_documentation'
    },
    {
      href: '#why-starStack',
      t_key: 'nav.starstack.why_starStack'
    },
    {
      href: '#easy-building',
      t_key: 'nav.starstack.easy_building'
    },
    {
      href: '#starstack-features',
      t_key: 'nav.starstack.starstack_features'
    },
    {
      href: '#apply',
      t_key: 'nav.starstack.apply'
    },
    {
      href: '#connect',
      t_key: 'nav.starstack.connect'
    },
  ]
})

nav_data.push({
  group: 'getstc',
  href: '/getstc',
  t_key: 'nav.group.getstc',
  links: [
    {
      href: '#node-mining',
      t_key: 'nav.getstc.node_mining'
    },
    {
      href: '#starmask-wallet',
      t_key: 'nav.getstc.starmask_wallet'
    },
    {
      href: '#geeks',
      t_key: 'nav.getstc.geeks'
    },
    {
      href: '#hardcore-player',
      t_key: 'nav.getstc.hardcore_player'
    },
    {
      href: '#one-chain-dao',
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
      href: '#star-dome',
      t_key: 'nav.community.star_dome'
    },
    {
      href: '#one-chain-dao',
      t_key: 'nav.community.one_chain_dao'
    },
    {
      href: '#ecosystem-partners',
      t_key: 'nav.community.ecosystem_partners'
    },
    {
      href: '#branding',
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
      href: '#news-blog',
      t_key: 'nav.news.news_blog'
    },
  ]
})



export default nav_data
