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

        it('should return length if items is not empty', () => {
            const state = {
                basket: {
                    items: [{}]
                }
            }
            expect(sut.selectBasketItemsCount(state)).toEqual(1);
        })
    })
})