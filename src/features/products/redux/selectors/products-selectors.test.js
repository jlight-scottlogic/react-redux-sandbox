import * as sut from './products-selectors';

describe('products selectors', () => {
    
    describe('selectProductsListItems', () => {
        it('should return items', () => {
            expect(sut.selectProductsListItems({
                products: {
                    list: {
                        items: [{ a: 1 }]
                    }
                }
            }))
                .toEqual([{ a: 1 }])
        })
    });

});