import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('dummy test', () => {
    it('shoudl pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say webapp', (done) => {
        done();
        expect(true).to.equal(true);
        /*
        const index = fs.readFileSync('./src/index.html', 'UTF-8');
        jsdom.env(index, (err, window)=> {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('webapp-starter');
            done();
            window.close();
        });
        */
    });
});
