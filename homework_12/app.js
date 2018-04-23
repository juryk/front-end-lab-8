var model = {
    currentPerson: {},
    allPersons: [
      {
        name: 'Lily Butler',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/1.jpg'
      },
      {
        name: 'Waller Perry',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
      },
      {
        name: 'Tammi Donovan',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
      },
      {
        name: 'Doreen Flowers',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
      },
      {
        name: 'Price Pace',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
      },
      {
        name: 'Larson Maldonado',
        score: 1,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
      },
      {
        name: 'Berg Bolton',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
      },
      {
        name: 'Mack Lott',
        score: 3,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
      },
      {
        name: 'Rosanna Mcleod',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
      },
      {
        name: 'Rosalie Rice',
        score: 1,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
      },
      {
        name: 'Virginia Buchanan',
        score: 2,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
      },
      {
        name: 'Lorna Stein',
        score: 4,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
      },
      {
        name: 'Rosalie Steele',
        score: 3,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
      },
      {
        name: 'Wilcox Boyd',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
      },
      {
        name: 'Ollie Rice',
        score: 5,
        photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
      }
    ]
};

var control = {
    init: function(){
        listView.init();
        listView.render();
        scoresView.init();
        scoresView.render();
        headerView.init();
        headerView.render();
    },
    getAllNames: function(){
        let arr = [];
        for(let i = 0; i < model.allPersons.length; i++){
            arr.push(model.allPersons[i].name);
        }
        return arr;
    },
    getAllScores: function(){
        let arr = [];
        for(let i = 0; i < model.allPersons.length; i++){
            arr.push(model.allPersons[i].score);
        }
        return arr;
    },
    setCurrentPerson: function(index){
        model.currentPerson = model.allPersons[index];
    },
    getCurrentPerson: function(){
        return model.currentPerson;
    },
    viewCurrentProfile: function(){
        profileView.init();
        profileView.render();
    },
    setCurrentPersonScore: function(value){
        model.currentPerson.score = value;
    },
    sortPersons: function(callback) {
        model.allPersons.sort(callback);
        listView.init();
        listView.render();
        scoresView.init();
        scoresView.render();
    }
};

var listView = {
    init: function(){
        this.ul = $('.names')[0];
        this.data = control.getAllNames();
        this.handleClicks();
    },
    render: function(){
        $(this.ul).empty();
        for(let i = 0; i < this.data.length; i++){
            let li = document.createElement('li');
            $(li).append(this.data[i]).attr('index', i);
            $(this.ul).append(li);
        }
    },
    handleClicks: function(){
        $(this.ul).click(function(event){
            let li = event.target;
            let index = $(li).attr('index');
            control.setCurrentPerson(index);
            control.viewCurrentProfile();
        })
    }
};


var scoresView = {
    init: function(){
        this.ul = $('.scores')[0];
        this.data = control.getAllScores();
        this.handleClicks();
    },
    render: function(){
        $(this.ul).empty();
        for(let i = 0; i < this.data.length; i++){
            let li = document.createElement('li');
            $(li).append(`<span>${this.data[i]}</span>`);
            let input = document.createElement('input');
            $(input).attr('type', 'text').attr('hidden', true).attr('index', i).addClass('score-input').val(this.data[i]);
            $(li).append(input);
            $(this.ul).append(li);
        }
    },
    handleClicks: function(){
        $(this.ul).click(function(event){
            let $span = $(event.target.children)[0];
            let $input = $(event.target.children)[1];
            $($span).attr('hidden', true);
            $($input).attr('hidden', false).focus();
            let $index = $($input).attr('index');
            control.setCurrentPerson($index);
            let value;
            $($input).on('blur', function(event){
                value = +$($input).val();
                $($input).attr('hidden', true);
                control.setCurrentPersonScore(value);
                $($span).attr('hidden', false).html(value);
            });
        })
    }
};


var profileView = {
    init: function(){
        this.$profile = $('.profile')[0];
    },
    render: function(){
        $(this.$profile).empty();
        let currentPerson = control.getCurrentPerson();
        let image = document.createElement('img');
        $(image).attr('src', currentPerson.photoUrl);
        let h3 = document.createElement('h3');
        $(h3).append(currentPerson.name);
        let p = document.createElement('p');
        $(p).append(`Score ${currentPerson.score}`);
        $(this.$profile).append(image);
        $(this.$profile).append(h3);
        $(this.$profile).append(p);
    }
};

var headerView = {
    init: function() {
        this.$wrapper = $('.wrapper');
    },
    render: function() {

        let nameArrowUp = document.createElement('div');
        $(nameArrowUp).addClass('arrow-up');
        let nameArrowDown = document.createElement('div');
        $(nameArrowDown).addClass('arrow-down');

        let scoreArrowUp = document.createElement('div');
        $(scoreArrowUp).addClass('arrow-up');
        let scoreArrowDown = document.createElement('div');
        $(scoreArrowDown).addClass('arrow-down');


        let header = document.createElement('div');
        $(header).addClass('header');
        let nameControl = document.createElement('div');
        let p = document.createElement('p');
        $(p).append(document.createTextNode('Name'));
        $(nameControl).addClass('name-controls').append(p).append(nameArrowUp).append(nameArrowDown);
        p = document.createElement('p');
        $(p).append(document.createTextNode('Score'));
        let scoreControl = document.createElement('div');
        $(scoreControl).addClass('score-controls').append(p).append(scoreArrowUp).append(scoreArrowDown);
        header.append(nameControl);
        header.append(scoreControl);

        $(this.$wrapper).before(header);

        this.handleClicks();
    },
    handleClicks: function() {
        $('.name-controls .arrow-up').click(function(event){
            let $display = $('.name-controls .arrow-down').css("display");
            if($display === 'none'){
                $('.name-controls .arrow-down').trigger('click');
                $('.name-controls .arrow-down').css({'display': 'block'})
                $(this).hide();
            } else {
                control.sortPersons(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });
                $(event.target).css({"border-bottom-color": "#00BCD4"});
                $('.name-controls .arrow-down').hide();
            }
        });
        $('.name-controls .arrow-down').click(function(event){
            let $display = $('.name-controls .arrow-up').css("display");
            if($display === 'none') {
                $('.name-controls .arrow-up').trigger('click');
                $(this).hide();
                $('.name-controls .arrow-up').css({'display': 'block'})
            } else {
                control.sortPersons(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                    return 0;
                });
                $(event.target).css({"border-top-color": "#00BCD4"});
                $('.name-controls .arrow-up').hide();
            }
        });
        $('.score-controls .arrow-up').click(function(event){
            let $display = $('.score-controls .arrow-down').css("display");
            if($display === 'none'){
                $('.score-controls .arrow-down').trigger('click');
                $('.score-controls .arrow-down').css({'display': 'block'})
                $(this).hide();
            } else {
                control.sortPersons(function (a, b) {
                    return a.score - b.score
                });
                $(event.target).css({"border-bottom-color": "#00BCD4"});
                $('.score-controls .arrow-down').hide();
            }
        });
        $('.score-controls .arrow-down').click(function(event){
            let $display = $('.score-controls .arrow-up').css("display");
            if($display === 'none'){
                $('.score-controls .arrow-up').trigger('click');
                $('.score-controls .arrow-up').css({'display': 'block'})
                $(this).hide();
            } else {
                control.sortPersons(function (a, b) {
                    return b.score - a.score;
                });
                $(event.target).css({"border-top-color": "#00BCD4"});
                $('.score-controls .arrow-up').hide();
            }
        });
    }
}

control.init();
