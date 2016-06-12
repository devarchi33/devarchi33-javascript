/**
 * Created by donghoon on 2016. 6. 11..
 */
angular.module('devarchi33.models.bookmarks', [])

    .service('BookmarksModel', function ($http) {
        var model = this,
            URLS = {
                FETCH: 'data/bookmarks.json'
            },
            bookmarks;


        function extract(result) {
            return result.data;
        }

        function cacheBookmark(result) {
            bookmarks = extract(result);
            return bookmarks;
        }

        model.getBookmarkList = function () {
            return $http.get(URLS.FETCH).then(cacheBookmark);
        };

        model.createBookmark = function (bookmark) {
            bookmark.id = bookmarks.length;
            bookmarks.push(bookmark);
        };
    });

