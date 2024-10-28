import {
  BaseStorage,
  createStorage,
  StorageType,
} from "@pages/content/shared/storages/base";

export type User = {
  user: { id: string; email: string };
  accessToken: string | null;
  defaultSectionId: string | null;
};

type AuthStorage = BaseStorage<User> & {
  setAuth: (User) => void;
};

const storage = createStorage<User>(
  "auth-storage-key",
  {
    user: { id: null, email: null },
    accessToken: null,
    defaultSectionId: null,
  },
  {
    storageType: StorageType.Local,
  }
);

const authStorage: AuthStorage = {
  ...storage,
  setAuth: (auth) => {
    storage.set(() => {
      return {
        user: auth.user,
        accessToken: auth.accessToken,
        defaultSectionId: auth.defaultSectionId,
      };
    });
  },
};

export default authStorage;
