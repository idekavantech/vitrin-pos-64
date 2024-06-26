/* eslint-disable prettier/prettier */
export const CDN_BASE_URL =
  "https://hs3-cf.behtarino.com/static/images/behtarino-web/";
const BASE_URL = "https://api.vitrin.me/api/v1/";
const BASE_URL_V2 = "https://api.vitrin.me/api/v2/";

export const EMAIL_API = `${BASE_URL}send_custom_email/`;
export const FILE_SERVER_URL_API = `${BASE_URL}get_minio_url/`;

// User API
export const LOGIN_API = `${BASE_URL_V2}businesses/kvioavomcf/pos-vitrin-verification/`;
export const VERIFY_API = `${BASE_URL_V2}jwt/`;
export const USER_INFO_API = `${BASE_URL}users/self/`;
export const PUSH_NOTIFICATION_API = `${BASE_URL}push_notification_client/`;
export const ORDER_ANALYTICS_DATA_API = (plugin) =>
  `${BASE_URL_V2}${plugin}-orders/analytics-data/`;

// Business API
export const BUSINESSES_BY_OWNER_API = `${BASE_URL_V2}businesses/by-owner/`;

// Deals API
export const DEALS_API = `${BASE_URL_V2}resources/`;
export const UPSERT_DEALS_API = `${BASE_URL_V2}resources/bulk-upsert-by-pos-id/`;
export const DEALS_IMAGES_API = `${BASE_URL}deals/images/`;
export const DEALS_ITEM_API = (id) =>
  `${BASE_URL_V2}resources/${id}/variations/`;
export const DEALS_IMAGES_ITEM_API = (id) => `${BASE_URL}deals/images/${id}/`;
export const CATEGORIES_API = `${BASE_URL}deal_categories/`;
export const UPSERT_CATEGORIES_API = `${BASE_URL_V2}resource-labels/bulk-upsert-by-pos-id/`;
export const UPSERT_MODIFIERS_API = `${BASE_URL}modifier_sets/bulk_upsert_by_pos_id/`;
export const CATEGORIES_ITEMS_API = (id) =>
  `${BASE_URL_V2}deal_categories/${id}/`;
export const CATEGORIES_ITEMS_CHANGE_ORDER_API = (id) =>
  `${BASE_URL}deal_categories/${id}/change_order_by_business/`;
export const GROUP_DISCOUNT_ON_DEALS = (id) =>
  `${BASE_URL}deal_categories/${id}/group_discount_on_deals/`;
export const USER_ORDERS_ITEMS_API = (id, plugin) =>
  `${BASE_URL_V2}${plugin}-orders/${id}/`;
export const BUSINESS_ORDERS_API = (
  plugin = "",
  page = 1,
  pageSize = 20,
  hasPaginate = true
) =>
  `${BASE_URL_V2}${plugin}-orders/by-business-id/?page=${page}&page_size=${pageSize}&has_paginate=${hasPaginate}`;
export const CUSTOMER_ORDERS_API = `${BASE_URL_V2}shopping-orders/by-business-by-user-id/`;
export const BUSINESS_LIGHT_BY_SITE_DOMAIN_API = (subDomain) =>
  `${BASE_URL_V2}businesses/${subDomain}/light-by-site-domain/`;
export const DEALS_ITEMS_API = (categories) =>
  `${BASE_URL}deals/?${categories}`;
export const ALL_DEALS_API = (businessSlug) =>
  `${BASE_URL_V2}resources/by-business/?business_slug=${businessSlug}`;

export const BUSINESS_ORDERS_SORTED_BY_DELIVERER_API = (
  plugin,
  page,
  pageSize
) =>
  `${BASE_URL_V2}${plugin}-orders/by-business-id/?page=${page}&page_size=${pageSize}&status=50&status=60&status=70&status=80&status=90&status=100`;

export const ORDER_STATUS_PROGRESS_API = (id, plugin) =>
  `${BASE_URL_V2}${plugin}-orders/${id}/change-status/`;
export const ORDER_STATUS_CANCELLED_API = (id, plugin) =>
  `${BASE_URL_V2}${plugin}-orders/${id}/change-status/`;
export const ORDER_DELIVERIES_BY_DELIVERER = `${BASE_URL_V2}shopping-orders/by-business-id/`;

export const ORDER_ONLINE_PAYMENT_API = (id, plugin) =>
  `${BASE_URL_V2}${plugin}-orders/${id}/payment-transaction/`;
export const ORDER_DELIVERY_TIME_API = (id, plugin) =>
  `${BASE_URL_V2}${plugin}-orders/${id}/delivery/time/`;
export const ORDER_DELIVERER_API = (id, plugin) =>
  `${BASE_URL_V2}${plugin}-orders/${id}/courier/`;

export const ORDERS_LIST_DELIVERER_API = (plugin) =>
  `${BASE_URL_V2}${plugin}-orders/couriers/bulk-update/`;
export const REQUEST_ALOPEYK_API = (id, plugin) =>
  `${BASE_URL_V2}${plugin}-orders/${id}/alopeyk/trips/apply/`;
export const REQUEST_MIARE_API = (id, plugin) =>
  `${BASE_URL_V2}${plugin}-orders/${id}/miare/trips/apply/`;
export const VARIATIONS_BULK_UPDATE_API = `${BASE_URL_V2}variations/bulk-update/`;

// Plugins API
export const SET_PLUGIN_DATA_API = (slug) =>
  `${BASE_URL}businesses/${slug}/set_plugin_data/`;
export const BUSINESS_BUY_VISIT_CARD_SMS_API = (slug) =>
  `${BASE_URL}businesses/${slug}/buy_visit_card_sms/`;

// Transactions API
export const GET_TRANSACTION_API = (id) => `${BASE_URL}transactions/${id}/`;
export const GET_ORDER_TRANSACTION_API = (id) =>
  `${BASE_URL}order_transactions/${id}/`;

export const TRANSACTION_ZIBAL_API = (id) =>
  `${BASE_URL}order_transactions/${id}/pay_transaction/`;
export const TRANSACTION_API = (id, gateway) =>
  `${BASE_URL}transactions/${id}/${gateway}_gateway/`;

export const REPORTS_API = `${BASE_URL_V2}shopping-orders/report/`;
export const GROUP_PACKAGING_PRICE_ON_DEALS_API = (id) =>
  `${BASE_URL}deal_categories/${id}/group_packaging_price_on_deals/`;
export const DEALS_IMAGES_ITEM_CHANGE_ORDER_API = (id) =>
  `${BASE_URL}deals/images/${id}/change_order_by_business/`;

export const UPSERT_CRM_MEMBERSHIP_API = `${BASE_URL}crm_membership/bulk_upsert_by_pos_id/`;
export const UPSERT_USER_ADDRESS_API = `${BASE_URL}user_address/bulk_upsert_by_pos_id/`;
export const UPSERT_POS_ORDERS_API = `${BASE_URL_V2}shopping-orders/hami/`;
export const GET_BUSINESS_DEVICES_API = `${BASE_URL}pos_devices/by_business/`;
export const UPDATE_DEVICE_API = (licence_code) =>
  `${BASE_URL}pos_devices/${licence_code.toLowerCase()}/update_by_licence_key/`;

// Other
export const SERVER_TIME_API = `https://timeapi.io/api/Time/current/zone?timeZone=Iran`;
