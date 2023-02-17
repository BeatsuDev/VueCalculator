import { expect, describe, it, beforeEach } from "vitest";
import { DOMWrapper, mount, VueWrapper } from "@vue/test-utils";
import SimpleCalculator from "../SimpleCalculator.vue";

describe("SimpleCalculator", () => {
    let wrapper: VueWrapper;
    let number3: DOMWrapper<Element>;
    let ans: DOMWrapper<Element>;
    let display: DOMWrapper<Element>;

    beforeEach(() => {
        wrapper = mount(SimpleCalculator);

        number3 = wrapper.find("#buttons > div:nth-child(15)");
        ans = wrapper.find("#buttons > div:nth-child(19)");
        display = wrapper.find("#display");
    });

    it("should render", () => {
        const wrapper = mount(SimpleCalculator);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("clicking a number should run addSymbol() method", async () => {
        await number3.trigger("click");
        expect(wrapper.find("#display").text()).toBe("3");
    });

    it("should add two numbers", async () => {
        const plus = wrapper.find("#buttons > div:nth-child(12)");

        await number3.trigger("click")
        await plus.trigger("click");
        await number3.trigger("click");
        await ans.trigger("click");

        expect(display.text()).toBe("6");
    });
    
    it("should subtract two numbers", async () => {
        const minus = wrapper.find("#buttons > div:nth-child(16)");
        
        await number3.trigger("click");
        await minus.trigger("click");
        await number3.trigger("click");
        await ans.trigger("click");

        expect(wrapper.find("#display").text()).toBe("0");
    });

    it("should multiply two numbers", async () => {
        const multiply = wrapper.find("#buttons > div:nth-child(4)");
        
        await number3.trigger("click");
        await multiply.trigger("click");
        await number3.trigger("click");
        await ans.trigger("click");

        expect(wrapper.find("#display").text()).toBe("9");
    });

    it("should divide two numbers", async () => {
        const divide = wrapper.find("#buttons > div:nth-child(8)");
        
        await number3.trigger("click");
        await divide.trigger("click");
        await number3.trigger("click");
        await ans.trigger("click");

        expect(wrapper.find("#display").text()).toBe("1");
    });

    it("should clear the display", async () => {
        const clear = wrapper.find("#buttons > div:nth-child(17)");
        
        await number3.trigger("click");
        await clear.trigger("click");

        expect(wrapper.find("#display").text()).toEqual("");
    });

    it("should show error on divide by zero", async () => {
        const divide = wrapper.find("#buttons > div:nth-child(8)");
        
        await number3.trigger("click");
        await divide.trigger("click");
        await ans.trigger("click");

        expect(wrapper.find("#display").text()).toBe("Error");
    });

    it("should show error on invalid operation", async () => {
        const plus = wrapper.find("#buttons > div:nth-child(12)");
        await plus.trigger("click");
        await plus.trigger("click");
        await number3.trigger("click");
        await ans.trigger("click");

        expect(wrapper.find("#display").text()).toBe("Error");
    });
});