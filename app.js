// get Elements
const Subm_form = document.getElementById('Subm-form');
const deve_area = document.querySelector('.deve-area');


// Deves form Submit
Subm_form.addEventListener('submit', function(e) {

    e.preventDefault();

    let name   = this.querySelector('input[name=name]');
    let skill  = this.querySelectorAll('input[name=skill]:checked');
    let gender = this.querySelector('input[name=gender]:checked');
    let photo  = this.querySelector('input[name=photo]');

    let skill_arr = [];

    for(let i = 0; i < skill.length; i++){

        skill_arr.push(skill[i].value);
    };

    let data_arr;

    if (dataGet('sub_form')) {
        data_arr = dataGet('sub_form');
    } else {
        data_arr = [];
    };
    data_arr.push({
        photo  : photo.value,
        name   : name.value,
        gender : gender.value,
        skill  : skill_arr
    })

    dataSend ('sub_form', data_arr);
    allDeveloper ();

 name.value     = '';
 photo.value    = '';
 gender.checked = false;



});




allDeveloper ();

function allDeveloper () {
    let all_devs = dataGet('sub_form');
    let data = '';

    all_devs.map(d =>{
    let list = '';
    d.skill.map(lists =>{
        list +=' <li class="list-group-item">'+ lists +'</li>'
    });
        data += `
        <div class="col-md-4 py-2 px-2">
        <img style="width: 100%; height: 250px; object-fit: cover;" class="card-img-top" src="${ d.photo }" alt="">
        <h5>${ d.name }</h5>
        <p>${ d.gender }</p>
        <h6>Skill</h6>
        <ul class="list-group">
        <li class="list-group-item">${ list }</li>
        </ul>
        </div>
        `;
    });
   deve_area.innerHTML = data;

}