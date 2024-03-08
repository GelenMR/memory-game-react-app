import {jest, describe, test, expect} from '@jest/globals';
import { render, screen } from "@testing-library/react";
import { MemoryBoard } from "../../src/components";
import { useSetUpBoard } from "../../src/hooks/useSetUpBoard";

jest.mock('../../src/hooks/useSetUpBoard');

describe('test component MemoryBoard', () => {
    test('Should show items when images are loaded', () => {
        const imgs = [
            {
                title: 'image1',
                url: 'https://test-url/image1.png',
                state: 0,
            },
            {
                title: 'image2',
                url: 'https://test-url/image2.png',
                state: 0,
            },
        ]
        useSetUpBoard.mockReturnValue({
            messyImages: imgs,
            handleShowImage: ()=>{},
            finished: false,
            levelGame: 12,
        })

        render(<MemoryBoard />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
})