import React from "react";
import { priceFormatter } from "../../../../utils/helper";

function PriceSection({ order }) {
  let cost = "رایگان";
  if (+order.delivery_price === 999999) cost = "خارج از محدوده ارسال";
  else if (+order.delivery_price !== 0)
    cost = `${priceFormatter(+order.delivery_price)}`;
  return (
    <div className="py-2 u-relative u-background-white box-shadow u-border-radius-8 mr-4 mt-4">
      <div className="d-flex flex-column px-3">
        <div className="d-flex flex-row justify-content-between mt-1">
          <span className="u-textBlack">قیمت اولیه: </span>
          <span className="u-text-darkest-grey">
            {priceFormatter(order.total_items_initial_price)}
            <span className="u-font-semi-small"> تومان</span>
          </span>
        </div>
        <div className="d-flex flex-row justify-content-between mt-1">
          <span className="u-textBlack">مجموع تخفیف‌ها و اعتبار هدیه: </span>
          <span className="u-text-darkest-grey">
            {priceFormatter(order.total_discount_amount)}
            <span
              className="u-fontWeightBold"
              style={{ paddingRight: 2, paddingLeft: 5 }}
            >
              {order.total_discount_amount ? "-" : null}
            </span>
            <span className="u-font-semi-small"> تومان</span>
          </span>
        </div>
        {order.gift_credit_used ? (
          <div className="d-flex flex-row justify-content-between mt-1">
            <span className="u-textBlack">اعتبار هدیه: </span>
            <span className="u-text-darkest-grey">
              {priceFormatter(order.gift_credit_used)}
              <span
                className="u-fontWeightBold"
                style={{ paddingRight: 2, paddingLeft: 5 }}
              >
                -
              </span>
              <span className="u-font-semi-small"> تومان</span>
            </span>
          </div>
        ) : null}

        {order.discount_code_amount ? (
          <div className="d-flex flex-row justify-content-between mt-1">
            <span className="u-textBlack">کد تخفیف: </span>
            <span className="u-text-darkest-grey">
              {priceFormatter(order.discount_code_amount)}
              <span
                className="u-fontWeightBold"
                style={{ paddingRight: 2, paddingLeft: 5 }}
              >
                -
              </span>
              <span className="u-font-semi-small"> تومان</span>
            </span>
          </div>
        ) : null}

        {order.total_packaging_price ? (
          <div className="d-flex flex-row justify-content-between mt-1">
            <span className="u-textBlack">هزینه بسته‌بندی: </span>
            <span className="u-text-darkest-grey">
              {priceFormatter(order.total_packaging_price)}
              <span className="u-font-semi-small"> تومان</span>
            </span>
          </div>
        ) : null}
        <div className="d-flex flex-row justify-content-between mt-1">
          <span className="u-textBlack">هزینه ارسال: </span>
          <span>
            <span className="u-text-darkest-grey">{cost}</span>
            {+order.delivery_price !== 0 && (
              <span className="u-font-semi-small"> تومان</span>
            )}
          </span>
        </div>
        {order.taxing_price ? (
          <div className="d-flex flex-row justify-content-between mt-1">
            <span className="u-textBlack">مالیات بر ارزش افزوده: </span>
            <span className="u-text-darkest-grey">
              {priceFormatter(order.taxing_price)}
              <span className="u-font-semi-small"> تومان</span>
            </span>
          </div>
        ) : null}
        <div className="d-flex flex-row justify-content-between mt-1">
          <span className="u-textBlack">{"کل مبلغ فاکتور: "}</span>
          <span className="u-text-darkest-grey">
              {priceFormatter(order.taxing_price)}
            <span className="u-font-semi-small"> تومان</span>
            </span>
        </div>
        <div className="d-flex flex-row justify-content-between mt-1">
          <span className="u-textBlack">{"مقدار مبلغ پرداخت شده: "}</span>
          <span className="u-text-darkest-grey">
              {priceFormatter(order.paid_price)}
            <span className="u-font-semi-small"> تومان</span>
            </span>
        </div>
        <div className="flex-1 u-fontMedium u-fontWeightBold mt-2 u-text-black">
          <span className="ml-1">
            {order?.should_pay !== order.total_price ? "باقیمانده جهت پرداخت:"
              : "مبلغ قابل پرداخت:"}
          </span>
          <span>{priceFormatter(order?.should_pay)}</span>
          <span>
            {' تومان '}
          </span>
          {order.should_pay !== 0 ?
            <span className={'u-text-red'}>
            (این مبلغ باید از مشتری دریافت شود)
          </span> : <span className={'u-text-green'}>
            (مبلغ سفارش پرداخت شده است)
          </span>}
        </div>
      </div>
    </div>
  );
}

export default PriceSection;
