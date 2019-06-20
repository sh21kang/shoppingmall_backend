"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CART_FRAGMENT = exports.SELECTION_FRAGMENT = exports.PRODUCT_FRAGMENT = exports.FILE_FRAGMENT = void 0;
const FILE_FRAGMENT = `
    id
    url
`;
exports.FILE_FRAGMENT = FILE_FRAGMENT;
const PRODUCT_FRAGMENT = `
    id
    name
    price
    type
    count
    tags
    createdAt
    shippingFee
    files{
        ${FILE_FRAGMENT}
    }
`;
exports.PRODUCT_FRAGMENT = PRODUCT_FRAGMENT;
const SELECTION_FRAGMENT = `
   
    id
    
    product{
        ${PRODUCT_FRAGMENT}
    }
    count
    color
    size
`;
exports.SELECTION_FRAGMENT = SELECTION_FRAGMENT;
const CART_FRAGMENT = `
    fragment CartParts on Cart {
    id
    selection{
        ${SELECTION_FRAGMENT}
    }
    createdAt
}
`;
exports.CART_FRAGMENT = CART_FRAGMENT;