import { NhostClient } from "@nhost/react";
import * as SecureStore from "expo-secure-store";

const REACT_APP_NHOST_SUBDOMAIN = "your-subdomain";
const REACT_APP_NHOST_REGION = "your-region";

export const nhostConfig = {
  subdomain: REACT_APP_NHOST_SUBDOMAIN,
  region: REACT_APP_NHOST_REGION,
  clientStorageType: "expo-secure-storage",
  clientStorage: SecureStore,
};

export const nhost = new NhostClient(nhostConfig);
