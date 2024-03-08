import {jest, describe, test, expect} from '@jest/globals';
import { render, screen, fireEvent } from "@testing-library/react";
import { UserNameInput } from "../../src/components/UserNameInput";

describe('test component UserNameInput', () => {
    test('Should change value of input', () => {
        render(<UserNameInput onNewUser={jest.fn()} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'testName' } });

        expect(input.value).toBe('testName');
    });
    test('Should Not call onNewUser if input has a value', () => {

        const onNewUser = jest.fn();
        render(<UserNameInput onNewUser={onNewUser} />);

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(onNewUser).not.toHaveBeenCalled();
    });
})