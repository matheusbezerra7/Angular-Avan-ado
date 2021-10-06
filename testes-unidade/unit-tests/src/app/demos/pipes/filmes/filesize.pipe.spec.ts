import { FileSizePipe } from "./filesize.pipe";


describe('FileSizePipe', () => {
    describe('Teste Isolado', () => {
        
        const pipe = new FileSizePipe();

        it('Deve converter bytes para MB', () => {
            expect(pipe.transform(123456789)).toBe('117.74 MB');
            expect(pipe.transform(987654321)).toBe('941.90 MB');
        });

        it('Deve converter bytes para MB', () => {
            expect(pipe.transform(1342177280)).toBe('1.25 GB');
        });
    });
});
