console.log('Hello')

var updateBtns = document.getElementsByClassName('update-cart')

for(var i = 0; i < updateBtns.length; i++){
  updateBtns[i].addEventListener('click', function(){
    var productId = this.dataset.product
    var action = this.dataset.action
    console.log('productId:', productId, 'action:', action)

    console.log('User:', user) // what does user refer to?
    if(user === "AnonymousUser"){
      console.log('Not logged In')
    }else{
      updateUserOrder(productId, action)
    }
  })
}

function updateUserOrder(productId, action){
  console.log('logged In, sending data...')

  var url = '/update_item/'

  fetch(url, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': csrftoken,
  },
  body: JSON.stringify({'productId': productId, 'action': action}),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    location.reload();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
