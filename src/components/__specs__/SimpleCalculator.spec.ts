import { expect, describe, test } from 'vitest';
import { mount } from '@vue/test-utils';
import SimpleCalculator from '../SimpleCalculator.vue';

describe ('SimpleCalculator', () => {
    test('should render', () => {
        const wrapper = mount(SimpleCalculator);
        expect(wrapper.html()).toMatchSnapshot();
    });
});

describe('sum test', () => {
	test('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
});