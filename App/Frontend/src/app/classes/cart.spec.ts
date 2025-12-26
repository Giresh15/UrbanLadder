import { Cart } from './cart';

describe('Cart', () => {
  it('should create an instance', () => {
    expect(new Cart(0, '', '', 0, '', 0)).toBeTruthy();
  });
});
