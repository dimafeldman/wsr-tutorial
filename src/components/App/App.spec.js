import { inputTestkitFactory, dropdownTestkitFactory, inputAreaTestkitFactory, checkboxTestkitFactory, buttonTestkitFactory, textTestkitFactory } from 'wix-style-react/dist/testkit';
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('WSR form tests', () => {
  it('should fill and submit the form', async () => {
    const { baseElement } = render(<App />);
    // get inputs
    const nameInputDriver = inputTestkitFactory({ wrapper: baseElement, dataHook: 'input-name' });
    const colorDropdownDriver = dropdownTestkitFactory({ wrapper: baseElement, dataHook: 'input-color' });
    const funFactInputDriver = inputAreaTestkitFactory({ wrapper: baseElement, dataHook: 'input-fun-fact' });
    const tosInputDriver = checkboxTestkitFactory({ wrapper: baseElement, dataHook: 'input-tos' });
    const submitButtonDriver = buttonTestkitFactory({ wrapper: baseElement, dataHook: 'button-submit' });

    // feed the inputs & submit the form
    await nameInputDriver.enterText('Dima Feldman');
    await colorDropdownDriver.driver.selectOptionById('blue');
    await funFactInputDriver.enterText('fun fact');
    await tosInputDriver.click();
    await submitButtonDriver.click();

    // check that the output is correct
    const nameTextDriver = textTestkitFactory({ wrapper: baseElement, dataHook: 'result-name' });
    const colorTextDriver = textTestkitFactory({ wrapper: baseElement, dataHook: 'result-color' });
    const funFactTextDriver = textTestkitFactory({ wrapper: baseElement, dataHook: 'result-fun-fact' });

    expect(await nameTextDriver.getText()).toEqual('Dima Feldman');
    expect(await colorTextDriver.getText()).toEqual('Blue');
    expect(await funFactTextDriver.getText()).toEqual('fun fact');
  });
});
