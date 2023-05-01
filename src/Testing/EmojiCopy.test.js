import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "../App";


describe("Emoji Kopyalama Testi", () => {

    beforeEach(() => {
        act(() => {
            render(<App />)
        });
    });

    test("Tıklanan emoji kopyalanıyor mu?", () => {

        const copyMock = jest.fn(() => true);
        Object.defineProperty(document, 'execCommand', { value: copyMock });

        const emojiCopy = screen.getByText("100");

        act(() => {
            userEvent.click(emojiCopy);
        });

        expect(copyMock).toHaveBeenCalledWith('copy');

        // expect(emojiCopy.parentElement.getAttribute("data-clipboard-text")).toMatch("💯")

    });
});