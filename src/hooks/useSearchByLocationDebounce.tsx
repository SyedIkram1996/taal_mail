import { useDebouncedCallback } from "use-debounce";

const useSearchByLocationDebounce = (
  searchValue: string,
  setIsTyping: (isTyping: boolean) => void,
  setSearchResult: (searchResult: any[]) => void,
) => {
  const handleSearching = useDebouncedCallback(async () => {
    // TODO: fetch data and update result
    // const { data } = await searchByLocation(searchValue);

    setIsTyping(false);

    // if (data) {
    //   setSearchResult(data.data);
    // }
  }, 500);

  return { handleSearching };
};

export default useSearchByLocationDebounce;
