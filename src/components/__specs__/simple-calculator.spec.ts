import { expect, describe, test } from "vitest";
import { mount } from "@vue/test-utils";
import SimpleCalculator from "../SimpleCalculator.vue";

describe ("SimpleCalculator", () => {
    test("should render", () => {
        const wrapper = mount(SimpleCalculator);
        expect(wrapper.html()).toMatchSnapshot();
    });

    test("should add two numbers", () => {
        const wrapper = mount(SimpleCalculator);
        wrapper.find("#display").element.innerHTML = "1+2";
        console.log(wrapper.find("#ans-btn").trigger("click"));
        expect(wrapper.find("#display").text()).toBe("3");
        return true;
    });
});