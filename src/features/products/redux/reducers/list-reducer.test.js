import sut from './list-reducer';
import * as actions from '../actions/products-actions';

describe('products reducer', () => {

    it('should return the initial state', () => {
        expect(sut(undefined, {})).toEqual({
            items: [],
            isLoading: false
        })
    })

    describe(actions.createProductAction.type, () => {
        it('should set loading flag only', () => {
            expect(
                sut({
                    isLoading: false,
                    items: [{ a: 1 }]
                },
                    actions.createProductAction.create({}))
            ).toEqual({
                isLoading: true,
                items: [{ a: 1 }]
            })
        })
    })

    describe(actions.createProductSuccessAction.type, () => {
        it('should set loading flag and add product to list', () => {
            expect(
                sut({
                    isLoading: true,
                    items: []
                },
                    actions.createProductSuccessAction.create({ id: 1 }))
            ).toEqual({
                isLoading: false,
                items: [{ id: 1 }]
            })
        })
    })

    describe(actions.loadProductsAction.type, () => {
        it('should set loading flag only', () => {
            expect(
                sut({
                    isLoading: false,
                    items: [{ a: 1 }]
                },
                    actions.loadProductsAction.create())
            ).toEqual({
                isLoading: true,
                items: [{ a: 1 }]
            })
        })
    })

    describe(actions.loadProductsSuccessAction.type, () => {
        it('should set loading flag and set list', () => {
            expect(
                sut({
                    isLoading: true,
                    items: []
                },
                    actions.loadProductsSuccessAction.create([{ id: 1 }]))
            ).toEqual({
                isLoading: false,
                items: [{ id: 1 }]
            })
        })
    });
});