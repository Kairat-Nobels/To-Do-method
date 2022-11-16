const input = document.getElementById('input')
const button = document.getElementById('create_button')
const list = document.getElementById('todo__list')

let todo = e =>
{
    if (input.value.trim() != '') {
        const div = document.createElement("div")
        const text = document.createElement("h3")
        text.innerText = input.value
        list.append(div)
        div.append(text)
        input.value = ""
        // blocks
        const buttons = document.createElement("div")
        buttons.setAttribute("class", "buttons")
        div.append(buttons)
        // change
        const change = document.createElement("button")
        buttons.append(change)
        change.setAttribute("class", "block_text")
        change.setAttribute("class", "change")
        change.innerText = "change"
        change.onclick = (e) =>
        {
            // проверка чтобы не изменили на пробел или пустоту
            let ttt = prompt().trim()
            if(ttt != "" || ttt.length != 0) text.innerText = ttt;
        }
        // delete
        const del = document.createElement("button")
        buttons.append(del)
        div.setAttribute("class", "block_text")
        del.setAttribute("class", "delete")
        del.innerText = "delete"
        del.onclick = (e) => buttons.parentElement.remove()
    }
    else input.value = ""
}
button.onclick = () => todo()
input.addEventListener('keydown', e =>
{
    if (e.keyCode === 13) todo()
})