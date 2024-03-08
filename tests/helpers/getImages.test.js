import { describe, test, expect } from '@jest/globals';
import { getImages } from "../../src/helpers/getImages";

describe('test getImages()', () => {

    test('Should return an array of images', async() => {
        const images = await getImages();

        expect(images.length).toBeGreaterThan(0);
        expect(images[0]).toEqual({
            title: expect.any(String),
            url: expect.any(String),
            state: expect.any(Number),
        });
    });
})