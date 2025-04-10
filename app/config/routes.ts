export const routes = {
  home: '/',
  categories: '/categories',
  products: {
    all: '/products',
    detail: (slug: string) => `/products/${slug}`,
  },
  collections: {
    summer: '/collections/summer',
    winter: '/collections/winter',
    spring: '/collections/spring',
    fall: '/collections/fall',
  },
  pages: {
    about: '/about',
    contact: '/contact',
    faq: '/faq',
    shipping: '/shipping',
    returns: '/returns',
    privacy: '/privacy',
    terms: '/terms',
  },
  account: {
    login: '/account/login',
    register: '/account/register',
    profile: '/account/profile',
    orders: '/account/orders',
    wishlist: '/account/wishlist',
  },
  shop: {
    sale: '/shop/sale',
    featured: '/shop/featured',
    deals: '/shop/deals',
  }
} as const

export type RoutePath = typeof routes 