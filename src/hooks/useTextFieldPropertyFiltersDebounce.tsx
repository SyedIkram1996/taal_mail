import { ChangeEvent } from "react";
import { useDebouncedCallback } from "use-debounce";

const useTextFieldPropertyFiltersDebounce = ({
  searchParams,
  pathname,
  replace,
  refresh,
}: {
  searchParams: any;
  pathname: any;
  replace: any;
  refresh?: any;
}) => {
  const handleTextFieldChange = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      replace(`${pathname}?${params.toString()}`);
      if (refresh) {
        refresh();
      }
    },
    500,
  );

  return { handleTextFieldChange };
};

export default useTextFieldPropertyFiltersDebounce;
