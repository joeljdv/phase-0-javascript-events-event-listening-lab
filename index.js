function addingEventListener() {
    const div=document.getElementsByTagName('div')[5]
    const input=document.getElementById('input')
    input.addEventListener('click',addingEventListener)
    div.addEventListener('click',addingEventListener)
    alert('I was clicked')
}

addingEventListener()
