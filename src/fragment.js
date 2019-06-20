



export const FILE_FRAGMENT = `
    id
    url
`;
export const PRODUCT_FRAGMENT =`
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
`

export const SELECTION_FRAGMENT = `
   
    id
    
    product{
        ${PRODUCT_FRAGMENT}
    }
    count
    color
    size
`;

export const CART_FRAGMENT = `
    fragment CartParts on Cart {
    id
    selection{
        ${SELECTION_FRAGMENT}
    }
    createdAt
}
`;