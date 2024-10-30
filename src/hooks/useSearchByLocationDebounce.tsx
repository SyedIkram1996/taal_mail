import { searchPropertiesByLocation } from "@/services/property.services";
import { useDebouncedCallback } from "use-debounce";

const useSearchByLocationDebounce = (
  searchValue: string,
  setIsTyping: (isTyping: boolean) => void,
  setSearchResult: (searchResult: any[]) => void,
) => {
  const handleSearching = useDebouncedCallback(async () => {
    //@ts-ignore
    const { data } = await searchPropertiesByLocation(searchValue);

    setIsTyping(false);

    //@ts-ignore
    if (data && data.data) {
      //@ts-ignore
      setSearchResult(data.data.properties);
    }
  }, 500);

  return { handleSearching };
};

export default useSearchByLocationDebounce;
