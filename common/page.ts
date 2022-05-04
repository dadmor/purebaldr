export const getSlot = (type:any, check:any) => (check[type?.query?.slugPath?.[0]] || check['default']);
export const getModal = (type:any, check:any) => (type?.query?.slugPath?.[type?.query?.slugPath?.length-2] === 'modal' ? check[type?.query?.slugPath?.[type?.query?.slugPath?.length-1]] : check['default'] );
