import { ToUpperCasePipe } from './to-upper-case.pipe';

describe('ToUpperCasePipe', () => {
  it('create an instance', () => {
    const pipe = new ToUpperCasePipe();
    expect(pipe).toBeTruthy();
  });
  it('Should turn given string to upper case', () => {
    const testData = "this is a test";
    const expectedResult = "THIS IS A TEST";

    const pipe = new ToUpperCasePipe();
    const result = pipe.transform(testData);

    expect(result).toBe(expectedResult);
  });
});
