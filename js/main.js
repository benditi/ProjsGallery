$(document).ready(initPage);

function initPage() {
    renderProjs();
}

function renderProjs() {
    var projs = getProjs();
    var htmls = projs.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">Illustration</p>
        </div>
      </div>`
    });
    document.querySelector('#portfolio .row.portfolio').innerHTML = htmls;
}

function renderModals(){
    var projs = getProjs();
    var htmls = projs.map(function (proj){
        return ``
    });
}