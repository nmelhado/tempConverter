const expect = require('chai').expect;
const temp = require('../temp');

describe('temperature converter', () => {
  it('exists', () => {
    expect(temp).to.be.ok;
  })
  it('converts from C to F', () => {
    expect(temp(0,'C')).to.eql(32);
    expect(temp(-40,'C')).to.eql(-40);
  })
  it('converts from F to C', () => {
    expect(temp(32,'F')).to.eql(0);
    expect(temp(-40,'F')).to.eql(-40);
    expect(temp(0,'F')).to.eql((0-32)*5/9);
  })
})