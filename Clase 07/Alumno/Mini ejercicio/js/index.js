var car = '{"price":3500,"model":"Etios","brand":"Toyota"}'
auto = JSON.parse(car)
console.log('precio : ' + auto.price + ' | modelo : ' + auto.model)