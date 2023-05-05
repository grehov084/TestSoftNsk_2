//alert("working!");
$('.order-form__select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="order-form__select select"></div>');
    $('<div>', {
        class: 'select__current current',
        html: $('<span>',{
                class: 'select__current select__current--span',
        text: _this.children('option:disabled').text()
        }
        )
    }).insertAfter(_this);

    const selectHead = _this.next('.select__current');
    $('<div>', {
        class: 'select__list select-list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'select__item select-item',
            html: $('<span>', {
                class: 'select__text',
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});

$('.mobail__btn').on('click', function(){
    if ($('.mobail__box').hasClass('mobail__box--visible')){
        $('.mobail__box').removeClass('mobail__box--visible');
    }
    else{
        $('.mobail__box').addClass('mobail__box--visible');
    }
}

)

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('order__body--show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.order__body');
  
  for (let elm of elements) {
    observer.observe(elm);
  }


