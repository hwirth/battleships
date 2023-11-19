/**
 * @jest-environment jsdom
 */

import { Application } from '../src/main.js';

let app;
beforeEach(()=>{
    app = new Application();
})

test('Application Is Application', ()=>{
    expect(app).toBeInstanceOf(Application);
});

test('Has public property', ()=>{
    expect(app.property).toBe(123);
}) 