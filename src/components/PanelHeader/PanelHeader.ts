import { PanelHeaderProps, createPanelHeader } from '../../stories/Headers/PanelHeader';
import { Service, Container } from 'typedi';

@Service()
export class PanelHeaderComponent {
    constructor( private panelHeader: PanelHeaderProps ) {
    }

    getPanelHeader(): string {
        return this.renderPanelHeader();
    }

    protected renderPanelHeader(): string {
        return createPanelHeader(this.panelHeader)
    }
}