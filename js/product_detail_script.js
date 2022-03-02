/* let tabMenu=$('.content-tab');
function tabsMenu(e){
    e.preventDefault();
    let $this=$(this);
    $this.next('dl').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>dl').hide()
}
tabMenu.find('>ul>li>a').click(tabsMenu); */

$('.content-tab').each(function(){
    let tabDiv=$(this);
    let anchors=tabDiv.find('ul li a'); //클릭할 a태그
    let panelDiv=tabDiv.find('.tab-infos .tab-info'); //클릭하면 보여질 내용
    let lastAnchor;
    let lastPanel;

    lastAnchor=anchors.filter('.on');
    lastPanel=$(lastAnchor.attr('href'));

    panelDiv.hide();
    lastPanel.show();

    anchors.click(function(e){
        e.preventDefault();
        let currentAnchor=$(this);
        let currentPanel=$(currentAnchor.attr('href'));

        lastAnchor.removeClass('on');
        currentAnchor.addClass('on');

        lastPanel.hide();
        currentPanel.show();
        lastAnchor=currentAnchor;
        lastPanel=currentPanel;
    });
});