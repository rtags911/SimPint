import { NhostClient } from "@nhost/react";
import * as SecureStore from "expo-secure-store";

const REACT_APP_NHOST_SUBDOMAIN = "kwivsrhgpywxqalkwedn";
const REACT_APP_NHOST_REGION = "ap-southeast-1";
const Admin = "%lF;HJZ!1;,6l#Z$MF3VG@-W+lfxDj2i";
const nhost = new NhostClient({
    subdomain: REACT_APP_NHOST_SUBDOMAIN,
    region: REACT_APP_NHOST_REGION,
    clientStorage: SecureStore,
    adminSecret: Admin,
    clientStorageType: 'expo-secure-storage',
    autoRefreshToken:true,
})

export default  nhost;