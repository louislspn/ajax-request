import './app.css'
import ajax from './utils/ajax'

const links = document.querySelectorAll('a')

links.forEach(link => {

  link.addEventListener('click', e => {
    
    e.preventDefault()

    const datas = {
      target: e.currentTarget.href.substring(e.currentTarget.href.lastIndexOf('/') + 1)
    }

    ajax(datas, res => {

      const r = JSON.parse(res)
      const container = document.querySelector('.container')

      history.pushState({} , '', datas.target)
      document.title = r.title

      container.innerHTML = r.content

    })

  })


})