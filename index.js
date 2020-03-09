const express = require('express')

const server = express()
server.use(express.json())

var tarefa = [{
    id: 1,
    descricao: "Comprar pão",
    finalizado: false 
}]

server.post('/tarefa', function(request, response) {
    const obj = request.body
    tarefa.push(obj)
    return response.status(201).send()
})

server.get('/tarefa', function(request, response) {
    return response.json(tarefa)
})

server.get('/tarefa/:id', function(request, response){
    const id = request.params.id
    const produto = tarefa.filter(p => p.id == id)
    return response.json(produto)
})

 server.delete('/tarefa/:id', function(request, response){
     const id = request.params.id 
     tarefa = tarefa.filter(e => e.id != id)
     return response.status(200).send()
 })

 server.put('/tarefa/:id', function(request, response) {
     const id = request.params.id
     const obj = request.body

     tarefa.forEach(e => {
         if(e.id == id) {
             e.descricao = obj.descricao
             e.finalizado = obj.finalizado
             return
         }

        return response.send()
     })
 })
server.listen(3000)