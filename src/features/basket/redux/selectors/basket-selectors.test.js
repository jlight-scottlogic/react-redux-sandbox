import * as sut from './basket-selectors';

describe('basket selectors', () => {
    describe('selectBasketItemsCount', () => {
        it('should return 0 if items is null', () => {
            const state = {
                basket: {
                    items: null
                }
            }
            expect(sut.selectBasketItemsCount(state)).toEqual(0);
        })

        it('should return 0 if items is empty', () => {
            const state = {
                basket: {
                    items: []
                }
            }
            expect(sut.selectBasketItemsCount(state)).toEqual(0);
        })

        it('should return quantity if items has one element', () => {
            const state = {
                basket: {
                    items: [{ productId: 0, quantity: 1 }]
                }
            }
            expect(sut.selectBasketItemsCount(state)).toEqual(1);
        })

        it('should return sum of quantities if items has multiple elements', () => {
            const state = {
                basket: {
                    items: [
                        { productId: 0, quantity: 1 },
                        { productId: 1, quantity: 2 }
                    ]
                }
            }
            expect(sut.selectBasketItemsCount(state)).toEqual(3);
        })
    })

    describe('selectBasketItemIds', () => {
        it('should return [] if items is null', () => {
            const state = {
                basket: {
                    items: null
                }
            }
            expect(sut.selectBasketItemsIds(state)).toEqual([]);
        })

        it('should return [] if items is empty', () => {
            const state = {
                basket: {
                    items: []
                }
            }
            expect(sut.selectBasketItemsIds(state)).toEqual([]);
        })

        it('should return id if items has one element', () => {
            const state = {
                basket: {
                    items: [{ productId: 1 }]
                }
            }
            expect(sut.selectBasketItemsIds(state)).toEqual([1]);
        })

        it('should return ids if items has multiple elements', () => {
            const state = {
                basket: {
                    items: [
                        { productId: 1 },
                        { productId: 2 }
                    ]
                }
            }
            expect(sut.selectBasketItemsIds(state)).toEqual([1, 2]);
        })
    })

    describe('selectBasketContents', () => {
        it('should return [] when basket is empty', () => {
            const state = {
                basket: {
                    items: []
                },
                products: {
                    list: {}
                }
            }
            expect(sut.selectBasketContents(state)).toEqual([]);
        })

        it('should return [] when basket is not empty but products is', () => {
            const state = {
                basket: {
                    items: [
                        { productId: 1 }
                    ]
                },
                products: {
                    list: {
                        items: []
                    }
                }
            }
            expect(sut.selectBasketContents(state)).toEqual([]);
        })

        it('should return [] when basket and products is populated but they dont match', () => {
            const state = {
                basket: {
                    items: [
                        { productId: 1 }
                    ]
                },
                products: {
                    list: {
                        items: [
                            { id: 2 }
                        ]
                    }
                }
            }
            expect(sut.selectBasketContents(state)).toEqual([]);
        })

        it('should return basket item when basket and products is populated and they match', () => {
            const state = {
                basket: {
                    items: [
                        { productId: 1, quantity: 2 },
                        { productId: 2, quantity: 3 },
                    ]
                },
                products: {
                    list: {
                        items: [
                            { id: 1 },
                            { id: 2 },
                        ]
                    }
                }
            }
            expect(sut.selectBasketContents(state)).toEqual([
                {
                    product: { id: 1 },
                    quantity: 2
                },
                {
                    product: { id: 2 },
                    quantity: 3
                }
            ]);
        })
    })
})