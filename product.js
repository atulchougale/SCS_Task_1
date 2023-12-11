

async function displayItems(){
    var biryani= document.getElementById('biryani');
    var paneer=  document.getElementById('paneer');;
    var chicken=  document.getElementById('chicken');
    var vegetable=  document.getElementById('vegetable');
    var chinese=  document.getElementById('chinese');
    var southIndian=  document.getElementById('south');
    var kolhapurSpeciale =document.getElementById('kolhapur')

    let data= await fetch('https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis')
    console.log(data)
    let res=await data.json()
    console.log(res)

    const biryaniData= res.filter((item)=>item.category=='biryani');
    const chickenData= res.filter((item)=>item.category=='chicken');
    const PaneerData= res.filter((item)=>item.category=='paneer');
    const vegetableData= res.filter((item)=>item.category=='vegetable');
    const chineseData= res.filter((item)=>item.category=='chinese');
    const southData= res.filter((item)=>item.category=='south indian');
    const kolhapuriSpecialeData= res.filter((item)=>item.category=='Kolhapuri_Speciale');


    biryaniData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o fa-solid fa-heart');
        heart.setAttribute('id',item.id1)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);
       


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        biryani.appendChild(itemCard);
        
    })

    chickenData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o fa-solid fa-heart');
        heart.setAttribute('id',item.id)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        chicken.appendChild(itemCard)

    })

    PaneerData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o fa-solid fa-heart');
        heart.setAttribute('id',item.id)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        paneer.appendChild(itemCard)

    })

    vegetableData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o fa-solid fa-heart');
        heart.setAttribute('id',item.id)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        
        vegetable.appendChild(itemCard)
    
    })

    chineseData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o fa-solid fa-heart');
        heart.setAttribute('id',item.id)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        
        chinese.appendChild(itemCard)
        
    })

    southData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o fa-solid fa-heart');
        heart.setAttribute('id',item.id)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard)

    })

    kolhapuriSpecialeData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o fa-solid fa-heart');
        heart.setAttribute('id',item.id1)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        kolhapurSpeciale.appendChild(itemCard)

    })
}
displayItems();


const vegData= [...new Map(foodItem.map(item=> [item['category'],item])).values()];
console.log(vegData);

function selectTaste(){
    var categoryList= document.getElementById('category-list');

    vegData.map(item=>{
        console.log(item)
        var listCard= document.createElement('div');
        listCard.setAttribute('class','list-card');
    
        var listImg= document.createElement('img');
        listImg.src= item.img;
    
        var listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#'+item.category)
    
        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard)
    })
}
selectTaste();