import { describe, it } from 'mocha';
import { expect } from 'chai';

import * as HttpContext from '../src/index';

describe('Http Context', () => {
    it('expect it works', () => {
      HttpContext.scope();
      HttpContext.set('test', 'ABCD');
      setTimeout(() => {
          const test = HttpContext.get('test');
          expect(test).to.equal('ABCD');
      })
    })
  

    it('expect work at async resource', async () => {

        function asyncCall (id: number) {
            return new Promise(resolve => {
                HttpContext.scope();
                HttpContext.set('test', id)
                setTimeout(() => {
                    const test = HttpContext.get('test')
                    resolve(test)
                }, 100)
            })
        }

        asyncCall(1).then(v => expect(v).to.equal(1))
        asyncCall(2).then(v => expect(v).to.equal(2))
    })
});
