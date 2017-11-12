const twoFer = require('./two-fer');

describe('twoFer()', () => {
  it('no name given', () => {
    const name = '';
    expect(twoFer(name)).toEqual('One for you, one for me.');
  });

  it('a name given', () => {
    const name = 'Alice';
    expect(twoFer(name)).toEqual('One for Alice, one for me.');
  });

  it('another name given', () => {
    const name = 'Bob';
    expect(twoFer(name)).toEqual('One for Bob, one for me.');
  });
});
