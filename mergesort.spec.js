'use strict'
//forces errors to be thrown.

describe('Split Array function', function () {
  let array = [4, 1, 6, 8, 3, 5, 8];

  beforeEach(function () {
    spyOn(window, 'mergeSort').and.callThrough();
  });

  it('handles an empty array', function () {
    expect(mergeSort([])).toEqual([]);
  });

  it('splits an array into two arrays', function () {
    expect(split([1, 3, 5, 2])).toEqual([[1, 3], [5, 2]]);
  });
  it('merges 2 sorted arrays into 1 sorted array', function () {
    expect(merge([1, 3], [2, 5])).toEqual([1, 2, 3, 5])
  })
});

