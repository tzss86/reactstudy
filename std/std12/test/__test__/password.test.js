describe('method password', ()=>{
  let password;
  let generatePassword = require('../password');

  it('包含8位字母或数字', (done)=>{
    password = generatePassword();
    expect(password).toMatch(/^[a-z0-9]{8}$/);
    done();
  })
})
