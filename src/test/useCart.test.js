
import { renderHook, act, waitFor } from '@testing-library/react';
import { useCart } from '../functions/functions'; 

describe('useCart hook', () => {

    // The test case below tests the following funtions; addToCart & removeFromCart
  test('addToCart increments and removeFromCart decrements & deletes when zero', () => {
    const { result } = renderHook(() => useCart());

    // Test cases for AddToCart
    act(() => {
      result.current.addToCart('A');
    });
    expect(result.current.cart).toEqual({ A: 1 });

    act(() => {
      result.current.addToCart('A');
      result.current.addToCart('B');
    });
    expect(result.current.cart).toEqual({ A: 2, B: 1 });


    // Test cases for removeFromCart

    act(() => {
      result.current.removeFromCart('A');
    });
    expect(result.current.cart).toEqual({ A: 1, B: 1 });

    act(() => {
      result.current.removeFromCart('A');
    });
    expect(result.current.cart).toEqual({ B: 1 });


    // Edge case for none existent characters

    act(() => {
      result.current.removeFromCart('Z');
    });
    expect(result.current.cart).toEqual({ B: 1 });
  });

  test('GetEachItemPriceTotal handles specials and normal pricing', () => {
    const { result } = renderHook(() => useCart());

    // This test case tests price of each item (for item A with special offer available)

    expect(result.current.GetEachItemPriceTotal('A', 3)).toBeCloseTo(1.30, 2);
    expect(result.current.GetEachItemPriceTotal('A', 4)).toBeCloseTo(1.80, 2); // 3-for-1.30 + 1*0.50

    // This test case tests price of each item (for item B with special offer available)
    expect(result.current.GetEachItemPriceTotal('B', 2)).toBeCloseTo(0.45, 2);
    expect(result.current.GetEachItemPriceTotal('B', 3)).toBeCloseTo(0.75, 2); // 0.45 + 0.30

    // This test case tests for item C
    expect(result.current.GetEachItemPriceTotal('C', 5)).toBeCloseTo(1.0, 2);

    // This test case tests for character that do not exist
    expect(result.current.GetEachItemPriceTotal('NOPE', 2)).toBe(0);
  });

  test('calculateTotalPrice sums per-item totals correctly', () => {
    const { result } = renderHook(() => useCart());

    // This tests the calculateTotalPrice funtion
    const exampleCart = { A: 3, B: 2, C: 1 };
    expect(result.current.calculateTotalPrice(exampleCart)).toBeCloseTo(1.95, 2);
  });


});
