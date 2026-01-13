import 'server-only'

// Define the shape of our dictionary so TypeScript can help us
// In a real app, you might auto-generate this type
type Locale = 'en' | 'ar'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ar: () => import('@/dictionaries/ar.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  // If the locale isn't found, default to 'en'
  if (locale !== 'ar' && locale !== 'en') return dictionaries.en();
  return dictionaries[locale]();
}