
let prId = 45;
let data = [];

//To create a new image input on add button clicked
let add_img = document.getElementById('add-img');
let img_container = document.querySelector('.img-container');
add_img.addEventListener('click', () => {
    let span = img_container.cloneNode(true);
    span.querySelector('input').value = '';
    add_img.insertAdjacentElement('beforebegin', span);
    update();
});



//To remove the image input on remove button clicked
let update = () => {
    let remove_buttons = document.querySelectorAll('.img-container button');
    remove_buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (!(remove_buttons.length == 1)) {
                btn.parentElement.remove();
            }
            update();
        });
    });
}

// To save the data in object
let submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    let title = document.getElementById('title').value;
    let price = parseInt(document.getElementById('price').value);
    let category = document.getElementById('category').value;
    let sub_category = document.getElementById('sub-category').value;
    let discription = document.getElementById('discription').value;
    let link = document.getElementById('link').value;
    let images = document.querySelectorAll('.images');

    let img_arr = [];
    images.forEach((elm) => {
        img_arr.push(elm.value);
    });

    data.push({
        'title': title,
        'price': price,
        'discription': discription,
        'categorym': category,
        'sub_category': sub_category,
        'link': link,
        'images': img_arr,
        'id' : prId
    });





    //Removing data from input
    document.querySelectorAll('input[type=text]').forEach((elm) => {
        elm.value = '';
    });

    prId++;
});

// To save the object in storage
let save = document.querySelector('.save');
save.addEventListener('click', () => {
    navigator.clipboard.writeText(JSON.stringify(data));
    localStorage.setItem('data-5', JSON.stringify(data));
    document.write(JSON.stringify(data));
});

