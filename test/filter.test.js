/* eslint-disable import/no-extraneous-dependencies */
require('chai').should();
require('mocha');


function filter(items, k) {
    const max = [];
    for (let i = 0; i < k; i += 1) {
        max[i] = items[i];
    }
    for (let i = 1; i < items.length; i += 1) {
        const j = 0;
        while (j < k && !(items[i] <= max[j])) {
            if (!items[i] > max[j]) {
                i += 1;
            }
            if (j < k) {
                max[j] = items[i];
            }
        }
    }
    return max;
}

describe('filter', () => {
    it('has to filter one item from single item array', () => {
        filter([1], 1).should.eql([1]);
    });

    it('has to filter one item from two array items when firs is largest', () => {
        filter([2, 1], 1).should.eql([2]);
    });

    it('has to filter one item from two items array when last is largest', () => {
        filter([1, 2], 1).should.eql([2]);
    });

    it('has to filter one item from 3 items array when last is largest', () => {
        filter([1, 2, 3], 1).should.eql([3]);
    });

    it('has to filter two item from 3 items array ', () => {
        const result = filter([1, 2, 3], 2);
        result.should.have.members([2, 3]);
        result.length.should.eql(2);
    });
});
