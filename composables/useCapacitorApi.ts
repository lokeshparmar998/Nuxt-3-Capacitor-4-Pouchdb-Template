import { Capacitor } from "@capacitor/core";
import { Storage } from "@capacitor/storage";
import { Device } from "@capacitor/device";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { Clipboard } from "@capacitor/clipboard";
import { Geolocation } from "@capacitor/geolocation";
import { Camera, CameraResultType } from "@capacitor/camera";
import { LocalNotifications } from "@capacitor/local-notifications";
/* import { BarcodeScanner } from '@capacitor-community/barcode-scanner'; */

import * as bulmaToast from "bulma-toast";

/* toast */
interface Toast {
  message: string;
  type: ToastType;
}
type ToastType =
  | "is-primary"
  | "is-link"
  | "is-info"
  | "is-success"
  | "is-warning"
  | "is-danger"
  | "is-white"
  | "is-black"
  | "is-light"
  | "is-dark";

export const useToast = (toast: Toast) => {
  bulmaToast.toast({
    message: toast.message,
    type: toast.type,
    position: "top-center",
    dismissible: false,
    animate: { in: "headShake", out: "fadeOut" },
  });
  return;
};

/* device */
export const useCapacitorDevice = async () => {
  let obj = await Device.getInfo();
  let uuid = await Device.getId();
  Object.assign(obj, { uuid: uuid.uuid });
  return obj;
};

/* storage */
export const useCapacitorStorageSet = async (data) => {
  for (let d of data) {
    await Storage.set({
      key: d[0],
      value: d[1],
    });
  }
  /*  */
};
export const useCapacitorStorageGet = async (key: string) => {
  const { value } = await Storage.get({ key: key });
  return value;
};
export const useCapacitorStorageClear = async () => {
  await Storage.clear();
};

/* Clipboard */
export const useCapacitorClipboard = async (text: string) => {
  Clipboard.write({
    string: text,
  });
};

/* Haptic */
export const useCapacitorHaptic = async () => {
  Haptics.vibrate();
};

/* Geolocation */
export const useCapacitorGeolocation = async () => {
  const coordinates = await Geolocation.getCurrentPosition();
  return coordinates.coords;
};

/* Camera */
export const useCapacitorCamera = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64,
  });
  return image;
};

/* Plugin */
export const useCapacitorCheckPlugin = async (pluginName: string) => {
  return Capacitor.isPluginAvailable(pluginName);
};

/* Native device */
export const useCapacitorNativeDevice = async () => {
  return Capacitor.isNativePlatform();
};

/* Permissions */
type PermissonType = "geolocation" | "local-notification";

export const useCapacitorPermission = async (permission: PermissonType) => {
  if (permission == "geolocation") {
    return Geolocation.checkPermissions();
  } else if (permission == "local-notification") {
    return LocalNotifications.checkPermissions();
  }
};
export const useCapacitorRequestPermission = async (
  permission: PermissonType
) => {
  if (permission == "geolocation") {
    return Geolocation.requestPermissions();
  } else if (permission == "local-notification") {
    return LocalNotifications.requestPermissions();
  }
};
/* export const useCapacitorOpenSettings = async () => {
    await BarcodeScanner.openAppSettings();
}; */

/*  */
