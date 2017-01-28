(function () {
    var app = angular.module('foodStore', ['store-directives']);

    app.controller('StoreController', function () {
        this.products = foods;
    });

    app.controller("addController", function () {

        this.add = {};
        this.addFood = function (product) {
            product.push(this.add);
            this.add = {};
        };

    });

    var foods = [{
        name: 'Marble Slap Ice Cream',
        description: "Choice of coconut, mango, or ask for today’s selections.",
        price: 110.50,
        category: 'Dessert',
        order: [{
            quantatiy: 5,
            AddOns1: true,
            Addons2: false
        }]

    }, {
        name: 'Mango Sticky Rice',
        description: "Fresh mango, sticky rice topped with a coconut milk & palm sugar sauce.",
        price: 22.90,
        category: 'Dessert',
        order: [{
            quantatiy: 3,
            AddOns1: true,
            Addons2: false
        }]
    }, {
        name: 'SPICY CHICKEN/BEEF ',
        description: "Chicken breast or beef slices, bell peppers, carrots & onions in a chili sauce with Thai herbs",
        price: 25.90,
        category: 'MEAT DISHES',
        order: [{
            quantatiy: 3,
            AddOns1: true,
            Addons2: false
        }]
    }, {
        name: 'LIME LEAF CHICKEN/BEEF ',
        description: "Chicken breast or beef slices, bell peppers, carrots & onions in a chili sauce with Thai herbs",
        price: 100.90,
        category: 'MEAT DISHES',
        order: [{
            quantatiy: 3,
            AddOns1: true,
            Addons2: false
        }]
    }, {
        name: 'SEA QUEEN',
        description: "Breaded squid with thyme & chili, served with a honey & lime juice sauce.",
        price: 90,
        category: 'SEAFOOD',
        order: [{
            quantatiy: 3,
            AddOns1: true,
            Addons2: false
        }]
    }, {
        name: 'SEAFOOD COMBINATION',
        description: "Shrimp, squid, broccoli, lettuce & carrots in a coconut milk chili sauce with Thai herbs.",
        price: 150.00,
        category: 'SEAFOOD',
        order: [{
            quantatiy: 3,
            AddOns1: true,
            Addons2: false
        }]
    }];

})();