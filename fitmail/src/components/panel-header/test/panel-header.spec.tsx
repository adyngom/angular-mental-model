import { newSpecPage } from '@stencil/core/testing';
import { PanelHeader } from '../panel-header';

describe('panel-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PanelHeader],
      html: `<panel-header></panel-header>`,
    });
    expect(page.root).toEqualHtml(`
      <panel-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </panel-header>
    `);
  });
});
