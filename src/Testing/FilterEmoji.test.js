import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom';
import App from "../App";
import userEvent from "@testing-library/user-event";


describe("Filter Emoji Testi", () => {

    beforeEach(() => {
        act(() => {
            render(<App />);
        });
    });

    test("Verilen Liste Filtrelenecek mi?", () => {

        const emojiList = [
            {
                "title": "100",
                "symbol": "💯",
                "keywords":
                    "hundred points symbol symbol wow wow win win perfect perfect parties parties"
            },
            {
                "title": "1234",
                "symbol": "🔢",
                "keywords": "input symbol for numbers symbol"
            },
            {
                "title": "Grinning",
                "symbol": "😀",
                "keywords": "grinning face happy smiley emotion emotion"
            },
        ];

        const input = screen.getByPlaceholderText("Search Your Emoji");

        const inputValue = "happy";


        act(() => {
            userEvent.type(input, inputValue);
        });

        emojiList.map((emoji) => {
            emoji.keywords.toLowerCase().includes(input.value.toLowerCase()) && expect(screen.getByText(emoji.title)).toBeInTheDocument();
        });

        // emojiList
        //     .filter(emoji => emoji.keywords.toLowerCase().includes(input.value.toLowerCase()))
        //     .map(emoji => expect(screen.getByText(emoji.title)).toBeInTheDocument());
    });
}); 