import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import * as React from "react";
import { useWishList } from "@pages/content/hooks/useWishList";
import { postWithAuth } from "@pages/content/shared/requestHandler";
import { mapBaseOnResult } from "@pages/content/mapper/wishlist";
import authStorage from "@pages/content/shared/storages/authStorage";
import { useEffect, useState } from "react";
import useStorage from "@pages/content/hooks/useStorage";
import { setStateWithPrev } from "@pages/content/shared/setStateWithPrev";

const SelectOption: React.FC = () => {
  const { activeSelection, setActiveSelection } = useWishList();
  const storageAuth = useStorage(authStorage);

  const { postType, selectedOptions } = activeSelection;
  const [selectOptions, setSelectOptions] = useState([]);

  const fetchSelectOptions = async (path: string, key: string) => {
    const result = await postWithAuth(path, storageAuth.accessToken, {
      user_email: storageAuth.user.email,
    });

    let selectOptions = [];

    if (result.status == "success" && result?.response[key]) {
      selectOptions = mapBaseOnResult(result.response[key], key);
    }

    setSelectOptions(selectOptions.sort((a, b) => b.createdAt - a.createdAt));
  };
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = selectOptions.find((s) => s.mainId == event.target.value);

    setStateWithPrev(setActiveSelection, {
      selectedOptions: selected,
    });
  };

  useEffect(() => {
    switch (postType) {
      case "wishlist":
        fetchSelectOptions("/fetch_wishlist_by_user", "wishlist");
        break;
      case "closet":
        break;
      default:
        break;
    }
  }, [postType]);

  return (
    <FormControl sx={{ width: "100%" }} size="small">
      <InputLabel htmlFor={postType}>{`Choose a ${postType}`}</InputLabel>
      <NativeSelect
        id={postType}
        fullWidth
        disabled={selectOptions.length == 0}
        value={selectedOptions?.mainId}
        onChange={handleChange}
      >
        <option value="">{`Select a ${postType}`}</option>
        {selectOptions.map((s) => {
          return (
            <option key={s.mainId} value={s.mainId}>
              {s.label}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default SelectOption;
