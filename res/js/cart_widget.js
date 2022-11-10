jQuery(function ($) {

    var empty_cart_hash = sessionStorage.getItem('woocommerce_cart_hash') == '';
    if ( empty_cart_hash || actions.is_lang_switched == 1 || actions.force_reset == 1 ) {
        wcml_reset_cart_fragments();
    }
});

function wcml_reset_cart_fragments(){
    try {
        jQuery(function () {
            jQuery(document.body).trigger('wc_fragment_refresh');
            //backward compatibility for WC < 3.0
            sessionStorage.removeItem('wc_fragments');
        });
    } catch(err){}
}