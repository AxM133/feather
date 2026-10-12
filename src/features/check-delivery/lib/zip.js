import { deliveryZones, ZIP_LENGTH } from '../config/zones'

export const normalizeZip = (value) => value.replace(/\D/g, '').slice(0, ZIP_LENGTH)

export const isValidZip = (zip) => zip.length === ZIP_LENGTH

export const findDeliveryZone = (zip) => deliveryZones.find((zone) => zone.prefixes.includes(zip.slice(0, 3))) ?? null
