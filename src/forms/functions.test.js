import * as sut from './functions';

describe('form functions', () => {

    describe('createFormObject', () => {

        it('should return form object with default props for empty object', () => {
            expect(
                sut.createFormObject({})()
            ).toEqual({
                isValid: false,
                isSubmitted: false
            })
        })

        it('should return form object with matching control for object with one property', () => {
            expect(
                sut.createFormObject({
                    propertyA: 'A'
                })()
            ).toMatchObject({
                controls: {
                    propertyA: {
                        id: 'propertyA',
                        value: 'A',
                        displayName: 'Property A'
                    }
                }
            })
        })

        it('should return form object with matching control for object with two properties', () => {
            expect(
                sut.createFormObject({
                    propertyA: 'A',
                    propertyB: 'B'
                })()
            ).toMatchObject({
                controls: {
                    propertyA: {
                        id: 'propertyA',
                        value: 'A',
                        displayName: 'Property A'
                    },
                    propertyB: {
                        id: 'propertyB',
                        value: 'B',
                        displayName: 'Property B'
                    }
                }
            })
        })

        it('should return form object with overridden options if options supplied', () => {
            expect(
                sut.createFormObject({
                    propertyA: 'A'
                })({
                    propertyA: {
                        displayName: 'Test',
                        rules: [1]
                    }
                })
            ).toMatchObject({
                controls: {
                    propertyA: {
                        displayName: 'Test',
                        rules: [1]
                    }
                }
            })
        })

    })

    describe('getValueFromForm', () => {

        it('should return return empty object for null controls', () => {
            expect(
                sut.getValueFromForm({})
            ).toEqual({})
        })

        it('should return return empty object for no controls', () => {
            expect(
                sut.getValueFromForm({ controls: {} })
            ).toEqual({})
        })

        it('should return values of all form conrols', () => {
            expect(
                sut.getValueFromForm({
                    controls: {
                        propertyA: {
                            value: 'A'
                        },
                        propertyB: {
                            value: 'B'
                        }
                    }
                })
            ).toEqual({
                propertyA: 'A',
                propertyB: 'B'
            })
        })
    })

    describe('submit', () => {

        it('should mark form as submitted', () => {
            expect(
                sut.submit({
                    isSubmitted: false
                })
            ).toEqual({
                isSubmitted: true
            })
        })

        it('should mark controls as submitted', () => {
            expect(
                sut.submit({
                    controls: {
                        propertyA: {
                            isSubmitted: false
                        }
                    }
                })
            ).toMatchObject({
                controls: {
                    propertyA: {
                        isSubmitted: true
                    }
                }
            })
        })
    })

    describe('bindChangeHandlers', () => {
        it('should bind update func to controls', () => {
            expect(
                sut.bindChangeHandlers({
                    controls: {
                        propertyA: {}
                    }
                }, 1)
            ).toEqual({
                controls: {
                    propertyA: { update: 1 }
                }
            })
        })
    })
})