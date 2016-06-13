/**
 * Created by donghoon on 2016. 6. 11..
 */
angular.module('devarchi33.models.bookmarks', [])

    .service('BookmarksModel', function ($http, $q) {
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

        function findBookmark(bookmarkId) {
            return _.find(bookmarks, function (bookmark) {
                return bookmark.id === parseInt(bookmarkId, 10);
            })
        }

        model.getBookmarkById = function (bookmarkId) {

            var deffered = $q.defer();

            if (bookmarks) {
                deffered.resolve(findBookmark(bookmarkId));
            } else {
                model.getBookmarkList().then(function () {
                    deffered.resolve(findBookmark(bookmarkId));
                })
            }

            return deffered.promise;
        };

        model.getBookmarkList = function () {
            return (bookmarks) ? $q.when(bookmarks) : $http.get(URLS.FETCH).then(cacheBookmark);
        };

        model.createBookmark = function (bookmark) {
            bookmark.id = bookmarks.length;
            bookmarks.push(bookmark);
        };

        model.updateBookmark = function (bookmark) {
            var index = _.findIndex(bookmarks, function (b) {
                return b.id === bookmark.id;
            })

            bookmarks[index] = bookmark;
        }
    });

