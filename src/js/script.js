jQuery(function($) { // この中であればWordpressでも「$」が使用可能になる

    var topBtn = $('.js-pageTop');
    topBtn.hide();

    // ボタンの表示設定
    $(window).scroll(function() {
        if ($(this).scrollTop() > 70) {
            // 指定px以上のスクロールでボタンを表示
            topBtn.fadeIn();
        } else {
            // 画面が指定pxより上ならボタンを非表示
            topBtn.fadeOut();
        }
    });

    // ボタンをクリックしたらスクロールして上に戻る
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 300, 'swing');
        return false;
    });



    // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

    $(document).on('click', 'a[href*="#"]', function() {
        let time = 400;
        let header = $('header').innerHeight();
        let target = $(this.hash);
        if (!target.length) return;
        let targetY = target.offset().top - header;
        $('html,body').animate({ scrollTop: targetY }, time, 'swing');
        return false;
    });

    // フォームの入力確認
    $(function() {
        let $submit = $('.js-form__submit');
        $('.js-form__name, .js-form__email, .js-form__content, .js-form__checkbox').on('change', function() {
            if (
                $('.js-form__name').val() !== "" &&
                $('.js-form__email').val() !== "" &&
                $('.js-form__content').val() !== "" &&
                $('.js-form__checkbox').prop('checked') === true
            ) {
                // すべて入力されたとき
                $submit.prop('disabled', false)
            } else {
                // 入力されていないとき
                $submit.prop('disabled', true)
            }
        })
    });

    // モーダル
    $('.js-close-button').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        $(target).hide();
    })

    $('.js-modal__open').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        $(target).show();
    })
});