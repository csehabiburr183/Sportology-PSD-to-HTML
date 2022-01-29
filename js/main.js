(function () {
    var searchForm = document.getElementById('search-form')
    document.getElementById('search-btn').addEventListener('click', function () {
        searchForm.classList.toggle('d-inline-block')
        searchForm.classList.toggle('d-none')
    })

})();
