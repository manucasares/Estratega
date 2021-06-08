import React from 'react'
import { RulesIcon } from '../gameLogic/RulesIcon'

export const GameRules = () => {

    return (
        <section
            className="game-rules-screen animate__animated animate__fadeIn"
            id="game_rules"
        >
            <div className="game-rules">
                
                <h2 className="title">Reglas</h2>
    
                <p className="subtitle">Introducción:</p>
    
                <p className="rules-text">
                    El estratega es un juego de cartas. Se juega con un mazo de 48 cartas españolas. Gana el que llegue primero al puntaje que se estipule como <strong>puntaje ganador</strong>.
                </p>
    
                <p className="rules-text">
                    Al inicio de la partida los jugadores deberán estipular el orden en el que tirarán las cartas. Este orden irá rotando por cada ronda, por ejemplo, el que comienza en una ronda, en la próxima pasaría a ser el último.
                </p>
    
                <p className="subtitle">Dinámica de una ronda:</p>
    
                <p className="rules-text">
                    Lo primero en cada ronda es que el último jugador debe repartir las cartas, la cantidad de cartas va variando por rondas, pero siempre debe ser impar. En la primera ronda se reparte 1 carta, en la próxima 3, en la próxima 5, etc... Supongamos que <strong>el límite de cartas</strong> se estipuló en 5, en la próxima ronda de la ronda que se repartieron 5 cartas, se vuelve a repartir una carta, creandose un ciclo: 1, 3, 5, 1, 3, 5, etc...
                </p>
    
                <p className="rules-text">
                    Los jugadores observarán la/s carta/s recibida/s, sin mostrarla/s, y cada jugador predecirá <strong>cuántas cartas piensa que va a ganar</strong>. Luego las van a ir diciendo en el <strong>orden correspondiente</strong>, por ejemplo, el primero dice: "yo creo que gano 1", el segundo: "yo creo que gano 0", etc...
                </p>
    
                <p className="rules-text">
                    Luego de que los jugadores hayan dicho cuántas cartas piensan que van a ganar, el primer jugador tirará una carta boca arriba, la que quiera, el segundo jugador hace lo mismo, y así hasta el último jugador... En este momento tenemos a cada jugador con una carta boca arriba sobre la mesa.
                </p>
    
                <p className="rules-text">
                    Aquí se verá quién tiró la carta más alta. Los valores de las cartas son los siguientes: 2, 3, 4..., 10, 11, 12, AS. Siendo el AS la carta más alta. En caso de empate <strong>gana el primero que haya tirado</strong>. El ganador del ciclo recojerá las cartas y las dejará a un lado. Luego comienza otra ciclo, se repite lo mismo, y así hasta que no haya más cartas que tirar.
                </p>
    
                <p className="rules-text">
                    Si recuerdan, al principio de la ronda cada jugador predijo <strong>cuántas cartas pensó que iba a ganar</strong>. Acá es cuando esa decisión importa, supongamos que el jugador 1 pensó que ganaría dos cartas, y efectivamente ganó dos ciclos (o cartas), ese jugador acertó en su decisión y ganará puntos por ese acierto. El jugador que no haya acertado su predicción no ganará ningún punto en la ronda.
                </p>
    
                <p className="subtitle">Puntajes:</p>
    
                <p className="rules-text">
                    Para entender cómo es la adquisición de puntos es mucho más simple entenderlo con un par de ejemplos:
                </p>
    
                <p className="rules-text">
                    Primer caso: un jugador predice que va a ganar 2 cartas y efectivamente acierta en su predicción, este jugador se llevará 7 puntos en esta ronda, ¿por qué? Por haber acertado y haber dicho un valor diferente a 0 de base obtiene 5 puntos, y por cada carta ganada ganará otro punto... Entonces predijo 2 cartas, 2 es diferente a 0, ahí van 5 puntos y 2 cartas que predijo 7... 5 + 2 = 7.
                </p>
    
                <p className="rules-text">
                    Segundo caso: un jugador predice que va a ganar 0 cartas y acierta, este jugador solo obtiene un punto.
                </p>

                <p className="subtitle">Detalle a tener en cuenta:</p>

                <p className="rules-text">
                    Para evitar que en una ronda puedan ganar todos, el último jugador en predecir las cartas que va a ganar, a veces, no puede elegir una opción. Supongamos que la ronda es de 1 carta y son 3 jugadores los que juegan: el primero dice que gana 1 carta, el segundo que pierde, el tercero estará obligado a decir que gana 1 carta, ¿por qué? Porque si dijera que pierde, se podría dar el caso en el que aciertan todos: gana el jugador 1 y pierden el 2 y 3.
                </p>

                <p className="rules-text">
                    Para determinar cuál es la opción que no puede elegir el último jugador se tiene que ir sumando el valor de las predicciones, en el ejemplo anterior sería, 1 (1er jugador) + 0 (2do jugador) = 1, el último jugador nunca puede predecir el valor que conllevaría a que la suma total de los valores de las predicciones sea igual a el número de cartas que se reparten en la ronda. Es un poco confuso esto, pero es decir, tomando el ejemplo dado, si el jugador 3 eligiera 0: 1 + 0 + 0 = 1, 1 es igual al valor de cartas repartidas en esta ronda, por lo que sería un error.
                </p>

            </div>

            <RulesIcon />
        </section>
    )
}
