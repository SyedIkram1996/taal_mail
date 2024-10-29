import serviceAccount from "@/lib/utils/serviceAccountKey.json";
import admin, { ServiceAccount } from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
  });
}
