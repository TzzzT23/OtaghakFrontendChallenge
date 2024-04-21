import { useCallback, useState } from "react";
import { API } from "utils/statics/API";

import type { IRoom } from "components/molecules/house-item/interface";

interface RoomsData {
  "@odata.context": string;
  count: number;
  id: number;
  minPrice: number;
  rooms: IRoom[];
}

interface States {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: RoomsData | null;
  error: { message?: string };
}

interface Options {
  method?: "POST" | "PUT" | "PATCH" | "DELETE";
  cityName?: string;
}

export default function useMutation() {
  const [state, setState] = useState<States>({
    data: null,
    isLoading: true,
    isSuccess: false,
    isError: false,
    error: { message: undefined },
  });

  const callApi = useCallback(async (url: string, options?: Options) => {
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      const response = await fetch(API.baseUrl + url, {
        method: options?.method || "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          checkIn: null,
          checkOut: null,
          attributes: [],
          rules: [],
          filter: `cityCode eq '${options?.cityName}' and includeAroundLocations eq true&$top=24&$skip=0&$count=true`,
        }),
      });

      const data = await response.json();
      setState((prev) => ({ ...prev, data, isLoading: false }));
      return data as RoomsData;
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: { message: (err as States["error"]).message },
        isError: true,
      }));
      throw err;
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  return { callApi, ...state };
}
