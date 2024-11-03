import { useEffect, useReducer, useState } from "react";

import { GoogleSheets } from "~/domains";
import { getRowsBySheetId } from "~/libs";
import {
  calculateGoogleSheetRowApplications,
  convertGoogleSheetRowData,
} from "~/utils";

type LoadingState = {
  isLoading: boolean;
  isError: boolean;
};

interface GoogleSheetProps {
  googleSheetId: string;
  lectureType: string;
}

export const useGoogleSheet = ({
  googleSheetId,
  lectureType,
}: GoogleSheetProps) => {
  const [googleSheet, setGoogleSheet] = useState<GoogleSheets>();
  const [rawValue, setRawValue] = useState<Array<any>>([]);

  const [state, dispatch] = useReducer(
    (state: LoadingState, newState: Partial<LoadingState>) => ({
      ...state,
      ...newState,
    }),
    {
      isLoading: true,
      isError: false,
    }
  );

  useEffect(() => {
    (async () => {
      const googleSheet = await getRowsBySheetId(googleSheetId);

      if (!googleSheet) {
        return dispatch({ isError: true, isLoading: false });
      }

      setRawValue(googleSheet);
      dispatch({ isLoading: false });
    })();
  }, [googleSheetId]);

  useEffect(() => {
    if (!rawValue) return;

    const allEntriesPerSheet = rawValue
      ?.map((sheet) => convertGoogleSheetRowData(sheet))
      //flat is needed, because we can have one or more swimming day_time per user
      .flat()
      ?.filter((sheets) => sheets);

    const calculated = calculateGoogleSheetRowApplications(allEntriesPerSheet);

    setGoogleSheet({ [lectureType]: { lectures: calculated } });
  }, [lectureType, rawValue]);

  return {
    googleSheet,
    isLoading: state.isLoading,
    isError: state.isError,
  };
};
