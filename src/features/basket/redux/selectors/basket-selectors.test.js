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
})