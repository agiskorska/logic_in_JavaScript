'use strict';
const expect = require('chai').expect;
const rewire = require('rewire');

let main = rewire('../main')

let humans = [
    { name: "Beti", age: 32 },
    { name: "Aki", age: 29 },
    { name: "Elowen", age: 8 },
    { name: "Artemis", age: 12 }
]

describe('ageCheck', function() {
    let ageCheck = main.__get__('ageCheck');
    let humans = [
        { name: "Beti", age: 32 },
        { name: "Aki", age: 29 },
        { name: "Elowen", age: 8 },
        { name: "Artemis", age: 12 }
    ]

    it('returns an array', () => {
        expect(ageCheck(humans)).to.be.a('array');
    });

    it('returns an array that includes the people who are over 18', () => {
        expect(ageCheck(humans)[1].name).to.equal("Aki");
    });
});

describe('namesPlease', function() {
    let namesPlease = main.__get__('namesPlease');

    it('returns an array', () => {
        expect(namesPlease(humans)).to.be.a('array');
    });

    it('returns an array that includes the names of the people who are over 18', () => {
        expect(namesPlease(humans)[0]).to.equal("Beti");
    });
});

describe('cumulativeAge', function() {
    let cumulativeAge = main.__get__('cumulativeAge');

    it('returns a number', () => {
        expect(cumulativeAge(humans)).to.be.a('number');
    });

    it('returns the combined age of all the humans', () => {
        expect(cumulativeAge(humans)).to.equal(81);
    });
});