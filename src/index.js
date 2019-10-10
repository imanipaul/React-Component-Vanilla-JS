// const tiny = require('@bamblehorse/tiny')

// console.log(tiny('This is a test'))
import tiny from '@bamblehorse/tiny'
import Fancy from 'react-fancy-component-ip'
import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

const root = document.createElement('div')
root.innerHTML = `<p>Hello Webpack.</p>`
document.body.appendChild(root)


console.log(tiny('This is a test'))

const words = tiny('this is a test of a long string of words together')
const container = document.createElement('div')
container.innerHTML = words
document.body.appendChild(container)

// const newContainer = document.createElement('div')
// newContainer.innerHTML = `<${Fancy} />`
// document.body.appendChild(newContainer)

ReactDOM.render(
    <div>
        <Fancy />
    </div>, document.getElementById('react-section')
)
