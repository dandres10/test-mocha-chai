
describe.only('Hooks', () => {
    before(() => {
        console.log('before all - se ejecuta al inicio una vez')
    });

    after(() => {
        console.log('afther all - se ejecuta al final de todas la pruebas')
    });

    beforeEach(() => {
        console.log('beforeEach all - se ejecuta antes de todos los its')
    });

    afterEach(() => {
        console.log('afterEach all - despues de todos los afterEach')
    });

    it('prueba 1', () => {
        console.log('test 1')
    })
    it('prueba 2', () => {
        console.log('test 2')
    })

});