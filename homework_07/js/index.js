$(function() {
    let isWhite = true;
    let setNextPlayer = () => {
        isWhite = !isWhite;
        if(isWhite){
            $('.player-2').removeClass('underlined');
            $('.player-1').addClass('underlined')
        } else {
            $('.player-1').removeClass('underlined');
            $('.player-2').addClass('underlined')
        }
    }
    let verifyWin = (first, second) => {
        let count = 0;
        let className;
        isWhite ? className = 'isWhite' : className = 'isBlack';
        //vertical
        for(let i = 0; i < 15; i++){
            let elem = $(`#${[i]}-${second}`).children()[0];
            if($(elem).hasClass(className)){
                count++;
            } else {
                count = 0;
            }
            if(count >= 4){
                showWinMessage(className);
                return
            }
        }
        // horizontal
        count = 0;
        for(let i = 0; i < 15; i++){
            let elem = $(`#${first}-${[i]}`).children()[0];
            if($(elem).hasClass(className)){
                count++;
            } else {
                count = 0;
            }
            if(count >= 4){
                showWinMessage(className);
                return
            }
        }
        // diagonal left-right
        count = 0;
        let startPosition = [];
        if(+second > +first) {
            startPosition.push(0);
            startPosition.push(+second-first);
        } else if(second === first) {
            startPosition.push(0);
            startPosition.push(0);
        } else if(second < first) {
            startPosition.push(+first-second);
            startPosition.push(0);
        }
        for(let i = startPosition[0]; i < 15; i++){
            let elem = $(`#${[i]}-${startPosition[1]}`).children()[0];
            if($(elem).hasClass(className)){
                count++;
            } else {
                count = 0;
            }
            if(count >= 4){
                showWinMessage(className);
                return
            }
            startPosition[1]++;
        }
        // diagonal right-left
        count = 0;
        startPosition = [];
        let sum = +first + +second;
        if( sum <= 14) {
            startPosition.push(0);
            startPosition.push(sum);
        } else if( sum > 14) {
            startPosition.push(+second + +first - 14);
            startPosition.push(14);
        }
        for(let i = startPosition[0]; i < 15; i++){
            let elem = $(`#${[i]}-${startPosition[1]}`).children()[0];
            if($(elem).hasClass(className)){
                count++;
            } else {
                count = 0;
            }
            if(count >= 4){
                showWinMessage(className);
                return
            }
            startPosition[1]--;
        }

    }
    let showWinMessage = (className) => {
        let winner = className === 'isWhite' ? 'White' : 'Black';
        $('.win-info').html(`${winner} wins!`).css({'display': 'block'});
        $('.square').unbind();
    }

    for(let i = 0; i < 15; i++){
        let row = document.createElement('div');
        $(row).addClass('row');
        for(let j = 0; j < 15; j++){
            let square = document.createElement('div');
            let stone = document.createElement('div');
            $(square).addClass(`square`).attr('id', `${[i]}-${[j]}`).appendTo(row);
            $(stone).addClass('stone').appendTo(square);
        }
        $(row).appendTo('#container');
    }

    $('.square').on('click', (event) => {
        let elem = $(event.target);
        let id;

        if(elem.hasClass('square')){
            id = elem.attr('id').split('-');
        } else if(elem.hasClass('stone')){
            id = elem.parent().attr('id').split('-');
        }
        elem.hasClass('square') ? elem = $(event.target.children[0]) : elem;

        elem.removeAttr('style');
        if(elem.hasClass('isWhite') || elem.hasClass('isBlack')){
            console.log('it already has class')
        } else {
            if(isWhite){
                elem.addClass('isWhite');
                verifyWin(id[0], id[1]);
                setNextPlayer();
            } else if(!isWhite){
                elem.addClass('isBlack');
                verifyWin(id[0], id[1]);
                setNextPlayer();
            }
        }
    })

    $('.square').hover(
        (event) => {
            let elem = $(event.target);
            elem.hasClass('square') ? elem = $(event.target.children[0]) : elem;

            if(elem.hasClass('isWhite') || elem.hasClass('isBlack')){

            } else {
                if(isWhite){
                    elem.css({
                        'background-color': 'white'
                    })
                } else if(!isWhite){
                    elem.css({
                        'background-color': 'black'
                    })
                }
                elem.css({
                    'opacity': '0.5',
                    'display': 'inline-block'
                })
            }
        },
        (event) => {
            let elem = $(event.target);
            elem.hasClass('square') ? elem = $(event.target.children[0]) : elem;
            elem.removeAttr('style');
        }
    );
})
