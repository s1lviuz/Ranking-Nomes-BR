async function startApp () {
    await fetch('nomes.json')
    .then((response) => response.json())
    .then((listaNomes) => {
        const tabela1 = document.querySelector('#tabela1')
        const tabela2 = document.querySelector('#tabela2')

        const listaNomesTodos = unifyNames(listaNomes.map((item) => {
            if (item.periodo == "todos") {
                return item
            } 
        }).filter((item) => {
            return item !== undefined
        }))
        const listaNomes2000 = unifyNames(listaNomes.map((item) => {
            if (item.periodo == 2000) {
                return item
            }
        }).filter((item) => {
            return item !== undefined
        }))
        
        listaNomesTodos.forEach((item) => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
            <td>${item.rankBR}</td>
            <td>${item.nome}</td>
            <td>${item.quantidade}</td>
            <td>${item.rankTO}</td>
            <td>${item.quantidadeTocantins}</td>
            `
            tabela1.append(tr)
        })

        listaNomes2000.forEach((item) => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
            <td>${item.rankBR}</td>
            <td>${item.nome}</td>
            <td>${item.quantidade}</td>
            <td>${item.rankTO}</td>
            <td>${item.quantidadeTocantins}</td>
            `
            tabela2.append(tr)
        })
    })
}

function unifyNames (list) {
    const regionBrasil = getRanking(list.map((item) => {
        if (item.local == "Brasil") {
            return item
        }
    })
    .filter((item) => {
        return item !== undefined
    }))

    const regionTocantins = getRanking(list.map((item) => {
        if (item.local == "Tocantins") {
            return item
        }
    })
    .filter((item) => {
        return item !== undefined
    }))

    regionBrasil.forEach((item) => {
        regionTocantins.forEach((_item) => {
            if (item.nome === _item.nome) {
                item.quantidadeTocantins = _item.quantidade
                item.rankTO = _item.rankTO
            }
        })
    })
    return regionBrasil
}

function getRanking(list) {
    let rank = 1
    return list.map((item) => {
        if (item.local == "Brasil") {
            item.rankBR = rank
        }
        if (item.local == "Tocantins") {
            item.rankTO = rank
        }
        rank += 1
        return item
    })
}

document.addEventListener('DOMContentLoaded', startApp)