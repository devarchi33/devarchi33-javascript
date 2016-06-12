/**
 * Created by donghoon on 2016. 6. 11..
 */
angular.module('devarchi33.models.categories', [])

    .service('CategoriesListModel', function () {
        var model = this,
            categories = [
                {"id": 0, "name": "Development"},
                {"id": 1, "name": "Design"},
                {"id": 2, "name": "Exercise"},
                {"id": 3, "name": "Humor"}
            ];

        model.getCategoryList = function () {
            return categories;
        }

    });

