const deleteProduct = (btn) => {
  console.log(btn.parentNode.querySelector("[name=productId]"));
  const csrf = btn.parentNode.querySelector("[name=_csrf]").value;

  const productElement = btn.closest('article');

  fetch("/admin/product/" + prodId, {
    method: "DELETE",
    header: {
      "csrf-token": csrf,
    },
  })
    .then(result => {
        return result.json();
    })
    .then(data => {
        console.log(data);
        productElement.parentNode.removeChild(productElement);
    })
    .catch(err => {
        console.log(err)
    }); // then, catch это промисы объект, представляющий результат успешного или неудачного завершения асинхронной операции
};