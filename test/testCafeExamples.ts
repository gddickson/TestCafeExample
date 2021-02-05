import {Selector} from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`

    .beforeEach( async t => {
        await t
            console.log("Before Each")
    })
    .afterEach( async t => {
        await t
            console.log("After Eeach")
    });

test
    .meta('testId', 't-0005')
    .meta({severity: 'critical', testAPIVersion: '1.0'})

    ('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!')

        console.log("completed first Test");

})

test
    .meta('testId', 't-0006')
    .meta({severity: 'critical', testAPIVersion: '1.0'})

    .before( async t => {
        await t
           console.log("****************Before Test 2");
    })
    ('My Second test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!')
        console.log("completed first Test");
    })
    .after( async t => {
        await t
        console.log("****************After Test 2");
    });