import { NhostClient } from "@nhost/react";


const REACT_APP_NHOST_SUBDOMAIN = "kwivsrhgpywxqalkwedn";
const REACT_APP_NHOST_REGION = "ap-southeast-1";

export const nhostConfig = {
  subdomain: REACT_APP_NHOST_SUBDOMAIN,
  region: REACT_APP_NHOST_REGION,
 
};

export const nhost = new NhostClient(nhostConfig);

export default  nhost;