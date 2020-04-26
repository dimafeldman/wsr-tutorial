import { buttonTestkitFactory, inputTestkitFactory, dropdownTestkitFactory, checkboxTestkitFactory, inputAreaTestkitFactory, textTestkitFactory } from 'wix-style-react/dist/testkit/puppeteer';

describe('WSR Form e2e', () => {
  let nameInputDriver;
  let colorDropdownDriver;
  let funFactInputDriver;
  let tosInputDriver;
  let submitButtonDriver;
  let clearButtonDriver;
  let nameTextDriver;
  let colorTextDriver;
  let funFactTextDriver;

  beforeEach(async () => {
    nameInputDriver = await inputTestkitFactory({ page, dataHook: 'input-name' });
    colorDropdownDriver = await dropdownTestkitFactory({ page, dataHook: 'input-color' });
    funFactInputDriver = await inputAreaTestkitFactory({ page, dataHook: 'input-fun-fact' });
    tosInputDriver = await checkboxTestkitFactory({ page, dataHook: 'input-tos' });
    submitButtonDriver = await buttonTestkitFactory({ page, dataHook: 'button-submit' });
    clearButtonDriver = await buttonTestkitFactory({ page, dataHook: 'button-clear' });
    nameTextDriver = await textTestkitFactory({ page, dataHook: 'result-name' });
    colorTextDriver = await textTestkitFactory({ page, dataHook: 'result-color' });
    funFactTextDriver = await textTestkitFactory({ page, dataHook: 'result-fun-fact' });
  });

  it('should not be able to submit the form without filling it first', async () => {
    await page.goto(app.getUrl('/'));

    expect(await submitButtonDriver.isButtonDisabled()).toEqual(true);
  });

  it('should fill the form and submit it', async () => {
    await page.goto(app.getUrl('/'));

    await nameInputDriver.enterText('Dima Feldman');
    await colorDropdownDriver.driver.selectOptionById('blue');
    await funFactInputDriver.enterText('fun fact');
    await tosInputDriver.click();
    await submitButtonDriver.click();

    nameTextDriver = await textTestkitFactory({ page, dataHook: 'result-name' });
    colorTextDriver = await textTestkitFactory({ page, dataHook: 'result-color' });
    funFactTextDriver = await textTestkitFactory({ page, dataHook: 'result-fun-fact' });

    // check that the output is correct
    expect(await nameTextDriver.getValue()).toEqual('Dima Feldman');
    expect(await colorTextDriver.getValue()).toEqual('Blue');
    expect(await funFactTextDriver.getValue()).toEqual('fun fact');
  });

  it('should reset the form', async () => {
    await page.goto(app.getUrl('/'));

    await nameInputDriver.enterText('Dima Feldman');
    await colorDropdownDriver.driver.selectOptionById('blue');
    await funFactInputDriver.enterText('fun fact');
    await tosInputDriver.click();

    // check that the initial filled values are there
    expect(await nameInputDriver.getText()).toEqual('Dima Feldman');
    expect(await funFactInputDriver.getValue()).toEqual('fun fact');
    expect(await submitButtonDriver.isButtonDisabled()).toEqual(false);

    await clearButtonDriver.click();

    // check that the values were reset
    expect(await nameInputDriver.getText()).toEqual('');
    expect(await funFactInputDriver.getValue()).toEqual('');
    expect(await submitButtonDriver.isButtonDisabled()).toEqual(true);
  });
});
