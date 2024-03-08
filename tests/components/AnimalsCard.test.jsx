import {jest, describe, test, expect} from '@jest/globals';
import { render, screen } from "@testing-library/react"
import { AnimalsCard } from "../../src/components/AnimalsCard"

describe('test component AnimalsCard', () => {
    const pos = 0;
    const title = 'test title';
    const url = 'https://test-url/image.png';
    const state = 1;
    const handleShowImage = jest.fn();
    
    test('Should match with the Snapshot', () => {
        const { container } = render(<AnimalsCard pos={pos} title={title} url={url} state={state} handleShowImage={handleShowImage} />)
        expect(container).toMatchSnapshot();
    });
    test('Should show the title and url of the selected image', () => {
        render(<AnimalsCard pos={pos} title={title} url={url} state={state} handleShowImage={handleShowImage} />)
        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
})