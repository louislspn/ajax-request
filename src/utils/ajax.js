export default function ajax (datas, callback) {

  var xhttp = new XMLHttpRequest()

  xhttp.open('POST', '/ajax/router.php', true)
  xhttp.setRequestHeader('Content-Type', 'application/json')

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status == 200) {

      callback(this.responseText)

    }
  }

  xhttp.send(JSON.stringify(datas))

}