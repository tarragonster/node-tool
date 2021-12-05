const uploadFile = (event) => {
  event.preventDefault()

  const FR = new FileReader();
  const imagefile = document.querySelector('#file');

  FR.readAsDataURL( imagefile.files[0] );

  FR.addEventListener("load", async function(e) {
    document.getElementById("b64").innerHTML = e.target.result;

    await axios({
      method: 'post',
      url: 'http://localhost:3000/image/upload',
      data: JSON.stringify({
        url: e.target.result,
        name: imagefile.files[0].name,
        type: imagefile.files[0].type,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      console.log("upload successful")
      console.log(res)
    })
  });
}