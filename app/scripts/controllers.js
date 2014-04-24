var minesweeperApp = angular.module('MinesweeperApp', []);
minesweeperApp.controller('MinesweeperCtrl', function ($scope) {
    $scope.levels = [
        {
            'id': 'easy',
            'desc': 'Facile 5x5'
        }, {
            'id': 'normal',
            'desc': 'Normal 10x10'
        }, {
            'id': 'hard',
            'desc': 'Dure 50x50'
        }
    ];
    $scope.level = $scope.levels[0];
    $scope.table = {};
    $scope.generateTable = function () {
        switch ($scope.level.id) {
            case 'easy':
                size = 5;
                nbmine = 3;
                break;
            case 'normal':
                size = 10;
                nbmine = 5;
                break;
            case 'hard':
                size = 50;
                nbmine = 20;
                break;
        }
        $scope.table = {};
        while (nbmine > 0){
            row = Math.floor((Math.random() * size));
            column = Math.floor((Math.random() * size));

            if (typeof $scope.table[row] === 'undefined') {
                $scope.table[row] = {};
            }
            $scope.table[row][column] = {
                'status': 'H',
                'content': 'M',
            };
            nbmine--;

        }
        for (row = 0; row < size; row++){
            if (typeof $scope.table[row] === 'undefined') {
                $scope.table[row] = {};
            }
            for (column = 0; column < size; column++){
                if (typeof $scope.table[row][column] === 'undefined') {

                    $scope.table[row][column] = {
                        'status': 'H',
                        'content': ''
                    };
                }
            }
        }
    };
    $scope.toggle = function (row, cell) {
        if ($scope.table[row][cell].status == 'H') {
            $scope.table[row][cell] = 'X';
        } else{
            $scope.table[row][cell] = Math.floor((Math.random() * 8) + 1);
        }
    };
    $scope.getCellClass = function (row, cell) {
        if ($scope.table[row][cell].status === 'H') {
            return 'glyphicon-question-sign';
        } else{
            if ($scope.table[row][cell].content === 'M') {
                return 'glyphicon-fire';
            } else{
                return '';
            }
        }
        return 'glyphicon-question-sign';
    };

    $scope.generateTable();
});