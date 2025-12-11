import { HelloWorld } from "./hello-world";

describe('Hello World', () => {
    it('should return "Hello World"', () => {
        expect(new HelloWorld().sayIt()).toBe('Hello World');
    });
});
