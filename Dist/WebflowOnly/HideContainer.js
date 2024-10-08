'use strict'

class HideContainer {
    constructor(_container) {
        this.container        = _container;
        this.cmsEmptyState    = this.container.querySelector('[wt-hidecontainer-element="empty"]') || null;
        this.isRemoveContainer= this.container.getAttribute('wt-hidecontainer-remove');
        this.init();
    }

    init = () => {
        this.container 
        if(this.cmsEmptyState) { 
            if(this.isRemoveContainer) {this.container.remove();}
            else{this.container.style.display = 'none';}
        }
    }
}

const InitializeHideContainer = () => {
    window.trickeries = window.trickeries || [];
    let hcElements = document.querySelectorAll('[wt-hidecontainer-element="container"]');
    if(!hcElements || hcElements.length === 0) return;
    hcElements.forEach(hcElement => {
        let instance = new HideContainer(hcElement);
        window.trickeries.push({'HideContainer': instance});
    });

}

if (/complete|interactive|loaded/.test(document.readyState)) {
    InitializeHideContainer();
} else { 
    window.addEventListener('DOMContentLoaded',InitializeHideContainer )
}
