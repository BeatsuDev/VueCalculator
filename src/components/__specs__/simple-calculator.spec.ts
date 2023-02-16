import { expect, describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import SimpleCalculator from "../SimpleCalculator.vue";

describe ("SimpleCalculator", () => {
    it("should render", () => {
        const wrapper = mount(SimpleCalculator);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("should add two numbers", async () => {
        const wrapper = mount(SimpleCalculator);

        const number3 = wrapper.find("#buttons > div:nth-child(15)");
        const plus = wrapper.find("#buttons > div:nth-child(12)");
        const ans = wrapper.find("#buttons > div:nth-child(16)");
        
        number3.trigger("click");
        await wrapper.vm.$nextTick();
        plus.trigger("click");
        await wrapper.vm.$nextTick();
        number3.trigger("click");
        await wrapper.vm.$nextTick();
        ans.trigger("click");
        await wrapper.vm.$nextTick();

        console.log("wrapper.html()", wrapper.html());

        expect(wrapper.find("#display").text()).toBe("6");
    });
    

});