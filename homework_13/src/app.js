var myBlog = angular.module('myBlog', []);

myBlog.controller('PostListController', function PostListController($scope) {
    $scope.posts = defaultPosts;
    $scope.categories = [];
    $scope.showAddPostForm = false;
    $scope.editMode = false;
    $scope.required = true;

    $scope.posts.forEach((el) => {
        for(let i = 0; i < el.categories.length; i++){
            if(!$scope.categories.includes(el.categories[i])){
                $scope.categories.push(el.categories[i]);
            }
        }
    })

    $scope.add = function(post) {
        post.categories = post.categories.trim().split(" ");
        post.categories.forEach((el) => {
            if(!$scope.categories.includes(el)){
                $scope.categories.push(el);
            }
        });
        post.img = post.img || "/default.png";
        $scope.posts.push(angular.copy(post));
    };

    $scope.filterByCategory = function(cat) {
        $scope.filterByCat = cat;
    }

    $scope.showForm = function() {
        $scope.showAddPostForm = !$scope.showAddPostForm;
    }

    $scope.setEditMode = function(post) {
        post.edited = angular.copy(post);
        post.edit = true;
    }
    $scope.disableEditMode = function(post) {
        post.title = post.edited.title;
        post.description = post.edited.description;
        delete post.edit;
        delete post.edited;
    }
})
