const intervalo = 60*60*1000;// hora
var lembrete = Date.now() + intervalo; // tempo pro porx lembrete

function tempo(){
    const agr = new Date();// tempo paraagora
    const tempo = lembrete - agr;// mostra o tempo que falata para o prox lembrete

    if(tempo <= 0){
        mostar()// quando cehagr a 0 mostra
    }else{
        const horas = Math.floor(tempo / intervalo)//horas
        const minutos = Math.floor((tempo % (1000 *60 * 60)) / (1000 * 60))//minutos
        const segundos = Math.floor((tempo % (1000 * 60)) / 1000);//segundos

        console.log(`Tempo restante para o proximo lembrete: ${horas} horas, ${minutos} minutos e ${segundos} segundos`);//horas, minutos e segundo para o prox lembrete
        
    }
}


function mostar(){
    console.log('Lembre de beber agua');// lembrete
    lembrete = Date.now() + intervalo;//atualiza o tempo para o prox lembrete
    
}

mostar()
setInterval(tempo, 1000);//atualiza a cada 1 segundo


