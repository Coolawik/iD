iD.ui.loading = function(message) {
    var modal = iD.ui.modal();

    var loadertext = modal.select('.content')
        .classed('loading-modal', true)
        .append('div').attr('class','modal-section fillL');
        loadertext.append('img').attr('class','loader').attr('src', '/img/loader.gif');
        loadertext.append('h3').text(message || '');

    return modal;
};
