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

    describe(actions.removeItemFromBasketAction.type, () => {
        it('should do nothing if basket is undefined', () => {
            const state = undefined;
            expect(
                reducer(state, actions.removeItemFromBasketAction.create(1))
            ).toEqual([])
        });

        it('should do nothing if basket is empty', () => {
            const state = [];
            expect(
                reducer(state, actions.removeItemFromBasketAction.create(1))
            ).toEqual([])
        });

        it('should do nothing if basket is not empty but id on action not in basket', () => {
            const state = [
                { productId: 1 }
            ];
            expect(
                reducer(state, actions.removeItemFromBasketAction.create(2))
            ).toEqual([
                { productId: 1 }
            ]);
        });

        it('should remove item from basket if productId is in basket', () => {
            const state = [
                { productId: 1 },
                { productId: 2 },
                { productId: 3 }
            ];
            expect(
                reducer(state, actions.removeItemFromBasketAction.create(2))
            ).toEqual([
                { productId: 1 },
                { productId: 3 }
            ]);
        });
    })

    describe(actions.setItemQuantityInBasketAction.type, () => {
        it('should do nothing if basket is undefined', () => {
            const state = undefined;
            expect(
                reducer(state, actions.setItemQuantityInBasketAction.create({ productId: 1 }))
            ).toEqual([])
        });

        it('should do nothing if basket is empty', () => {
            const state = [];
            expect(
                reducer(state, actions.setItemQuantityInBasketAction.create({ productId: 1 }))
            ).toEqual([])
        });

        it('should do nothing if basket is not empty but id on action not in basket', () => {
            const state = [
                { productId: 1 }
            ];
            expect(
                reducer(state, actions.setItemQuantityInBasketAction.create({ productId: 2, quantity: 1 }))
            ).toEqual([
                { productId: 1 }
            ]);
        });

        it('should change quantity of item in basket when productId matches and item is first of 3', () => {
            const state = [
                { productId: 1, quantity: 1 },
                { productId: 2, quantity: 1 },
                { productId: 3, quantity: 1 }
            ];
            expect(
                reducer(state, actions.setItemQuantityInBasketAction.create({ productId: 1, quantity: 2 }))
            ).toEqual([
                { productId: 1, quantity: 2 },
                { productId: 2, quantity: 1 },
                { productId: 3, quantity: 1 }
            ])
        });

        it('should change quantity of item in basket when productId matches and item is second of 3', () => {
            const state = [
                { productId: 1, quantity: 1 },
                { productId: 2, quantity: 1 },
                { productId: 3, quantity: 1 }
            ];
            expect(
                reducer(state, actions.setItemQuantityInBasketAction.create({ productId: 2, quantity: 2 }))
            ).toEqual([
                { productId: 1, quantity: 1 },
                { productId: 2, quantity: 2 },
                { productId: 3, quantity: 1 }
            ])
        });

        it('should change quantity of item in basket when productId matches and item is third of 3', () => {
            const state = [
                { productId: 1, quantity: 1 },
                { productId: 2, quantity: 1 },
                { productId: 3, quantity: 1 }
            ];
            expect(
                reducer(state, actions.setItemQuantityInBasketAction.create({ productId: 3, quantity: 2 }))
            ).toEqual([
                { productId: 1, quantity: 1 },
                { productId: 2, quantity: 1 },
                { productId: 3, quantity: 2 }
            ])
        });
    })
})