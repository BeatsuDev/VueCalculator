import FeedbackForm from '../FeedbackForm.vue';
import { expect, describe, it } from 'vitest';
import { mount } from '@vue/test-utils';

describe ('FeedbackForm', () => {
    it('should render', () => {
        const wrapper = mount(FeedbackForm);
        expect(wrapper.html()).toMatchSnapshot();
    });
});