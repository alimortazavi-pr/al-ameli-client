//Components
import {
  AuthorsItem,
  CategoriesItem,
  LanguagesItem,
  PublisherItem,
  TitleItem,
} from ".";

export const BookDetailItems = () => {
  return (
    <div className="max-h-[66dvh] md:max-h-dvh overflow-y-auto">
      <TitleItem />
      <AuthorsItem />
      <CategoriesItem />
      <PublisherItem />
      <LanguagesItem />
    </div>
  );
};
