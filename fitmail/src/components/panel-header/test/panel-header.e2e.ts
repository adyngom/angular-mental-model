import { newE2EPage } from '@stencil/core/testing';

describe('panel-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<panel-header></panel-header>');

    const element = await page.find('panel-header');
    expect(element).toHaveClass('hydrated');
  });
});
