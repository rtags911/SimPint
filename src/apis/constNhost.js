import { NhostClient, NhostProvider } from "@nhost/react";
import * as SecureStore from "expo-secure-store";

const REACT_APP_NHOST_SUBDOMAIN = "gimpimrhxygihhtbpuof";
const REACT_APP_NHOST_REGION = "eu-central-1";

const nhost = new NhostClient({
  subdomain: REACT_APP_NHOST_SUBDOMAIN,
  region: REACT_APP_NHOST_REGION,
  clientStorageType: "expo-secure-storage",
  clientStorage: SecureStore,
});

export default nhost;
