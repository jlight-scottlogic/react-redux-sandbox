import reducer from './basket-items-reducer';
import * as actions from '../actions/basket-actions';

describe('basket items reducer', () => {
    describe(actions.addItemToBasketAction.type, () => {

        it('should add product to empty array with count of 1', () => {
            const state = [];
            expect(
                reducer(state, actions.addItemToBasketAction.create({ id: 1 }))
            ).toEqual([
                {
                    productId: 1,
                    quantity: 1
                }
            ])
        })

        it('should add different product to populated array with count of 1', () => {
            const state = [
                { productId: 1, quantity: 1 }
            ];
            expect(
                reducer(state, actions.addItemToBasketAction.create({ id: 2 }))
            ).toEqual([
                {
                    productId: 1,
                    quantity: 1
                },
                {
                    productId: 2,
                    quantity: 1
                }
            ])
        })

        it('should add same product to populated array with count of 2', () => {
            const state = [
                { productId: 1, quantity: 1 }
            ];
            expect(
                reducer(state, actions.addItemToBasketAction.create({ id: 1 }))
            ).toEqual([
                {
                    productId: 1,
                    quantity: 2
                }
            ])
        })

        it('should add same product to populated array with count of 2 when item is first of 3', () => {
            const state = [
                { productId: 1, quantity: 1 },
                { productId: 2, quantity: 1 },
                { productId: 3, quantity: 1 }
            ];
            expect(
                reducer(state, actions.addItemToBasketAction.create({ id: 1 }))
            ).toEqual([
                { productId: 1, quantity: 2 },
                { productId: 2, quantity: 1 },
                { productId: 3, quantity: 1 }
            ])
        })

        it('should add same product to populated array with count of 2 when item is second of 3', () => {
            const state = [
                { productId: 1, quantity: 1 },
                { productId: 2, quantity: 1 },
                { productId: 3, quantity: 1 }
            ];
            expect(
                reducer(state, actions.addItemToBasketAction.create({ id: 2 }))
            ).toEqual([
                { productId: 1, quantity: 1 },
                { productId: 2, quantity: 2 },
                { productId: 3, quantity: 1 }
            ])
        })

        it('should add same product to populated array with count of 2 when item is last of 3', () => {
            const state = [
                { productId: 1, quantity: 1 },
                { productId: 2, quantity: 1 },
                { productId: 3, quantity: 1 }
            ];
            expect(
                reducer(state, actions.addItemToBasketAction.create({ id: 3 }))
            ).toEqual([
                { productId: 1, quantity: 1 },
                { productId: 2, quantity: 1 },
                { productId: 3, quantity: 2 }
            ])
        })
    })
})