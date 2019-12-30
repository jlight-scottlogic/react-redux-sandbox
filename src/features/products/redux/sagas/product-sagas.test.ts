import * as sut from './product-sagas';
import * as actions from '../actions/products-actions';
import { Product } from '../types/products-types';
import { call, all, put } from 'redux-saga/effects';
import * as api from '../../../../client/fake-client';
import { push } from 'connected-react-router';
import categoryRoutes from '../../../categories/routes/routes';
import { showAlertAction } from '../../../../components/alert/redux/alert-actions';

const defaultProduct: Product = {
    id: 0,
    name: '',
    description: '',
    categoryId: 0
}

describe('create products saga', (() => {
    it('should trigger successful api call then a success action and redirect', () => {
        const saga = sut.createProduct(actions.createProductAction.create(defaultProduct));

        // make api call first
        expect(saga.next().value).toEqual(call(api.post, 'products', defaultProduct));
        
        // dispatch success and redirect after
        expect(saga.next().value).toEqual(all([
            put(actions.createProductSuccessAction.create(defaultProduct)),
            put(push(categoryRoutes.details(defaultProduct.categoryId)))
        ]));
    })

    it('should trigger unsuccessful api call then error action', () => {
        const saga = sut.createProduct(actions.createProductAction.create(defaultProduct));

        // make api call first
        expect(saga.next().value).toEqual(call(api.post, 'products', defaultProduct));
        
        // dispatch error alert
        expect(saga.throw('error').value).toEqual(put(showAlertAction.create({ style: 'danger', message: 'error!' })));
    })
}))