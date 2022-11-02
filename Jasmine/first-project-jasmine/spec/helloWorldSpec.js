describe ('helloWorld', () => {
    it ('returns hello world', () => {
        let actual = helloWorld();
        expect(actual).toBe('hello world');
    })
});