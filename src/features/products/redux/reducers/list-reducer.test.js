import sut from './list-reducer';
import * as actions from '../actions/products-actions';

describe('products reducer', () => {

    it('should return the initial state', () => {
        expect(sut(undefined, {})).toEqual({
            items: [],
            isLoading: false
        })
    })

    it('should handle LOAD_PRODUCTS', () => {
        expect(
            sut({
                isLoading: false,
                items: [{ a: 1 }]
            },
                actions.loadProductsAction.create())
        ).toEqual({
            isLoading: true,
            items: []
        })
    })

    it('should handle LOAD_PRODUCTS_SUCCESS', () => {
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