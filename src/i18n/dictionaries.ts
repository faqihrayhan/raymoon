import en from "./locales/en.json";
import id from "./locales/id.json";

export type Locale = "en" | "id";
export type Messages = typeof en;

const dictionaries: Record<Locale, Messages> = {
  en,
  id: {
    ...en,
    ...id,
  },
};

export const getDictionary = (locale: Locale = "en"): Messages => {
  return dictionaries[locale] || dictionaries.en;
};
